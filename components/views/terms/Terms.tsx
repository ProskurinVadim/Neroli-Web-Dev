import { List } from "../../common"
import Condition, { If, ElseIf } from "../../../hoc/Conditional/Condition";
import Container from "../../../hoc/Container";
import { getData } from "./getData";
import styles from "./Terms.module.scss";

const Terms = () => {
    const content = getData();
    return (
        <section className={`section__padding ${styles.section}`}>
            <Container>
                <h1 className={`section_header ${styles.section_header}`}>Terms and Conditions</h1>
                <h2 className={`medium_text medium_text__aditional ${styles.subtitle}`}>Last Update: March 16, 2023</h2>
                {
                    content.map(({ type, content }, i) =>
                        <Condition condition={type === "header"} key={`terms-item-${i}`}>
                            <If>
                                <h3 className={`${styles.terms_content_padding} ${styles.terms_header}`}>{content}</h3>
                            </If>
                            <ElseIf condition={type === "text"}>
                                <p className={`medium_text ${styles.terms_content_padding}`}>{content}</p>
                            </ElseIf>
                            <ElseIf condition={type === "list"}>
                                {Array.isArray(content) && <List content={content} className={styles.terms_content_padding} />}
                            </ElseIf>
                        </Condition>
                    )
                }
            </Container>
        </section>
    )
}

export default Terms