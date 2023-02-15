
import { useContext } from "react";
import styles from "./SearchBox.module.scss"
import { UserContext } from "../../../../context";


export const SearchBox = () => {
	// const [searchValue, setSearchValue] = useState("");

	const searchValue = useContext(UserContext).searchValue;
	const setSearchValue = useContext(UserContext).setSearchValue;


	// function searchClick() {
	// 	if (searchValue) {
	// 		alert(searchValue)
	// 	}
	// }

	// function enterClick(event) {
	// 	if (event.key === "Enter") {
	// 		return searchClick();
	// 	};
	// }

	function ChangeSearch(event) {
		setTimeout(
			setSearchValue(event.target.value), 5000)
	}

	return (
		<div className={styles.SearchBox}>
			<input
				className={styles.SearchInput}
				type="text"
				placeholder="Поиск"
				onChange={ChangeSearch}
				value={searchValue}
			/>

		</div>
	)
}