import React, {useCallback} from 'react'
import type {JournalDTO, PageRequestDTO} from '../types'
import {useNavigate} from 'react-router-dom'

const JournalCard: React.FC<{journal: JournalDTO; pageRequestDTO: PageRequestDTO}> = ({
  journal, pageRequestDTO
}) => {
  const navigate = useNavigate()
  const goJournalRead = useCallback(
    (jno: number, page: number, type: string, keyword: string) => {
      navigate(`/read?jno=${jno}&page=${page}&keyword=${keyword}&type=${type}`, {
        replace: false
      })
    },
    []
  )
  const thumbnailUrl =
    journal.photosDTOList!.length > 0 && journal.photosDTOList![0].path != null
      ? `http://localhost:8080/api/display?fileName=${journal.photosDTOList![0].getThumbnailURL}`
      : 'https://placehold.co/64x64/0d6efd/white?text=Sample'
  return (
    <div className="col-lg-6 col-xxl-4 mb-5">
      <div className="card bg-light border-0 h-100">
        <div
          className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0 cursor-pointer"
          onClick={() => {
            goJournalRead(journal.jno, parseInt(pageRequestDTO.page), pageRequestDTO.keyword , pageRequestDTO.type)
          }}>
          <div className="journal bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <img
              className="rounded-3"
              src={thumbnailUrl}
              alt=""
              style={{width: '64px', height: '64px', objectFit: 'cover'}}
            />
          </div>
          <h2 className="fs-4 fw-bold">{journal.title}</h2>
          {journal.regDate && !isNaN(Date.parse(journal.regDate)) ? (
            <p className="mb-0">
              {new Intl.DateTimeFormat('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              }).format(new Date(journal.regDate))}
            </p>
          ) : (
            <p className="mb-0 text-gray-400">등록일 없음</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default JournalCard
