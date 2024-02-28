import CompoundComponents from './pattern/CompoundComponentsExample'
import RenderPropsExample from './pattern/RenderPropsExample'

function App() {
  return (
    <main>
      <h1>React Patterns & Practices</h1>
      <section>
        <h2>Compound Components Example</h2>
        <CompoundComponents />
      </section>
      <section>
        <h2>Render Props Example</h2>
        <RenderPropsExample />
      </section>
    </main>
  )
}

export default App
