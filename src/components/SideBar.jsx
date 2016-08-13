import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = () => (
  <Drawer open>
    <AppBar
      title="the world"
      showMenuIconButton={false}
    />
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item</MenuItem>
  </Drawer>
)

export default SideBar
