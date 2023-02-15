import { ProfileUser } from "../blocks/ProfileUser/ProfileUser"
import { Header } from "../blocks/header/header"
import { useLoaderData } from "react-router-dom";
import { NavBar } from "../blocks/NavBar/NavBar";
// import { Content } from "../blocks/Content/Content"


export const ProfileUserPage = () => {
    const User = useLoaderData();
    return (
        <>
            <Header />
            <NavBar />
            <ProfileUser User={User} />
            {/* <Content /> */}
        </>
    )

}