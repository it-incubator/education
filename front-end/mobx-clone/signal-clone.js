function createSignal(initialValue) {
    let value = initialValue;
    const observers = new Set();

    function signal(newValue) {
        if (arguments.length > 0) {
            if (newValue !== value) {
                value = newValue;
                observers.forEach(observer => observer());
            }
        }
        return value;
    }

    signal.observe = function(observer) {
        observers.add(observer);
        return () => observers.delete(observer);
    };

    return signal;
}

function createComputed(computeFn) {
    let cachedValue;
    const computedSignal = createSignal();

    const updateComputedValue = () => {
        const newValue = computeFn();
        if (newValue !== cachedValue) {
            cachedValue = newValue;
            computedSignal(newValue);
        }
    };

    const trackDependencies = () => {
        const dependencies = new Set();
        const track = (signal) => {
            dependencies.add(signal);
            signal.observe(updateComputedValue);
        };
        updateComputedValue();
        dependencies.forEach(dep => dep.observe(updateComputedValue));
    };

    trackDependencies();

    return computedSignal;
}

// Создание базовых сигналов
const count = createSignal(1);

const doubleCount = createComputed(() => {
    return count() * 2;
});

const quadrupleCount = createComputed(() => {
    return doubleCount() * 2;
});

function updateUI() {
    console.log(`Count: ${count()}, Double Count: ${doubleCount()}, Quadruple Count: ${quadrupleCount()}`);
}

// Подписка на изменения
count.observe(updateUI);
doubleCount.observe(updateUI);
quadrupleCount.observe(updateUI);

// Изменение значения базового сигнала
count(2);
// Ожидаемый вывод:
// "Count: 2, Double Count: 4, Quadruple Count: 8"

count(3);
// Ожидаемый вывод:
// "Count: 3, Double Count: 6, Quadruple Count: 12"
