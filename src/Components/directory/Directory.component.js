import CategoryItem from "../category-items/category-item.component";

import "./directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};
export default Directory;
