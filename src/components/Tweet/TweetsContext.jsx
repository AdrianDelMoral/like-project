import { createContext, useContext } from "react";

const Tweets = createContext();

export function useTweets() {
    return useContext(Tweets);
}

export function TweetsProvider({ children }) {

    /** Este array(@tweets) de objetos es como el que teniamos en BarActions antes
     */
    const tweets = [
        {
            uuid: 1,
            cantidadMg: 12,
            isMg: true,
            cantidadRt: 2,
            isRt: false
        }
    ]

    // aqui dentro cargaras todas las variables que quieras que esten dentro de este useContext
    // eso lo hacemos para tener variables asesibles a nivel globarl siempore y cuando sean children de este context


    return (
        <Tweets.Provider value={{ tweets }}>
            {children}
        </Tweets.Provider>
    )
}