import styles from '../styles/components/Profile.module.css';
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ybribeiro14.png" alt="Yago Bravim"/>
            <div>
                <strong>Yago Bravim</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}