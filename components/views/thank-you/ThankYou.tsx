import Link from "next/link";
import Container from "../../../hoc/Container";
import styles from "./ThankYou.module.scss";
import Button, { buttonStyles } from "../../common/Button/Button"

const ThankYou = () => {
    return (
        <section className={styles.section_padding}>
            <Container>
                <h1 className={styles.section_header}>Great!</h1>
                <p className={styles.thank_you_header}>Your application has been successfully accepted!</p>
                <p className={`medium_text ${styles.medium_text}`}>Our manager will contact you shortly!</p>
                <div className={styles.button_wrapper}>
                    <Link href="/" className={`${buttonStyles.button} ${styles.button__link} ${styles.button} link_unset`}>Back to the main page</Link>
                </div>

            </Container>
        </section>
    )
}

export default ThankYou