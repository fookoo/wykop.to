import { Chip, Stack } from '@mui/material'
import React, { useCallback, useRef, useState } from 'react'
import { ITag } from '../../../../services/tags/tags.type'

interface ITagsSelectorProps {
  tags: ITag[]
  onSelectedTagsChange: (tagIds: string[]) => void
}

export const TagsSelector: React.FC<ITagsSelectorProps> = ({ tags, onSelectedTagsChange }) => {
  const selected = useRef(new Set<string>())

  const tagClickFactory = useCallback(
    (id: string) => () => {
      if (selected.current.has(id)) {
        selected.current.delete(id)
      } else {
        selected.current.add(id)
      }

      onSelectedTagsChange?.(Array.from(selected.current))
    },
    [onSelectedTagsChange]
  )
  return (
    <Stack direction="row" spacing={1}>
      {tags.map(({ id, name }) => (
        <Chip
          key={id}
          label={name}
          variant={selected.current.has(id) ? 'filled' : 'outlined'}
          onClick={tagClickFactory(id)}
        />
      ))}
    </Stack>
  )
}
