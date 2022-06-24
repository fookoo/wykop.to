import { useEffect, useState } from 'react'
import { IArticlePost } from '../../../../services/content/content.type'
import { ContentService } from '../../../../services/content/content.service'
import { useToggle } from 'react-use-toggle-hook'
import { IComment } from '../../components/comments/components/comment/comment.component'

export const useArticle = (id?: string) => {
  const { value: isLoading, on: startLoading, off: stopLoading } = useToggle(false)
  const [article, setArticle] = useState<IArticlePost>()
  const [comments, setComments] = useState<IComment[]>()

  useEffect(() => {
    startLoading()
    Promise.all([ContentService.getArticle(id), ContentService.getArticleComments(id)])
      .then(([articles, comments]) => {
        setArticle(articles)
        setComments(comments)
      })
      .finally(stopLoading)
  }, [id])

  return {
    isLoading,
    article,
    comments
  }
}
