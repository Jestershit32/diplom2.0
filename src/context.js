import { useState, createContext, useEffect } from "react";
export const UserContext = createContext();



export function ContextUser({ children }) {

    const [SearchValue, setSearchValue] = useState("");
    const [Theme, setTheme] = useState("light");
    const [UserInfoContext, setUserInfoContext] = useState("63e9f73e8b7403c8ea974717")
    const [Profile, setProfile] = useState("")
    useEffect(() => {

        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/profile/" + UserInfoContext
                )
            ).json();
            setProfile(data);
        };
        dataFetch();

    }, [UserInfoContext])
    // const userLogin = () => {
    //     setUserInfoContext("info")
    // }

    // const userLogout = () => {
    //     setUserInfoContext('')
    // }
    const toggleTheme = () => setTheme(Theme === "light" ? "dark" : "light");
    const value = {
        user: Profile,
        theme: Theme,
        toggleTheme: toggleTheme,
        searchValue: SearchValue,
        setSearchValue: setSearchValue
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}






