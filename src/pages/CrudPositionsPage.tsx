import CategoryList from '../components/PositionsPage/CategoryList'
import { usePositions } from '../hooks/usePositions'

const PositionsPage = () => {
  const { competition } = usePositions()

  if (!competition) return <h1>Loading</h1>

  return (
    <div>
      <header>
        <h1>{competition.name}</h1>
      </header>
      <p>{competition.description}</p>
      <CategoryList categories={competition.categories} />
    </div>
  )
}

export default PositionsPage
