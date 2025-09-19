import { Title } from "../components";

export default function ViewportTest() {
  return (
    <div>
      <p>ViewportTest</p>
      <section className="w-1/2 h-screen mt-4 bg-indigo-900">
        <Title className="text-white">Viewport Test</Title>
      </section>
    </div>
  )
}