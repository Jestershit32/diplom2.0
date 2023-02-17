// import { Children } from "react"
import { useState } from "react"
import styles from "./FormComponents.module.scss"


export function Window({ children }) {
	return (
		<div className={styles.Window}>
			{children}
		</div>
	)
}


export function TextBar({ name, setState, state }) {

	function handler(event) {
		return setState(event.target.value)
	}

	return (
		<div className={styles.TextBar}>
			<label htmlFor={name} className={styles.TextName}>{name}</label>
			<input className={styles.Input} id={name} type="text" value={state} onChange={e => handler(e)} />
		</div>
	)
}
export function Button({ name, type, callBack }) {


	return (<button className={styles.Button} type={type} onClick={callBack}>
		{name}
	</button>
	)
}


export function HSpan({ name, }) {

	return (
		<span className={styles.HSpan}>{name}</span>
	)
}
export function InputFile({ id }) {
	const [File, setFile] = useState("")

	function handler(event) {
		setFile(event.target.files[0])

	}
	return (
		<>
			<input className={styles.InputFile} onChange={(e) => handler(e)} type="file" id={id} />
			<label className={styles.LabelFile} htmlFor="input1">{File ? File.name : "Вставьте файл"}</label>
		</>
	)
}