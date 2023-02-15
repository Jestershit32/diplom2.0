import { useState, useEffect } from "react";


export function useProfile(profileId) {
    const [Profile, setProfile] = useState("");
    useEffect(() => {

        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/profile/" + profileId
                )
            ).json();

            setProfile(data);
        };
        dataFetch();
    }, [profileId])
    return (Profile);

}