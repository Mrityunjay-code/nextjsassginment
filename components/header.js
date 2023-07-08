import Link from "next/link"
import styles from "../styles/header.module.css"

export default function Header() {
    return (
        <ul className={styles.ul}>
            <Link href="/" legacyBehavior>
                <a className={styles.a}><li className={styles.li}>Home</li></a>
            </Link>
           
            <Link href="/ssr" legacyBehavior>
                <a className={styles.a}><li className={styles.li}>Users</li></a>
            </Link>
            
            <Link href="/csr" legacyBehavior>
                <a className={styles.a}> <li className={styles.li}> Posts</li></a>
            </Link>
        </ul>
    )

}