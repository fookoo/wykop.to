import { styled, Grid } from '@mui/material'

export const AppBarStyled = styled(Grid)(
  ({ theme }) => `
  min-height: 64px;
  max-height: 10vh;

  justify-content: space-between;
  align-items: center;

  a {
    color: ${theme.palette.primary.contrastText};
    text-decoration: none;
  }
  background: ${theme.palette.primary.main}; 
  border-bottom: 6px solid ${theme.palette.primary.dark}
`
)
