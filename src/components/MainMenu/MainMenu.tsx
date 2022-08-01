import React from 'react'
import { MenuItem, MenuList, Paper } from '@mui/material'

export const MainMenu: React.FC = () => {
  return (
    <Paper>
      <MenuList>
        <MenuItem>Sources</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Paper>
  )
}
