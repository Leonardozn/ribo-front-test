import React from "react"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />
  },
	{
		title: 'Add user',
		path: '/adduser',
		icon: <FaIcons.FaUserAlt />
	},
  {
		title: 'Users',
		path: '/users',
		icon: <FaIcons.FaUsers />
	}
]

export default SidebarData