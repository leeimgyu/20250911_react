import React from 'react'
import type {JournalDTO} from '../types'

interface Props {
  journalDTO: JournalDTO
}

const Photos: React.FC<Props> = ({journalDTO}) => {
  const photosList = journalDTO.photosDTOList

  // 조건 검사
  const hasValidPhoto =
    photosList &&
    photosList.length > 0 &&
    photosList[0] != null &&
    photosList[0].path != null

  // 썸네일 URL 가져오기
  const thumbnailUrl =
    hasValidPhoto && photosList[0].getThumbnailURL
      ? `/display?fileName=${photosList[0].getThumbnailURL}`
      : 'https://placehold.co/70x100/lightblue/white?text=Sample'

  return (
    <img
      src={thumbnailUrl}
      alt=""
      style={{width: '70px', height: '100px', objectFit: 'cover'}}
    />
  )
}

export default Photos
