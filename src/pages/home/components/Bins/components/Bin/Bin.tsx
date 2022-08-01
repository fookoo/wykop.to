import React from 'react'
import { Box, styled } from '@mui/material'
import { IBin } from '../../../../../../services/bins/bins.service'

const BinStyled = styled(Box)`
  aspect-ratio: 1.5 / 1;
  background-size: cover;
  background-position: center;

  header {
    height: 100%;
    padding: 0.3em;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 20%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

export const Bin: React.FC<{
  bin: IBin
  onClick?: () => void
}> = ({ bin: { label, background }, onClick }) => {
  const backgroundStyles = {
    backgroundImage: `url(${background})`
  }
  return (
    <BinStyled onClick={onClick} style={backgroundStyles}>
      <header>{label}</header>
    </BinStyled>
  )
}
