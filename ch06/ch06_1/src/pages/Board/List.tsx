import { useLocation, useNavigate } from "react-router-dom";
import { BoardDTO } from "../../dto/BoardDTO";
import { useCallback } from "react";

export default function List() {
  const navigate = useNavigate()
  const location = useLocation()
  const boardList: BoardDTO[] = []
  for(let i=0;i<10;i++) {
    boardList.push(new BoardDTO(i, 'title'+i, 'content'+i))
  }
  const goRead = useCallback((bid: number) => () => {
    navigate(`/board/read/${bid}`)
    console.log(`/board/read/${bid}`)
  },[navigate])
  const register = useCallback(()=>{
    navigate('/board/register')
  },[navigate])
  return (
    <div>
      <h4>Board List</h4>
      <button className="btn btn-accent" type="button" onClick={register}>Register</button>
      <table className="table table-striped w-150">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map(board => (
            <tr key={board.bid} className="cursor-pointer" onClick={goRead(board.bid)}>
              <td>{board.bid}</td>
              <td>{board.title}</td>
              <td>{board.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}