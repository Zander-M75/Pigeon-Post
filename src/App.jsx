import "./index.css"
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      {/* Your routes or content will go here */}
      <div className="container mx-auto px-4 py-8">
        {/* Example content */}
        <h1 className="text-4xl font-bold mb-4">Welcome to Pigeon Post</h1>
        <p className="text-gray-600">Where every package has wings!</p>
      </div>
    </Layout>
  )
}

export default App
