import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

export default function NavBar({handleClick}) {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div>
          {/*<Search />*/}
        </div>
        <div>
          <Link to="/Home">
            <span className={style.title}>
              <button className={style.btn} onClick={(e) => handleClick(e)}>
                Task Ensolvers
              </button>
            </span>
          </Link>
        </div>
        <div>
          <Link to="/archived">
            <button className={style.createBtn} >Archivados</button>
          </Link>
        </div>
        <div>
          <Link to="/categories">
            <button className={style.createBtn} >Categories</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
