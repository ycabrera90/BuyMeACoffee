import * as React from "react"
import styles from "./HomePage.module.scss"

interface IProps {
	className?: string
}

const HomePage: React.FC<IProps> = (props) => {
	return (
		<div className={`${styles.home} ${props.className || ""}`}>
			<article className={styles.container}>
				<h1 className={styles.hello}>Hello!</h1>
				<p className={styles.my_self}>
					My name’s <span className={styles.red}>Yosniel</span> and
					I’m a{" "}
					<span className={styles.light}>software developer</span> who
					works so <span className={styles.red}>hard</span> to give
					you this service. If you want to thank my job to{" "}
					<span className={styles.red}>invite me</span> to a coffee.
				</p>
				<div className={styles.form_container}>
					<form
						className={styles.product_form}
						action="/payment/send"
						method="POST"
						encType="multipart/form-data"
						id="formData"
					>
						<input
							className={styles.buy_input}
							type="number"
							name="amount"
							id="amount"
							min="1"
							value="1"
						/>
						<select
							className={styles.buy_input}
							name="currency"
							id="currency"
						>
							<option value="USD" selected>
								USD
							</option>
						</select>
						<button className={styles.buy_button} type="submit">
							Send
						</button>
					</form>
				</div>
				<img
					className={styles.coffee_img}
					src="/img/coffee.png"
					alt="coffee"
				/>
			</article>
		</div>
	)
}

export default React.memo(HomePage)
