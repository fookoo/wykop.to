import React from 'react'
import { styled } from '@mui/material'
import { Bin } from './components/Bin/Bin'
import { IBin } from '../../../../services/bins/bins.service'

const BinsStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25em;
`

export const Bins: React.FC<{
  bins?: IBin[]
  onBinClick?: (bin: IBin) => void
}> = ({ bins = [], onBinClick }) => {
  const binClickFactory = (bin: IBin) => () => onBinClick?.(bin)

  console.count('Bins')
  return (
    <BinsStyled>
      {bins.map((bin) => (
        <Bin key={bin.id} bin={bin} onClick={binClickFactory(bin)} />
      ))}
    </BinsStyled>
  )
}
