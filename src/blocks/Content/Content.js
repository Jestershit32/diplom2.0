import { Slider } from "./Slider/Slider.js";
import { Posts } from "./Posts/Posts.js";
import styles from "./Content.module.scss"
import { useState } from "react";

export const Content = ({ posts }) => {
	const [PagPage, setPagPage] = useState(1);
	const [ItemInPage] = useState(10);
	const LastItem = PagPage * ItemInPage;
	const FirstItem = LastItem - ItemInPage;
	const currentItems = posts.slice(FirstItem, LastItem)







	return (
		<div className={styles.Content}>
			<Slider ItemInPage={ItemInPage} totalItems={posts.length} setPagPage={setPagPage} PagPage={PagPage} />
			<Posts currentItems={currentItems} />
			<Slider ItemInPage={ItemInPage} totalItems={posts.length} setPagPage={setPagPage} PagPage={PagPage} />
		</div>
	)
}