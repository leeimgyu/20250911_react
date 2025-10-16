import type { FC } from "react"
import { Link } from "react-router-dom"

type HomeProps = {title?:string}
const Home:FC<HomeProps>= ({title}) => {
  return (
    <div>
      <div className="flex bg-gray-200 p-4">
        <Link to="/">Home</Link>
        <Link to="/welcome" className="ml-4" title="Welcome Guys!">Welcome</Link>
        <Link to="/board" className="ml-4">Board</Link>
        <Link to="/login" className="ml-4">Login</Link>
        <Link to="/join" className="ml-4">Join</Link>
      </div>
      <p>{title ?? 'Home'}</p>
    </div>
  )
}
export default Home