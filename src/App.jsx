import Button from './components/Elements/Button/index'

function App() {
  return (
    <div className="flex justify-center bg-blue-400 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">login</Button>
        <Button variant="bg-orange-400">logout</Button>
        <Button variant="bg-amber-600">pepe</Button>
        <Button></Button>
      </div>
    </div>
  )
}

export default App
