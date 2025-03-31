import styles from './LoggingIn.module.css'

export default function LoggingIn() {
    return (
        <div>
            <h1 className={`${styles.textColor}`}>Login</h1>
            <p className={`${styles.textColor}`}>Please enter the correct password to navigate to the login page</p>

            <input />
        </div>
    );
}