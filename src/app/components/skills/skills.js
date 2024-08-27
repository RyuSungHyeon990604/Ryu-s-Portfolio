import styles from "./skills.module.css"
import Slider from "./slider"

export default function Skills(){
    return(
        <div className={styles.container} id="skills_position">
            <div className={styles.title}>My Skills</div>
            <Slider></Slider>
        </div>
    )
}