import React, { Fragment } from 'react'
import NavBar from './NavBar'
import InputTask from './InputTask'
import ListTask from './ListTask'

export default function Home() {
  return (
    <Fragment>
        <div>
        <NavBar />
      </div>
      <div className='read-the-docs'>
        
        <InputTask />
        <ListTask />
      </div>
    </Fragment>
  )
}
