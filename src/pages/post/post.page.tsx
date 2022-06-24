import React from 'react'
import { useParams } from 'react-router-dom'
import { Comments } from './components/comments/comments.component'
import { useArticle } from './hooks/use-article/use-article.hook'
import { ArticlePost } from '../home/components/article-post/article-post.component'

export const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading, article, comments } = useArticle(id)

  return (
    <div>
      <ArticlePost article={article} />
      <Comments comments={comments} />
    </div>
  )
}
