import { FC } from 'react'

interface CategoriesSidebarProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const CatogiresSideBar: FC<CategoriesSidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <aside className="w-full text-white mr-4">
      <h2 className="text-xs font-bold mb-4 text-[var(--color-primary)]">
        Collections
      </h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`cursor-pointer text-sm hover:underline ${
              selectedCategory === category ? 'underline' : ''
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default CatogiresSideBar
