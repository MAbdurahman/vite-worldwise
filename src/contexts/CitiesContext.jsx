import {createContext, useEffect, useContext, useState} from 'react';


const BASE_URL = `https://mabdurahman.github.io/questions-api/data`;

const CitiesContext = createContext();




function CitiesProvider({children}) {

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function() {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const response = await fetch(`${BASE_URL}/cities.json`);
                const data = await response.json();
                console.log(data);
                setCities(data)

            } catch (err) {
                console.log(`Error fetching cities`, err.message)
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, [BASE_URL])


    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading
            }}

            >
            {children}
        </CitiesContext.Provider>
    )

}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) {
        throw new Error("CitiesContext was used outside the CitiesProvider");
    }
    return context;
}

export { CitiesProvider, useCities }