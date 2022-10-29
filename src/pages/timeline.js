import { useSelector } from 'react-redux'
import styles from '../styles/modules/timeline.module.scss'
import TimelineItem from '../components/TimelineItem'

function Timeline() {
  const todoList = useSelector(state => state.todo.todoList)
  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>Timeline</h3>
      <div className={styles.container}>
        {todoList.length > 0 && (
          <ul>
            {todoList.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default Timeline
