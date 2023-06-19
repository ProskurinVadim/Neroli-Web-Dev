import { usePathname } from 'next/navigation';
import Container from "../../../hoc/Container";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import styles from "./Header.module.scss";
import "../../../styles/reset.scss"
import "../../../styles/global.scss"

const Header = () => {

    const mobile = false;
    const isActive = (href: string) => false;

    return (
        <header className={styles.header}>
            <Container className={styles.header_container}>
                {mobile ? <HeaderMobile isActive={isActive} /> : <HeaderDesktop href={""} />}
            </Container>
        </header>
    )
}

export default Header