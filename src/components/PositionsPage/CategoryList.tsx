import { ICategory } from '../../services/positions'
import CategoryItem from './CategoryItem'

interface ICategoryList {
  categories: ICategory[];
}

const CategoryList = ({ categories }: ICategoryList) => {
  return (
    <div>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryList
