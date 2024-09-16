import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.testContainerOne}>
				color-primary-background & box-shadow-sm{" "}
			</div>
			<div className={styles.testContainerTwo}>
				color-secondary-background & box-shadow-md{" "}
			</div>
			<div className={styles.testContainerThree}>
				color-text-primary & box-shadow-lg
			</div>
			<div className={styles.testContainerFour}>color-text-secondary</div>
			<div className={styles.testContainerFive}>color-text-white</div>
			<div className={styles.testContainerSix}>color-text-link</div>
			<div className={styles.testContainerSeven}>color-text-primary-hover</div>
			<div className={styles.testContainerEight}>color-text-danger</div>
			<div className={styles.testContainerNine}>color-button-primary</div>
			<div className={styles.testContainerTen}>color-button-primary-hover</div>
			<div className={styles.testContainerEleven}>color-button-secondary</div>
			<div className={styles.testContainerTwelve}>
				color-button-secondary-hover
			</div>
			<div className={styles.testContainerThirteen}>
				color-tertiary-background
			</div>
		</div>
	);
};

export default HomePage;
