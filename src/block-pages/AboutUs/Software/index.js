import Text from "../../../components/Text";
import styles from "../../../styles/block-pages/about-us/software.module.css"
import useText from "../useText";
import AnchorButton from "../../../components/AnchorButton";
import { ROUTE_ABOUTUS, TAG_INVENTIASOFTWARE, TAG_JOIN_TEAM } from "../../../utils/routes";
import useResponsive from "../../../hooks/useResponsive";
import FadeInWrapper from "../../../context/wrappers/FadeInWrapper";
// import Image from "next/image";

const Software = () => {

    const {
        titleSoftwareText,
        subtitleSoftwareText,
        itemSoftware1Text,
        itemSoftware2Text,
        itemSoftware3Text,
        itemSoftware4Text,
        itemSoftware5Text,
        itemSoftware6Text,
        itemSoftware7Text,
        itemSoftware8Text,
        itemSoftware9Text,
        buttonSoftwareText
    } = useText()

    const isResponsive = useResponsive(768)

    return (
        <section id={TAG_INVENTIASOFTWARE} className={styles.background}>
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
                                src="/images/about-us/software/new/icon1.png"
                                alt="Software"
                                width={isResponsive ? 64 : 120}
                                height={isResponsive ? 63 : 189}
                                // priority
                            />
                        </div>
                        <div className={styles.img}>
                            <img
                                src="/images/about-us/software/new/icon2.png"
                                alt="Software"
                                width={isResponsive ? 64 : 120}
                                height={isResponsive ? 58 : 110}
                                // priority
                            />
                        </div>
                        <div className={styles.img}>
                            <img
                                src="/images/about-us/software/new/icon3.png"
                                alt="Software"
                                width={isResponsive ? 76 : 143}
                                height={isResponsive ? 34 : 66}
                                // priority
                            />
                        </div>
                    </div>
                </FadeInWrapper>
                <div className={styles.container2}>
                    <div className={styles.title}><Text text={titleSoftwareText} /></div>
                    <div className={styles.subtitle}><Text text={subtitleSoftwareText} /></div>
                    <div className={styles.text}><Text text={itemSoftware1Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware2Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware3Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware4Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware5Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware6Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware7Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware8Text} /></div>
                    <div className={styles.text}><Text text={itemSoftware9Text} /></div>
                    <div className={styles.button}>
                        <AnchorButton
                            className={styles.buttonItem}
                            href={`${ROUTE_ABOUTUS}#${TAG_JOIN_TEAM}`}
                            theme="secondary"
                        >
                            <Text text={buttonSoftwareText} />
                        </AnchorButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Software