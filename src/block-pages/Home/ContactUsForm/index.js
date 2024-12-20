import Text from "../../../components/Text";
import { useApiContext } from "../../../context/wrappers/ContextProvider";
import useResponsive from "../../../hooks/useResponsive";
import AnchorButton from "../../../components/AnchorButton";
// import Image from "next/image";
import useContactUsForm from "../../../hooks/useContactUsForm";
import Input from "../../../components/Input";
import styles from "../../../styles/block-pages/home/contactusform.module.css"
import inputStyles from "../../../styles/components/input.module.css"
import ApiService from "../../../services";
import { useMemo, useState } from "react";
import envs from "../../../config/envs";
import FadeInWrapper from "../../../context/wrappers/FadeInWrapper";

const ContactUsForm = () => {

    const { t, state } = useApiContext()
    const lang = state?.language
    const isResponsive = useResponsive(768)

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { API_URL } = envs

    const onSubmit = async (formData) => {
        try {
            setLoading(true)
            const payload = {
                "phoneNumber": formData?.['home-phone'],
                "email": formData?.['home-email'],
                "name": formData?.['home-name'],
            }
            const apiService = new ApiService(API_URL);
            await apiService.post('inventia/contact/send', payload)
            setLoading(false)
            setSuccess(true)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const { formData, handleChange, handleSubmit } = useContactUsForm(onSubmit)

    const titleText = {
        text: t('home.block9.title'),
        tag: "p",
        font: "poppinsBold",
        size: isResponsive ? 32 : 50,
        color: 'blackBase',
    }

    const descriptionText = {
        text: t('home.block9.text1'),
        tag: "p",
        font: isResponsive ? "poppinsLight" : "poppinsRegular",
        size: isResponsive ? 15 : 20,
        color: 'blackBase',
    }

    const buttonText = {
        text:
            loading ? t('button.loading') :
                success && !loading ? t('button.success') :
                    t('home.block9.button'),
        tag: "p",
        font: "poppinsRegular",
        size: isResponsive ? 15 : 18,
        color: 'whiteBase',
    }

    const enabled = useMemo(() => {
        const dataExists =
            Boolean(
                formData?.['home-phone'] &&
                formData?.['home-email'] &&
                formData?.['home-name']
            )
        return dataExists
    }, [formData])

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.infoContent}>
                        <FadeInWrapper animationSize="large" speed="1s" type='fadeindown' replay={true}>
                            <img
                                src="/images/home/lets-talk/line-1.svg"
                                alt="Let's talk"
                                width={1}
                                height={575}
                                // priority
                                className={styles.icon1}
                            />
                            <img
                                src="/images/home/lets-talk/line-2.svg"
                                alt="Let's talk"
                                width={1}
                                height={417}
                                // priority
                                className={styles.icon2}
                            />
                            <img
                                src="/images/home/lets-talk/logo.svg"
                                alt="Inventia"
                                width={isResponsive ? 46 : 85}
                                height={isResponsive ? 56 : 103}
                                // priority
                                className={styles.logoImg}
                            />
                        </FadeInWrapper>
                        <img
                            src="/images/home/lets-talk/line-3.svg"
                            alt="Let's talk"
                            width={1}
                            height={113}
                            // priority
                            className={
                                lang === 'en' ?
                                styles.icon3En :
                                styles.icon3
                            }
                        />
                        {/* <FadeInWrapper speed=".2s" type='fadeindown' replay={true}>
                            <img
                                src="/images/home/lets-talk/logo.svg"
                                alt="Inventia"
                                width={isResponsive ? 46 : 85}
                                height={isResponsive ? 56 : 103}
                                priority
                                className={styles.logoImg}
                            />
                        </FadeInWrapper> */}
                        <div className={styles.titleContainer}>
                            <Text text={titleText} className={styles.title} />
                        </div>
                        <div className={styles.subtitleContainer}>
                            <Text text={descriptionText} className={styles.subtitle} />
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <Input
                                type="tel"
                                placeholder={t('home.block9.input1')}
                                value={formData.phone}
                                onChange={handleChange}
                                name="home-phone"
                                id="home-phone"
                                className={inputStyles.inputContactUsHome}
                            />
                            <Input
                                type="email"
                                placeholder={t('home.block9.input2')}
                                value={formData.email}
                                onChange={handleChange}
                                name="home-email"
                                id="home-email"
                                className={inputStyles.inputContactUsHome}
                            />
                            <Input
                                type="text"
                                placeholder={t('home.block9.input3')}
                                value={formData.name}
                                onChange={handleChange}
                                name="home-name"
                                id="home-name"
                                className={inputStyles.inputContactUsHome}
                            />
                        </div>
                        <AnchorButton
                            expandWidth={true}
                            responsiveBreakpoint={768}
                            theme="primary"
                            type="submit"
                            disabled={!enabled || loading || success}
                        >
                            <Text text={buttonText} />
                        </AnchorButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUsForm