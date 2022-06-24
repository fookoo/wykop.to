import React from 'react'
import { Grid, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { AppBarStyled } from './style'

export const AppBar: React.FC<{
  name?: string
}> = ({ name = 'wykop.to' }) => {
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
        <MenuIcon fontSize={'large'} />
      </Grid>
    </AppBarStyled>
  )
}
