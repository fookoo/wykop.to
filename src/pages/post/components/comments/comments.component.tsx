import React from 'react'
import { CommentsStyled } from './comments.style'
import { IComment, Comment } from './components/comment/comment.component'

interface ICommentsProps {
  comments?: IComment[]
}

export const Comments: React.FC<ICommentsProps> = ({ comments = [] }) => {
  return (
    <CommentsStyled container>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </CommentsStyled>
  )
}
