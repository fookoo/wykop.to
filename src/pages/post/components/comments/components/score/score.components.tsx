import React from 'react'
import { Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import { ActionsStyled, ScoreStyled } from './score.style'

interface IScoreProps {
  value?: number
  onVote?: () => void
}
export const Score: React.FC<IScoreProps> = ({ value = 0 }) => {
  return (
    <ScoreStyled>
      <Typography variant="h5">
        {value > 0 && '+'}
        {value}
      </Typography>

      <ActionsStyled>
        <IndeterminateCheckBoxIcon color="secondary" />
        <AddBoxIcon color="primary" />
      </ActionsStyled>
    </ScoreStyled>
  )
}
