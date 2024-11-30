import { Fragment, createContext, useState } from "react";



export const globalProvider = createContext();


function GlobalProvider({children}) {
    const [user, setUser ] = useState(null);    
    return ( 
        <globalProvider.Provider value={{user, setUser}}>
            {children}
        </globalProvider.Provider>
    );
}

export default GlobalProvider;