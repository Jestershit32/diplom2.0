
import { Header } from "../blocks/header/header"
import { NavBar } from "../blocks/NavBar/NavBar"
import { LoginWindow } from "../blocks/LoginWindow/LoginWindow"

export const LoginPage = () => {


	return (
		<>
			<Header searchOff profOff />
			<NavBar />
			<LoginWindow />
		</>
	)
}