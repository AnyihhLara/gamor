import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  return (
    <div className="flex flex-col items-start mt-20">
      <h3 className="font-semibold mb-3 text-left text-lg dark:text-gray-50">
        Trending Categories
      </h3>
      <div className="grid grid-flow-row grid-cols-4 gap-2">
        <CategoryCard
          title="Action Games"
          number="01"
          color="text-orange-600"
        />
        <CategoryCard title="Sports Games" number="02" color="text-blue-600" />
        <CategoryCard title="Adventure Games" number="03" color="text-rose-600" />
        <CategoryCard title="Arcade Games" number="04" color="text-yellow-600" />

        <CategoryCard title="Fantasy Games" number="05" color="text-violet-600" />
        <CategoryCard title="Strategy Games" number="06" color="text-green-600" />
        <CategoryCard title="Shooter Games" number="07" />
        <CategoryCard title="All Categories" number="VIEW ALL" />
      </div>
    </div>
  );
}
