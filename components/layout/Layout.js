import Link from "next/link";
import styles from "./Layout.module.css"

function Layout({children}) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>BotoCar</h2>
                    <p>Choose and buy your car</p>
                </Link>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Mythrize is a platform that present UI Infrastructure | Next.js courses | Sadjad.Afkhami
            </footer>

        </>
    )
}

export default Layout;