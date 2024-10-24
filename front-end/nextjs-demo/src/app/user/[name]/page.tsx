'use client'
import {store} from "@/store/store";
import {Provider} from "react-redux";
import {User} from "@/app/user/[name]/user";

export default function Home() {
    console.log('Home component rendering')
    return (
        <Provider store={store}>
            <div>
                <User/>
            </div>
        </Provider>)
}

// auth/signin
// auth/signup


