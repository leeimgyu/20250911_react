export interface MembersDTO {
  mid: number
  name: string
  nickname: string
  email: string
  mobile: string
}

export interface JournalDTO {
  jno: number
  title: string
  content: string
  photosDTOList: {path?: string; uuid?: string; getThumbnailURL?: string | null}[]
  commentsCnt: number
  membersDTO: MembersDTO
  likes: number
  regDate: string
  modDate: string
}

// PageResultDTO 구조 정의
export interface PageResultDTO {
  dtoList: JournalDTO[]
  page: number
  start: number
  end: number
  photosDTOList: PhotosDTO[]
  pageList: number[]
  prev: boolean
  next: boolean
}

export interface PageRequestDTO {
  page: string
  size: string
  type: string
  keyword: string
}

export interface PhotosDTO {
  uuid?: string | null
  photosName?: string | null
  path?: string | null
  thumbnailURL?: string | null
  fileURL?: string | null
}

export interface CommentsDTO {
  cno: number
  text: string
  nickname: string
  email: string
  likes: number
  regDate: string
}
