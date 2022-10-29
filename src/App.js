import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import Timeline from './pages/timeline'
import TodoApp from './pages/todoapp'

import styles from './styles/modules/app.module.scss'

function App() {
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink to="/" end className={styles.itemLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/todo-app" className={styles.itemLink}>
              Todo app
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/timeline" className={styles.itemLink}>
              Timeline
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/info" className={styles.itemLink}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-todo-app" element={<Home />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/info" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
