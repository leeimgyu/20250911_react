// import {Link} from 'react-router-dom'
import {Link} from '../../components'

export default function NavigationBar() {
  return (
    // prettier-ignore
    <div className="flex flex-row p-2 navbar bg-base-100 ml-4">
      <Link to="/" className="btn btn-link">Home</Link>
      <Link to="/board" className="btn btn-link">Board</Link>
      <Link to="/board/list" className="btn btn-link">Board list</Link>
      <Link to="/landing" className="btn btn-link">Landing</Link>
      <Link to="/landing/main" className="btn btn-link">Landing main</Link>
    </div>
  )
}
