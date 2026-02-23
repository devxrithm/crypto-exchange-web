import React from 'react'
import Home from './Home'
import { Provider } from "react-redux";
import { store } from "@/src/context/store";

const HomeExport = () => {
    return (
        <>
            <Provider store={store}>
                <Home />
            </Provider>
        </>
    )
}

export default HomeExport