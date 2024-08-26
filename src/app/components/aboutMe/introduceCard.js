import styles from "./introduceCard.module.css"
export default function IntroduceCard({img_name, title ,detail}){
    return(
        <div className={styles.container}>
           <div className={styles.icon}>
            <img src={`/icons/${img_name}.svg`} width={`100%`}  ></img>
            </div>
           <div className={styles.contents}>
            <div className={styles.title}>{title}</div>
            <div className={styles.detail}>{detail}</div>
           </div>
        </div>
    )
}