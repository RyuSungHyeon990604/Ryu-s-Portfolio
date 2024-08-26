import styles from "./aboutMe.module.css"
import IntroduceCard from "./introduceCard";
export default function AboutMe(){
    return(
        <div className={styles.container} id="aboutMe_position">
            <div className={styles.title}>"안녕하세요, 한줄소개.. 입니다"</div>
            <div className={styles.cardContainer}>
                <IntroduceCard img_name="human" title="이름" detail="류성현"/>
                <IntroduceCard img_name="phone" title="전화번호" detail="010-8802-9413"/>
                <IntroduceCard img_name="graduate" title="학력" detail="한성대학교(졸업)"/>
                <IntroduceCard img_name="birth" title="생년월일" detail="1999.06.04"/>
                <IntroduceCard img_name="email" title="이메일" detail="kyu9411@gmail.com"/>
                <IntroduceCard img_name="성별" title="성별" detail="남"/>
                </div>
        </div>
    );
}