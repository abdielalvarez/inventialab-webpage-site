import Text from "../../../components/Text";
import { useApiContext } from "../../../context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/about-us/ourteam.module.css"
import useResponsive from "../../../hooks/useResponsive";
import FadeInWrapper from "../../../context/wrappers/FadeInWrapper";
import { ROUTE_ABOUTUS, TAG_INVENTIAEXPERIENCE, TAG_INVENTIASOFTWARE } from "../../../utils/routes";
import { Link } from "react-router-dom";
// import Image from "next/image";
// import Link from "next/link";

const OurTeam = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('about-us.block1.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 24 : 40,
        color: 'blackBase',
    }

    const descriptionText = {
        text: t('about-us.block1.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 13 : 24,
        color: 'blackBase',
    }

    const experienceText = {
        text: t('about-us.block1.text1'),
        tag: "p",
        font: isResponsive ? "poppinsSemibold" : "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: 'orangeBase',
    }

    const softwareText = {
        text: t('about-us.block1.text2'),
        tag: "p",
        font: isResponsive ? "poppinsSemibold" : "poppinsBold",
        size: isResponsive ? 24 : 48,
        color: 'blueBase',
    }

    return (
        <FadeInWrapper
            type='fadeindown'
            replay={true}
            animationSize="large"
            speed=".5s"
        >
            <section className={styles.background}>
                {isResponsive ?
                    <img
                        src="/images/about-us/main/circle.svg"
                        alt="About Us"
                        width={50}
                        height={50}
                        priority
                        className={styles.img}
                    /> : null
                }
                <div className={styles.wrapper}>
                    <div className={styles.container1}>
                        <div className={styles.title}><Text text={titleText} /></div>
                        <div className={styles.description}><Text text={descriptionText} /></div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.text}>
                            <a href={`${ROUTE_ABOUTUS}#${TAG_INVENTIAEXPERIENCE}`}>
                                <Text className={styles.text1} text={experienceText} />
                            </a>
                        </div>
                        <div className={styles.text}>
                            <a href={`${ROUTE_ABOUTUS}#${TAG_INVENTIASOFTWARE}`}>
                                <Text className={styles.text1} text={softwareText} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </FadeInWrapper>
    )
}

export default OurTeam