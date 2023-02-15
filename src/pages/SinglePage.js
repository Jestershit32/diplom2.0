import { useLoaderData } from "react-router-dom";
import { Header } from "../blocks/header/header"
import { Content } from "../blocks/Content/Content.js"


export const SinglePage = () => {
	const posts = useLoaderData();
	return (
		<>
			<Header />
			<Content posts={posts} />
		</>
	)
}