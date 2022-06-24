import React from 'react'
import { Grid, Typography } from '@mui/material'
import { IArticlePost } from '../../../../services/content/content.type'
import { ArticlePostStyled } from './article-post.style'
import { Link } from 'react-router-dom'

interface IArticlePostProps {
  article?: IArticlePost
}

export const ArticlePost: React.FC<IArticlePostProps> = ({ article }) => {
  return article ? (
    <ArticlePostStyled>
      <Grid container direction="row">
        <Grid item sm={4} md={2}>
          <img src={article.img} alt={article.title} />
        </Grid>
        <Grid item sm={8} md={10}>
          <Link key={article.id} to={`/post/${article.id}`}>
            <Typography variant="h6">{article.title}</Typography>
          </Link>
          <Typography variant="body1">{article.description}</Typography>
        </Grid>
      </Grid>
    </ArticlePostStyled>
  ) : (
    <></>
  )
}
