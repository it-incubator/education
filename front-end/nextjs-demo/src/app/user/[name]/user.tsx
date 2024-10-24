'use client'
import {useEffect, useState} from "react";
import {useGetPokemonByNameQuery} from "@/store/services/pokemon";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";

export function User() {
    // const users = useSelector(selectUsers)
    const params = useParams()
    const queryParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()
    console.log(params)
    console.log(queryParams)

    const {data, error, isLoading} = useGetPokemonByNameQuery(params.name)

    const [counter, setCounter] = useState(Number(queryParams.get('counter')))

    useEffect(() => {
        if (!!error) {
            router.push(pathName + '/not-found')
        }
    }, [error])

    if (!data) return <div>...</div>

    console.log('User component rendering')
    return <div>
        <h1>
            {data.name}
        </h1>
        {counter} <button onClick={() => {
        setCounter(counter + 1);
        router.push(pathName + '?name=' + params.name + '&' + 'counter=' + (Number(counter) + 1))
    }
    }>+</button></div>
}