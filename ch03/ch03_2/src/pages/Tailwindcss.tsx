import * as D from '../data'

export default function Tailwindcss() {
  return (
    <div className='bg-black/70'>
      <p className="italic w-full p-4 text-3xl text-white">Tailwindcss</p>
      {/* 아무리 길어도 3줄을 넘지 마라 */}
      <p className="italic text-gray-50 line-clamp-3">{D.randomParagraphs(10)}</p>
      <button className="btn btn-primary" style={{textTransform: 'none'}}>
        Button
      </button>
    </div>
  )
}