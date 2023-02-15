
import styles from "./LoginWindow.module.scss"


export const LoginWindow = () => {
	return (
		<div className={styles.LoginWindow}>
			<form className={styles.form} action="" method="post">
				<label className={styles.label} htmlFor="">
					<span className={styles.span}>Login</span>
					<input className={styles.text} type="text" />
				</label>
				<label className={styles.label} htmlFor="">
					<span className={styles.span}>Password</span>
					<input className={styles.text} type="password" />
				</label>
				<input className={styles.button} type="submit" value="login" />

			</form>
		</div>
	)
}