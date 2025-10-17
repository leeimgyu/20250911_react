import { useParams } from "react-router-dom";
export default function Read() {
  const params = useParams() // useParams에 대해 알것 !
  return (
    <div>
      <h4>Read</h4>
      <p>useParams: 동적 경로 파라미터를 가져올 떄 사용 (예:/user/:id).</p>
      <p>bid: {params['bid']}</p>
    </div>
  )
}