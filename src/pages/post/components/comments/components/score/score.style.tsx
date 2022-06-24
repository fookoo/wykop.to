import { styled } from '@mui/material'

export const ScoreStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
`

export const ActionsStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > svg {
    cursor: pointer;
  }
`
