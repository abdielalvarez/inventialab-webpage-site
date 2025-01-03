import Text from "../../../components/Text";
import styles from "../../../styles/block-pages/about-us/experience.module.css"
import useText from "../useText";
import AnchorButton from "../../../components/AnchorButton";
import { ROUTE_ABOUTUS, TAG_INVENTIAEXPERIENCE, TAG_JOIN_TEAM } from "../../../utils/routes";
import useResponsive from "../../../hooks/useResponsive";
import FadeInWrapper from "../../../context/wrappers/FadeInWrapper";
// import Image from "next/image";

const Experience = () => {

    const {
        titleExperienceText,
        subtitleExperienceText,
        itemExperience1Text,
        itemExperience2Text,
        itemExperience3Text,
        itemExperience4Text,
        itemExperience5Text,
        itemExperience6Text,
        buttonExperienceText,
    } = useText()

    const isResponsive = useResponsive(768)

    return (
        <section id={TAG_INVENTIAEXPERIENCE} className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper
                    type='fadeindown'
                    replay={true}
                    animationSize="large"
                    speed=".5s"
                >
                    <div className={styles.container1}>
                        <div className={styles.line} />
                        <div className={styles.img}>
                            <img
                                src="/images/about-us/experience/new/icon1.png"
                                alt="Experience"
                                width={isResponsive ? 64 : 120}
                                height={isResponsive ? 63 : 120}
                                priority 
                            />
                        </div>
                        <div className={styles.img}>
                            <img
                                src="/images/about-us/experience/new/icon2.png"
                                alt="Experience"
                                width={isResponsive ? 64 : 120}
                                height={isResponsive ? 63 : 120}
                                priority 
                            />
                        </div>
                        <div className={styles.img}>
                            <img
                                src="/images/about-us/experience/new/icon3.png"
                                alt="Experience"
                                width={isResponsive ? 65 : 122}
                                height={isResponsive ? 54 : 106}
                                priority 
                            />
                        </div>
                    </div>
                </FadeInWrapper>
                <div className={styles.container2}>
                    <div className={styles.title}><Text text={titleExperienceText} /></div>
                    <div className={styles.subtitle}><Text text={subtitleExperienceText} /></div>
                    <div className={styles.box}>
                        <div className={styles.text}><Text text={itemExperience1Text} /></div>
                        <div className={styles.text}><Text text={itemExperience2Text} /></div>
                        <div className={styles.text}><Text text={itemExperience3Text} /></div>
                        <div className={styles.text}><Text text={itemExperience4Text} /></div>
                        <div className={styles.text}><Text text={itemExperience5Text} /></div>
                        <div className={styles.text}><Text text={itemExperience6Text} /></div>
                    </div>
                    <div className={styles.button}>
                        <AnchorButton className={styles.buttonItem} href={`${ROUTE_ABOUTUS}#${TAG_JOIN_TEAM}`}>
                            <Text text={buttonExperienceText} />
                        </AnchorButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience