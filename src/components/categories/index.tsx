import { FlatList } from "react-native";

import { styles } from "@/components/categories/styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

type CategoriesProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          key={item.id}
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selectedCategory}
          onPress={() => onSelectCategory(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
