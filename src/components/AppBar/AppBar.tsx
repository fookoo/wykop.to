import React, { useRef, useState } from 'react'
import { Box, ClickAwayListener, Grid, Link, Popover } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { AppBarStyled } from './style'
import { useToggle } from 'react-use-toggle-hook'
import { MainMenu } from '../MainMenu/MainMenu'

export const AppBar: React.FC<{
  name?: string
}> = ({ name = 'wykop.to' }) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { value: isMenuOpen, open, close } = useToggle(false)

  console.log('AppBat', isMenuOpen)
  return (
    <AppBarStyled container>
      <Grid item p={2}>
        W
      </Grid>
      <Grid item>
        <Link href={'/'} variant={'h4'}>
          {name}
        </Link>
      </Grid>
      <Grid item p={2}>
        <Box
          ref={menuRef}
          onClick={() => {
            setIsOpen(true)
            open()
            console.log('sdadsa', isOpen)
          }}
        >
          <MenuIcon fontSize={'large'} />
        </Box>
      </Grid>
      {isMenuOpen && (
        <ClickAwayListener onClickAway={close}>
          <Popover open anchorEl={menuRef.current}>
            <MainMenu />
          </Popover>
        </ClickAwayListener>
      )}
    </AppBarStyled>
  )
}
