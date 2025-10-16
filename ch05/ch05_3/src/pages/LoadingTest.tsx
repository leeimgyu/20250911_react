import { useCallback } from 'react'
import type { AppState } from '../store'
import * as L from '../store/loading'
import { useDispatch, useSelector } from "react-redux"
import { Button } from '../theme/daisyui'
import { Title } from '../components'

export default function LoadingTest() {
  const dispatch = useDispatch()
  const loading = useSelector<AppState, L.State>(({loading}) => loading)
  const doTimedLoading = useCallback(() => {
    dispatch<any>(L.doTimedLoading(1000 * 3))
  },[dispatch])


  return (
    <section className="mt-4">
      <Title>LoadingTest</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button
            className="btn-sm btn-primary"
            onClick={doTimedLoading}
            disabled={loading}>
            do timed loading
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <button className="btn btn-circle loading"></button>
          </div>
        )}
      </div>
    </section>
  )
}
