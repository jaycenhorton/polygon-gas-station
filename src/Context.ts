import { createContext } from 'react';

interface gas {
    safeLow: number
    standard: number
    fast: number
    fastest: number
    price: number
}

const ThemeContext = createContext({
    dark: false,
    setDark: (set:boolean) => {}
})

const GasContext = createContext({
    gasData: {safeLow: 0, standard: 0, fast: 0, fastest: 0, price: 0},
    setGasData: (set: gas) => {},
})

const Context = {
    ThemeContext,
    GasContext
}

export default Context