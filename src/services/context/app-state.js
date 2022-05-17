import React from "react";
import AppContext from "./AppContext";
import {useState} from "react";
import axios from "axios";
import api from "../../assets/weather_api/api";

export const AppState = ({children}) => {
    const [weathers, setWeathers] = useState('')
    const [query, setQuery] = useState('')

    const  search = (cityName) => {
        console.log(cityName)
        axios.get(`${api.baseUrl}weather?q=${query === '' ? cityName : query}&units=metric&APPID=${api.key}`)
            .then(result => {
                setWeathers(result.data)
                setQuery('')
                console.log(result.data)
            })
    }

    const store = {
        weathers,
        setWeathers,
        setQuery,
        query,
        search
    }
    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}
