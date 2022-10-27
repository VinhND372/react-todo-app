import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/home'
import Profile from './pages/profile'
import Timeline from './pages/timeline'
import TodoApp from './pages/todoapp'


import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="/"><a className={styles.itemLink}>Home</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/todo-app" ><a className={styles.itemLink}>Todo app</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/chart"><a className={styles.itemLink}>Timeline</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/info"><a className={styles.itemLink}>Profile</a></Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/react-todo-app" element={<Home/>}/> */}
          <Route path="/todo-app" element={<TodoApp/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
          <Route path="/info" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
