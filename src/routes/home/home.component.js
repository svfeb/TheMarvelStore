import Directory from "../../Components/directory/Directory.component";
import categories from "../../Components/category-items/Categories";

function Home() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
