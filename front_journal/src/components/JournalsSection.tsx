import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent
} from 'react'
import JournalCard from './JournalCard'
import type * as F from '../types'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useAuth} from '../contexts'

const JournalsSection: React.FC = () => {
  const navigate = useNavigate()
  const {login} = useAuth()

  const [query] = useSearchParams() // 웹주소의 쿼리를 받기 위한 함수
  const [pageRequestDTO, setPageRequestDTO] = useState<F.PageRequestDTO>({
    page: '',
    size: '',
    type: '',
    keyword: ''
  })

  const refType = useRef<HTMLSelectElement | null>(null)
  const refKeyword = useRef<HTMLInputElement | null>(null)
  const refBtnSrch = useRef<HTMLButtonElement | null>(null)
  const refBtnRegi = useRef<HTMLButtonElement | null>(null)

  const [pageResultDTO, setPageResultDTO] = useState<F.PageResultDTO | null>(null)
  const [types, setTypes] = useState<string>('')
  const [keywords, setKeywords] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const [journalsDTO, setJournalsDTO] = useState<F.JournalDTO[]>([])

  const options = [
    {value: '', label: '전체 보기'},
    {value: 't', label: '제목'},
    {value: 'c', label: '내용'},
    {value: 'w', label: '작성자'},
    {value: 'tc', label: '제목 + 내용'},
    {value: 'tcw', label: '제목 + 내용 + 작성자'}
  ]

  useEffect(() => {
    let compare = query.get('page')
    const page = compare === 'null' || compare === null ? '1' : compare
    compare = query.get('type')
    const type = compare === 'null' || compare === null ? '' : compare
    compare = query.get('keyword')
    const keyword = compare === 'null' || compare === null ? '' : compare
    const queryParams = [] // 전송할 때 type, keyword, page를 담기 위한 객체

    if (page) queryParams.push(`page=${page}`)
    if (type) {
      setTypes(type)
      setDisabled(false)
      queryParams.push(`type=${type}`)
    }
    if (keyword) {
      setKeywords(keyword)
      setDisabled(false)
      queryParams.push(`keyword=${keyword}`)
    }

    let url = 'http://localhost:8080/api/journal/list'
    if (queryParams.length > 0) url += '?' + queryParams.join('&')
    fetch(url, {method: 'GET'})
      .then(res => {
        if (res.status != 200) throw new Error(`Http error! status: ${res.status}`)
        return res.json()
      })
      .then(data => {
        //console.log('>>' + data.pageResultDTO.photosDTOList?.length) // undefined
        setPageRequestDTO(data.pageRequestDTO)
        setPageResultDTO(data.pageResultDTO)
        // ❗ pageResultDTO는 바로 반영되지 않으므로, data에서 직접 사용해야 합니다
        const dtoList = data.pageResultDTO?.dtoList ?? []
        const newList: F.JournalDTO[] = dtoList.map((dto: any) => ({
          jno: dto.jno,
          title: dto.title,
          content: dto.content,
          photosDTOList: dto.photosDTOList,
          commentsCnt: dto.commentsCnt,
          membersDTO: dto.membersDTO,
          likes: dto.likes,
          regDate: dto.regDate,
          modDate: dto.modDate
        }))
        setJournalsDTO(newList)
        // console.log(newList)
      })
      .catch(err => console.log('Error:', err))
  }, [query])

  const getSearch = useCallback((e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const url = '/list'
    const keyword = refKeyword.current?.value
    const type = refType.current?.value

    if (!keyword) {
      refKeyword.current?.focus()
      return
    }
    navigate(url + `?type=${type}&keyword=${keyword}&page=1`)
  }, [])

  const goRegister = useCallback(() => {
    navigate(
      `/register?page=${pageRequestDTO.page}&keyword=${pageRequestDTO.keyword}&type=${pageRequestDTO.type=='#'?'':pageRequestDTO.type}`,
      {replace: false}
    )
  }, [])

  const changeSel = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    if (e) {
      setTypes(refType.current?.value ?? '') // select에 변화가 일어나는 순간 기존 types는 비운다.
      if (e.target.selectedIndex === 0) {
        // 전체 보기일 경우
        if (!keywords) setKeywords('') // keywords 변수의 값을 지움
        setDisabled(true) // keyword와 검색버튼을 disabled 함
        if (refKeyword.current?.value) setKeywords('') // refKeyword의 value를 지움
      } else {
        // 전체보기 아닌 경우
        setDisabled(false) // keyword의 disabled를 해제
        if (e.target.value !== types) {
          // 기존 types와 변경된 types가 다를 경우
          // console.log('***', e.target.value, types) // 콘솔에 내용을 확인 차 찍어봄
          if (!keywords) setKeywords('') // keywords 변수의 값을 지움
          if (refKeyword.current?.value) setKeywords('') // refKeyword의 value를 지움
          refKeyword.current?.focus()
        }
      }
      navigate('/')
    }
    setTypes(e.target.value)
  }, [])
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <form className="mb-10" action="#" method="get" id="frmSrch">
          <div className="input-group">
            <div className="input-group-prepend" style={{marginRight: '10px'}}>
              <select
                id="type"
                name="type"
                className="form-control"
                ref={refType}
                value={types}
                onChange={changeSel}>
                {options.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              name="keyword"
              ref={refKeyword}
              disabled={disabled}
              id="keyword"
              value={pageRequestDTO.keyword ?? keywords}
              onChange={e => {
                setKeywords(e.target.value)
              }}
              style={{borderRadius: '5px'}}
            />
            <div className="input-group-append" style={{marginLeft: '10px'}}>
              <button
                className="btn btn-outline-primary btnSrch"
                onClick={getSearch}
                ref={refBtnSrch}
                disabled={disabled}>
                검색
              </button>
            </div>
            <div className="input-group-append" style={{marginLeft: '10px'}}>
              <button
                className="btn btn-outline-secondary w-42 btnRegi"
                onClick={goRegister}
                ref={refBtnRegi}>
                Journal 등록
              </button>
            </div>
          </div>
        </form>

        <div className="row gx-lg-5">
          {journalsDTO.map((journal, index) => (
            <JournalCard key={index} journal={journal} pageRequestDTO={pageRequestDTO} />
          ))}
        </div>
      </div>
      <div className="d-flex justify-center mb-4">
        <ul className="pagination h-100 justify-content-center align-items-center">
          {pageResultDTO?.prev && (
            <li className="page-item">
              <a
                className="page-link"
                href={`/list?page=${Math.max(1, pageResultDTO.start - 1)}&type=${
                  query.get('type') ?? ''
                }&keyword=${query.get('keyword') ?? ''}`}>
                Prev
              </a>
            </li>
          )}
          {pageResultDTO?.pageList.map(page => (
            <li
              key={page}
              className={`page-item ${pageResultDTO?.page === page ? 'active' : ''}`}>
              <a
                className="page-link"
                href={`/list?page=${page ?? ''}&type=${query.get('type') ?? ''}&keyword=${
                  query.get('keyword') ?? ''
                }`}>
                {page}
              </a>
            </li>
          ))}
          {pageResultDTO?.next ? (
            <li className="page-item">
              <a
                className="page-link"
                href={`/list?page=${pageResultDTO.end + 1}&type=${
                  query.get('type') ?? ''
                }&keyword=${query.get('keyword') ?? ''}`}>
                Next
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  )
}

export default JournalsSection
