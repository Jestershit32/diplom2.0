import { Slider } from "./Slider/Slider.js";
import { Posts } from "./Posts/Posts.js";
import styles from "./Content.module.scss"
import { useState } from "react";









export const Content = () => {
	const [PagPage, setPagPage] = useState(1);
	const [ItemInPage] = useState(10);


	const items = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31",
		"32",
	]
	const LastItem = PagPage * ItemInPage;
	const FirstItem = LastItem - ItemInPage;
	const currentItems = items.slice(FirstItem, LastItem)







	return (
		<div className={styles.Content}>
			<Slider ItemInPage={ItemInPage} totalItems={items.length} setPagPage={setPagPage} PagPage={PagPage} />
			<Posts currentItems={currentItems} />
			<Slider ItemInPage={ItemInPage} totalItems={items.length} setPagPage={setPagPage} PagPage={PagPage} />
		</div>
	)
}