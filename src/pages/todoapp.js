import AppContent from '../components/AppContent'
import AppHeader from '../components/AppHeader'
import PageTitle from '../components/PageTitle'
import { Toaster } from 'react-hot-toast'
import styles from '../styles/modules/todoapp.module.scss'

function TodoApp() {
  return (
    <>
      <div className={styles.container}>
        <PageTitle>TODO LIST</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem'
          }
        }}
      />
    </>
  )
}
export default TodoApp
