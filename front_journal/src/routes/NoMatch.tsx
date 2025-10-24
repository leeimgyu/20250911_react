import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

export default function NoMatch() {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])
  return (
    <div className="flex flex-col p-4">
      <p className="text-xl text-center">Sorry! No page found!</p>
      <div className="flex justify-center mt-4">
        <button className="ml-4 btn btn-primary btn-xs min-h-12" onClick={goBack}>
          go Back
        </button>
      </div>
    </div>
  )
}
