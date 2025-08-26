import { FlatList } from "react-native";

import { styles } from "@/components/categories/styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          key={item.id}
          name={item.name}
          icon={item.icon}
          isSelected={false}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
