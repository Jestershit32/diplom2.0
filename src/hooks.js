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
    if (Profile) {
        return (Profile)
    } else {
        return ({})
    }

}
export function usePosts(profileId) {
    const [Posts, setPosts] = useState("");
    useEffect(() => {

        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/profile/posts/" + profileId
                )
            ).json();

            setPosts(data);

        };
        dataFetch();
    }, [profileId])
    if (Posts) {
        return (Posts)
    } else {
        return ([])
    }
}


