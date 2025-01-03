// import Text from "../../../../components/Text";
import { useApiContext } from "../../../../context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/services/primary/methodology.module.css"
import useResponsive from "../../../../hooks/useResponsive";
import {
    TAG_METHODOLOGY
} from "../../../../utils/routes";
import { useState } from "react";
import FadeInWrapper from "../../../../context/wrappers/FadeInWrapper";
import Text from "../../../../components/Text";

const Methodology = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('services.primary.block5.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 24 : 64,
        color: 'blackBase',
    }

    const descriptionText = {
        text: t('services.primary.block5.subtitle'),
        tag: "p",
        font: "poppinsLight",
        size: isResponsive ? 11 : 20,
        color: 'blackBase',
    }

    const empathyText = {
        text: t('services.primary.block5.text1'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const empathyDescriptionText = {
        text: t('services.primary.block5.description1'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const definitionText = {
        text: t('services.primary.block5.text2'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const definitionDescriptionText = {
        text: t('services.primary.block5.description2'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const ideaText = {
        text: t('services.primary.block5.text3'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const ideaDescriptionText = {
        text: t('services.primary.block5.description3'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const prototypeText = {
        text: t('services.primary.block5.text4'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 32,
        color: 'whiteBase',
    }

    const prototypeDescriptionText = {
        text: t('services.primary.block5.description4'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 15 : 25,
        color: 'blackBase',
    }

    const [hover, setHover] = useState({
        empathyHover: false,
        descriptionHover: false,
        ideaHover: false,
        prototypeHover: false
    })

    const handleHoverOpen = (hoverName) => {
        setHover(Object.keys(hover).reduce((acc, key) => {
            acc[key] = key === hoverName;
            return acc;
        }, {}));
    };
    

    const handleHoverClose = () => {
        setHover({
            empathyHover: false,
            descriptionHover: false,
            ideaHover: false,
            prototypeHover: false
        });
    };

    const handleClick = (hoverName) => {
        setHover(Object.keys(hover).reduce((acc, key) => {
            acc[key] = key === hoverName;
            return acc;
        }, {}));
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <Text id={TAG_METHODOLOGY} text={titleText} className={styles.title} />
                </div>
                <FadeInWrapper type='fadeinright' replay={true}>
                    <div className={styles.descriptionContainer}>
                        <Text text={descriptionText} className={styles.description} />
                    </div>
                </FadeInWrapper>
            </div>
            <div className={styles.container}>
                <div
                    className={styles.textContainer1}
                    onMouseEnter={() => handleHoverOpen('empathyHover')}
                    onMouseLeave={() => handleHoverClose('empathyHover')}
                    onClick={() => handleClick('empathyHover')}
                >
                    {hover.empathyHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description1}>
                                    <FadeInWrapper type='fadeinup' replay={true}>
                                        <Text text={empathyDescriptionText} />
                                    </FadeInWrapper>
                                </div> : null
                            }
                        </> : null
                    }
                    <div className={styles.text1}>
                        <Text text={empathyText} />
                    </div>
                </div>
                {hover.empathyHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description1}>
                                <FadeInWrapper type='fadeindown' replay={true}>
                                    <Text className={styles.descriptionMobile} text={empathyDescriptionText} />
                                </FadeInWrapper>
                            </div> : null
                        }
                    </> : null
                }
                <div
                    className={styles.textContainer2}
                    onMouseEnter={() => handleHoverOpen('descriptionHover')}
                    onMouseLeave={() => handleHoverClose('descriptionHover')}
                    onClick={() => handleClick('descriptionHover')}
                >
                    {hover.descriptionHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description2}>
                                    <FadeInWrapper type='fadeindown' replay={true}>
                                        <Text text={definitionDescriptionText} />
                                    </FadeInWrapper>
                                </div> : null
                            }
                        </> : null}

                    <div className={styles.text2}><Text text={definitionText} /></div>
                </div>
                {hover.descriptionHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description2}>
                                <FadeInWrapper type='fadeindown' replay={true}>
                                    <Text className={styles.descriptionMobile} text={definitionDescriptionText} />
                                </FadeInWrapper>
                            </div> : null
                        }
                    </> : null
                }
                <div
                    className={styles.textContainer3}
                    onMouseEnter={() => handleHoverOpen('ideaHover')}
                    onMouseLeave={() => handleHoverClose('ideaHover')}
                    onClick={() => handleClick('ideaHover')}
                >
                    {hover.ideaHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description3}>
                                    <FadeInWrapper type='fadeinup' replay={true}>
                                        <Text text={ideaDescriptionText} />
                                    </FadeInWrapper>
                                </div> : null
                            }
                        </> : null}
                    <div className={styles.text3}><Text text={ideaText} /></div>
                </div>
                {hover.ideaHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description3}>
                                <FadeInWrapper type='fadeindown' replay={true}>
                                    <Text className={styles.descriptionMobile} text={ideaDescriptionText} />
                                </FadeInWrapper>
                            </div> : null
                        }
                    </> : null}
                <div
                    className={styles.textContainer4}
                    onMouseEnter={() => handleHoverOpen('prototypeHover')}
                    onMouseLeave={() => handleHoverClose('prototypeHover')}
                    onClick={() => handleClick('prototypeHover')}
                >
                    {hover.prototypeHover ?
                        <>
                            {!isResponsive ?
                                <div className={styles.description4}>
                                    <FadeInWrapper type='fadeindown' replay={true}>
                                        <Text text={prototypeDescriptionText} />
                                    </FadeInWrapper>
                                </div> : null
                            }
                        </> : null}
                    <div><Text className={styles.text4} text={prototypeText} /></div>
                </div>
                {hover.prototypeHover ?
                    <>
                        {isResponsive ?
                            <div className={styles.description4}>
                                <FadeInWrapper type='fadeindown' replay={true}>
                                    <Text className={styles.descriptionMobile} text={prototypeDescriptionText} />
                                </FadeInWrapper>
                            </div> : null
                        }
                    </> : null}
            </div>
        </section>
    )
}

export default Methodology