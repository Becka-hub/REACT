import React, { useState } from 'react'
const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  if (item.children) {
    return (
      <div className={open ? 'sidebar-item open' : 'sidebar-item'} >
        <div className='sidebar-title' onClick={() => setOpen(!open)}>
          <span>
            <i className={item.icon}></i>
            {item.title}
          </span>
          <i className='fa fa-chevron-down toggle-btn'></i>
        </div>
        <div className="sidebar-content">
          {item.children.map((child, index) => {
            return (
              <a href={child.path || '#'} className='sidebar-title' key={index}>
                <span>
                  <i className={child.icon}></i>
                  {child.title}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <a href={item.path || '#'} className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className='sidebar-title'>
          <span>
            <i className={item.icon}></i>
            {item.title}
          </span>

        </div>
      </a>
    )
  }

}

export default SidebarItem