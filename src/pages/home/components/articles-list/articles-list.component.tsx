import React from 'react'
import { IArticlePost } from '../../../../services/content/content.type'
import { ArticlePost } from '../article-post/article-post.component'
import { ArticlesListStyled } from './articles-list.style'

interface IArticlesListProps {
  articles: IArticlePost[]
}

export const ArticlesList: React.FC<IArticlesListProps> = ({ articles = [] }) => {
  return (
    <ArticlesListStyled>
      {articles.map((article) => (
        <ArticlePost key={article.id} article={article} />
      ))}
    </ArticlesListStyled>
  )
}
