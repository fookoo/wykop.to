import { ITag } from './tags.type'
import { mockTags } from './tags.mock'

export class TagsService {
  public static async getTags(): Promise<ITag[]> {
    return mockTags
  }
}
