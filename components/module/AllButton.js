import Link from "next/link"
import styles from "./AllButton.module.css"

function AllButton() {
  return (
    <div>
        <button className={styles.container}>
            <Link href="/cars">See All Cars</Link>

        </button>
    </div>
  )
}

export default AllButton