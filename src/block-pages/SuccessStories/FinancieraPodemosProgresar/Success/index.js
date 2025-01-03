import Text from "../../../../components/Text";
import { useApiContext } from "../../../../context/wrappers/ContextProvider";
import styles from "../../../../styles/block-pages/success-stories/financierapodemosprogresar/success.module.css"
import useResponsive from "../../../../hooks/useResponsive";
import { ROUTE_SUCCESSSTORIES } from "../../../../utils/routes";
import FadeInWrapper from "../../../../context/wrappers/FadeInWrapper";
import { Link } from "react-router-dom";
// import Link from "next/link";
// import Image from "next/image";

const Success = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(768)

    const titleText = {
        text: t('success-stories.banking-financierapodemosprogresar.block5.title'),
        tag: "p",
        font: "poppinsSemibold",
        size: isResponsive ? 20 : 64,
        color: 'whiteBase',
    }

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <FadeInWrapper type='fadeindown' replay={true}>
                        {!isResponsive ?
                            <div className={styles.titleContainer}>
                                <Text text={titleText} className={styles.title} />
                            </div> : null
                        }
                    </FadeInWrapper>
                    <div className={styles.container2}>
                        <div>
                            {isResponsive ?
                                <div className={styles.titleContainer}>
                                    <Text text={titleText} className={styles.title} />
                                </div> : null
                            }
                            <Link to={ROUTE_SUCCESSSTORIES}>
                                <FadeInWrapper type='fadeinright' replay={true}>
                                    <img
                                        src="/images/success-stories/banking-financierapodemosprogresar/success/arrow.svg"
                                        alt="Success"
                                        width={isResponsive ? 50 : 99}
                                        height={isResponsive ? 15 : 30}
                                        // priority
                                    />
                                </FadeInWrapper>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Success