import styles from '../styles/modules/profile.module.scss'
function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.firstGroup}></div>
      <div className={styles.secondGroup}>
        <h1>About Me</h1>
        <div className={styles.info}>
          <h2>Ngô Đắc Vinh</h2>
          <p>
            <span>MSSV:</span>44.01.104.246
          </p>
          <p>
            <span>Email:</span>4401104246@student.hcmup.edu.vn
          </p>
          <p>
            <span>Học tại:</span>Đại học Sư phạm Thành phố Hồ Chí Minh
          </p>
        </div>
      </div>
    </div>
  )
}
export default Profile
