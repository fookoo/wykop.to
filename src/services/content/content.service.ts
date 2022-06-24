import { IArticlePost } from './content.type'
import { mockComments, mockContent } from './content.mock'
import { IComment } from '../../pages/post/components/comments/components/comment/comment.component'

export class ContentService {
  public static getArticles(tagsIds: string[] = []): Promise<IArticlePost[]> {
    return new Promise((success) => {
      success(mockContent.filter(ContentService.filterByTags(tagsIds)))
    })
  }

  public static getArticle(articleId?: string): Promise<IArticlePost> {
    return new Promise((success, reject) => {
      if (!articleId) {
        reject()
      }
      const article = mockContent.find(({ id }) => id === articleId)
      console.log('getArticle', article)

      if (!article) {
        reject()
        return
      }

      success(article)
    })
  }

  public static getArticleComments(articleId?: string): Promise<IComment[]> {
    return new Promise((success, reject) => {
      if (!articleId) {
        reject([])
      }
      const comments = mockComments.filter(({ articleId: id }) => id === articleId)

      success(comments)
    })
  }

  private static filterByTags(tags: string[]) {
    return (post: IArticlePost): boolean =>
      tags.length === 0 || (post.tags || []).some((tagId) => tags.includes(tagId))
  }
}
