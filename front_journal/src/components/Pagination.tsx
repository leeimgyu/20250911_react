import React from 'react'

export interface PaginationProps {
  pageList?: number[]
  page?: number
}

const Pagination: React.FC<PaginationProps> = ({pageList, page}) => {
  return (
    <>
      {pageList?.map(page => (
        <li key={page} className="page-item">
          <a className="page-link" href={`#page-${page}`}>
            {page}
          </a>
        </li>
      ))}
    </>
  )
}

export default Pagination
