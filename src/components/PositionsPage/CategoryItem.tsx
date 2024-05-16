import { ICategory } from '../../services/positions'
import CompetitionOrderList from './CompetitionOrderList'

interface ICategoryItem {
  category: ICategory;
}

const CategoryItem = ({ category }: ICategoryItem) => {
  console.log(category)

  return (
    <article>
      <header>
        <h3>{category.name}</h3>
      </header>
      <p>{category.description}</p>
      <CompetitionOrderList competitionRegistrations={category.competitionRegistrations} />
    </article>
  )
}

export default CategoryItem
