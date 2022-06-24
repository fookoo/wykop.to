import React, { useEffect, useState } from 'react'
import { IArticlePost } from '../../services/content/content.type'
import { ContentService } from '../../services/content/content.service'
import { ArticlesList } from './components/articles-list/articles-list.component'
import { TagsSelector } from './components/tags-selector/tags-selector.component'
import { TagsService } from '../../services/tags/tags.service'
import { ITag } from '../../services/tags/tags.type'

export const Home: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [tags, setTags] = useState<ITag[]>([])
  const [articles, setArticles] = useState<IArticlePost[]>([])

  useEffect(() => {
    ContentService.getArticles(selectedTags).then(setArticles)
  }, [selectedTags])

  useEffect(() => {
    TagsService.getTags().then(setTags)
  }, [])

  return (
    <div>
      <TagsSelector tags={tags} onSelectedTagsChange={setSelectedTags} />
      <ArticlesList articles={articles} />
    </div>
  )
}
