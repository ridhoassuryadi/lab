import styles from './border.module.scss'

export const Border = () => (
    <div className={styles.borderContainer}>
        <div className={styles.borderWrapper}>
            <div className={styles.borderLine}></div>
            <div className={styles.borderLine}></div>
        </div>
    </div>
)