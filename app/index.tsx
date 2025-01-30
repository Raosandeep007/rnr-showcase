import { Href, useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import "../global.css";

export default function Index() {
  const router = useRouter();

  const COMPONENTS: {
    name: string;
    href: Href;
  }[] = [
    {
      name: "Accordion",
      href: "/rnr-showcase/accordion",
    },
  ];

  return (
    <View className="bg-white dark:bg-black flex-1">
      <FlatList
        data={COMPONENTS}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                router.push(item.href);
              }}
            >
              <Text className="text-black dark:text-white">{item.name}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
