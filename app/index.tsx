import { Href, useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { Button } from "~/components/ui/button";
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
    {
      name: "Button",
      href: "/rnr-showcase/button",
    },
  ];

  return (
    <View className="bg-white dark:bg-black flex-1 p-4">
      <FlatList
        data={COMPONENTS}
        keyExtractor={(item) => item.name}
        contentContainerClassName="gap-2"
        renderItem={({ item }) => {
          return (
            <Button variant="default" onPress={() => router.push(item.href)}>
              <Text className="dark:text-black text-white text-lg font-medium">
                {item.name}
              </Text>
            </Button>
          );
        }}
      />
    </View>
  );
}
