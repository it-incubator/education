 // Глобальная переменная для активной реакции

// https://chatgpt.com/c/6be697f2-10f5-4053-80b3-e2c0791ff28e

 let activeReaction = null; // Глобальная переменная для активной реакции

 class Observable {
     constructor(value) {
         this._value = value;
         this.observers = new Set();
     }

     get value() {
         if (activeReaction) {
             this.observers.add(activeReaction); // Регистрируем зависимость
         }
         return this._value;
     }

     set value(newValue) {
         this._value = newValue;
         this.observers.forEach(observer => observer()); // Активируем все реакции
     }

     subscribe(reaction) {
         const wrapper = () => {
             const previousReaction = activeReaction;
             activeReaction = wrapper; // Устанавливаем текущую реакцию
             reaction(); // Выполняем реакцию, которая регистрирует зависимости
             activeReaction = previousReaction; // Восстанавливаем предыдущую реакцию
         };

         wrapper(); // Запускаем реакцию сразу же
     }
 }



 const observable1 = new Observable(10);
 const observable2 = new Observable(20);

 observable1.subscribe(() => {
     console.log("Reaction 1 - Value observable1 changed:", observable1.value);
 });

 observable1.subscribe(() => {
     console.log("Reaction 2 - Value observable1 changed:", observable1.value);
     console.log("Reaction 2 - Value observable2 changed:", observable2.value);
 });

 observable2.subscribe(() => {
     console.log("Reaction 3 - Value observable2 changed:", observable2.value);
 });

 observable1.value = 15;
 observable2.value = 25;
