import { Location } from "./Location";
import { Tempreature } from "./Tempreature";
import { useContext, useEffect } from "react";
import AppContext from "../services/context/AppContext";

export const WeatherApp = () => {
    const { weathers, query, setQuery, setWeathers, search } = useContext(AppContext)
    const { weather, name, main } = weathers

    useEffect(() => {
        search('Rawalpindi')
        setQuery('')
    }, [setQuery, setWeathers])

    const searchCity = (e) => {
        if (e.key === 'Enter') {
            search()
        }
    }

    return (
        <div className={(typeof main != 'undefined') ? (main.temp > 18 ? 'app light' : 'app warm') : 'app'}>
            <main>
                <div className="search-box">
                    <input
                        onKeyDown={(e) => searchCity(e, '')}
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        placeholder="please type..."
                        className="search-bar"
                        type="text" />
                </div>
                {(typeof main != 'undefined')
                    ?
                    <>
                        <Location
                            names={name}
                        />
                        <Tempreature
                            weatherStatus={weather}
                            tempreature={main}
                        />
                    </>
                    : ''
                }
            </main>
        </div>

    )
}
