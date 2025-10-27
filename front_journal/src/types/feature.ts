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
  path?: string | null
  uuid?: string | null
  getThumbnailURL?: string | null
}
