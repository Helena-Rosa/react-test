import styles from "./card.module.css"

function Card ({text}){
    return (
    <>
    <card className={styles.card}>
        {text}
    </card>
    </>
    )
}

export default Card