import { Link } from 'react-router-dom'
import styles from '../styles/modules/home.module.scss'
function Home() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.introduce_box}>
          <h2 className={styles.introduce_title}>Hello</h2>
          <p className={styles.introduce_content}>
            Hãy liệt kê các công việc cần làm của bạn trong ngày hôm nay ngay thôi nào!! Chúc bạn hoàn thành thật tốt
            tất cả công việc được đề ra nhé. <span className={styles.slogan}>I believe in you ☝️</span>
          </p>
          <Link to="/todo-app">
            <p>Move to App</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Home
