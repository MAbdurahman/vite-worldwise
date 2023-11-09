import {createContext, useEffect, useContext, useState, useReducer} from 'react';


const BASE_URL = `https://mabdurahman.github.io/questions-api/data/cities.json`;

const CitiesContext = createContext();

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
};

export const action = {
    CITIES_LOADED: "cities/loaded",
    CITY_LOADED: "city/loaded",
    CITY_CREATED: "city/created",
    CITY_DELETED: "city/deleted",
    LOADING: "loading",
    REJECTED: "rejected",
}

function cityReducer(state, action) {
    switch (action.type) {
        case "loading":
            return {
                ...state, isLoading: true
            };
        case "cities/loaded":
            return {
                ...state,
                isLoading: false,
                cities: action.payload,
            };
        case "city/loaded":
            return {
                ...state,
                isLoading: false,
                currentCity: action.payload
            };
        case "city/created":
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
                currentCity: action.payload,
            };
            case "city/deleted":
                return {
                    ...state,
                    isLoading: false,
                    cities: state.cities.filter((city) => city.id !== action.payload),
                    currentCity: {},
                };

        case "rejected":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            throw new Error("Unknown Action: " + action.type);
    }
}



function CitiesProvider({children}) {
    const [state, dispatch] = useReducer(cityReducer, initialState);
    const {cities, isLoading, currentCity, error} = state;
/*
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);*/

    useEffect(function() {
        async function fetchCities() {
            dispatch({ type: action.LOADING });
            try {
                setIsLoading(true);
                const response = await fetch(`${BASE_URL}`);
                console.log(response.json())
                const data = await response.json();
                /*console.log(data)*/
                dispatch({ type: action.CITIES_LOADED, payload: data });

            } catch (err) {
                dispatch({type: action.REJECTED, payload: `Error fetching cities: ${err.message}`});

            }
        }
        fetchCities();
    }, [BASE_URL])


     async function getCity(id) {
        if (Number(id) === currentCity.id) {
            return;
        }

        dispatch({ type: action.LOADING });

        try {
            const res = await fetch(`${BASE_URL}/cities.json/${id}`);
            const data = await res.json();
            dispatch({ type: action.CITY_LOADED, payload: data });
        } catch (err){
            dispatch({
                type: action.REJECTED,
                payload: `Error loading city: ${err.message}`,
            });
        }
    }






    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                error,
                getCity
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