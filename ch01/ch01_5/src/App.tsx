import * as D from './data'

function App() {
  console.log('App called.')
  // 가상 돔은 <>루트가 필요하다
  return (
    <div>
      <p>{D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}</p>
      <img src={D.randomAvatar()} alt="Avatar" height="50" /> 
      <br></br>
      <img src={D.randomImage()} alt="Image" height="300" /> 
    </div>
  )
}

export default App
