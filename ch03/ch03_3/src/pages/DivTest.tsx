import { Div, Icon3, Subtitle, Title } from "../components";

export default function DivTest() {
  return (
    <div>
      <Title>DivTest</Title>
      <Div className="text-center text-yellow-400 bg-blue-600" height="6rem">
        <Icon3 name="home" className="text-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </div>
  )
}