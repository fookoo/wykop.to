import { ITag } from '../tags/tags.type'
import { mockBins } from './bins.mock'

export interface IBin {
  id: string
  label: string
  tags?: ITag[]
  background?: string
}
export class BinsService {
  public static getBins(): Promise<IBin[]> {
    return new Promise((success) => {
      success(mockBins)
    })
  }
}
