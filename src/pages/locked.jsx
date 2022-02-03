import styles from "./styles/Lock.module.scss";

function AuthLockPage() {
	return <div className={styles.lock}>You need to be logged in to do that</div>;
}

export default AuthLockPage;
