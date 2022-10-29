import { format } from 'date-fns'
import styles from '../styles/modules/timeline.module.scss'
function TimelineItem({ data }) {
  return (
    <li>
      <time>{format(new Date(data.time), 'p, dd/MM/yyyy')}</time>
      <h3 className={styles.title}>{data.title}</h3>
      <span className={styles.circle}></span>
      <span
        className={styles.status}
        style={{
          backgroundImage:
            data.status === 'complete'
              ? 'linear-gradient(to right, rgb(22, 163, 74), rgb(26, 185, 12))'
              : 'linear-gradient(to right, rgb(106, 6, 236), rgb(220, 0, 240))'
        }}
      >
        {data.status === 'complete' ? 'Hoàn thành' : 'Chưa hoàn thành'}
      </span>
    </li>
  )
}
export default TimelineItem
