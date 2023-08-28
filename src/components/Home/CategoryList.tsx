import CategoryListData from "@/Shared/Data";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  value: string;
  icon: string;
}

const CategoryList = () => {
  const categoryList = CategoryListData;
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<
    Category["name"] | null
  >(null);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div>
      <div className="flex justify-space px-2">
        <h2 className="font-bold text-white ">Selected Category</h2>
        <div className="text-white md:hidden lg:hidden" onClick={toggleIsOpen}>
          {isOpen ? "▲" : "▼"}
        </div>
      </div>
      <div
        className="grid 
        grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3"
      >
        {isOpen &&
          categoryList.map((category, index) => (
            <div
              key={category.id}
              className={`flex flex-col
                justify-center items-center bg-black
                p-2 m-2 rounded-lg grayscale 
                border-[1px]
                hover:border-[1px] hover:border-yellow cursor-pointer
                text-[13px]
                 border-purple-400
                ${
                  selectedCategory == category.name
                    ? "bg-white border-[1px]"
                    : null
                }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={100}
                height={100}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
