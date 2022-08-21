import React from 'react'
import SidebarItem from './SidebarItem'
import data from '../data/data.json'
import Logo from '../image/logo.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      {data.map((item, index) => <SidebarItem key={index} item={item} />)}

    </div>
  )
}

export default Sidebar