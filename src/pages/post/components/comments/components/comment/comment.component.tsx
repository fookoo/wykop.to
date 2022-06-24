import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Score } from '../score/score.components'
import { CommentHeaderStyled, CommentContentStyled, CommentStyled } from './comment.style'

export interface IComment {
  id: string
  articleId: string
  author: string
  created: Date
  content: string
  score?: number
  children?: IComment[]
}

interface ICommentProps {
  comment: IComment
}

export const Comment: React.FC<ICommentProps> = ({ comment }) => {
  return (
    <CommentStyled container justifyContent="space-between">
      <Grid item flex={1}>
        <Grid container>
          <CommentHeaderStyled container direction="row">
            <Grid container direction="row" alignItems="center" gap={1}>
              <Typography variant="subtitle1">{comment.author}</Typography>
              <Typography variant="subtitle2">({comment.created.toLocaleTimeString()})</Typography>
            </Grid>
          </CommentHeaderStyled>
          <CommentContentStyled item>
            <Typography variant="body1">{comment.content}</Typography>
          </CommentContentStyled>
          {comment.children && (
            <Grid container>
              {comment.children?.map((child) => (
                <Comment key={child.id} comment={child} />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item>
        <Score value={comment.score} />
      </Grid>
    </CommentStyled>
  )
}
