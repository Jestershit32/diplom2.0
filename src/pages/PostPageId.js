
import { useLoaderData } from "react-router-dom"
import { Header } from "../blocks/header/header.js"
import { PostPage } from "../blocks/PostPage/PostPage.js"
import { NavBar } from "../blocks/NavBar/NavBar.js"

export const PostPageId = () => {
	const post = useLoaderData();
	return (
		<>
			<Header />
			<NavBar />
			<PostPage post={post} />
		</>
	)
}

