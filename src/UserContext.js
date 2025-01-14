const { createContext, useState } = require("react");

export const UserContext = createContext({

})

export function UserContextProvider({children}){

    const [user,setUser] = useState();

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}