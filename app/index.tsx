import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import Themelayout from "~/components/theme-layout";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { COMPONENTS } from "~/data/components";
import { useDebounce } from "~/hook/useDebounce";
import "../global.css";

export default function Index() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handlesearch = (text: string) => {
    setSearch(text);
  };

  const searchTerm = useDebounce(search);

  const components = searchTerm
    ? COMPONENTS.filter(({ name, href }) => {
        return (
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          href.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    : COMPONENTS;

  return (
    <Themelayout className="gap-2">
      <Input onChangeText={handlesearch} placeholder="Seacrh UI..." />
      <Animated.FlatList
        itemLayoutAnimation={LinearTransition}
        showsVerticalScrollIndicator={false}
        data={components}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Button
              variant="outline"
              onPress={() => router.push(item.href)}
              className="mx-3 my-2"
            >
              <View className="flex flex-row w-full">
                <Text>{item.name}</Text>
                <ChevronRight
                  size={24}
                  className="text-black dark:text-white ml-auto"
                />
              </View>
            </Button>
          );
        }}
      />
    </Themelayout>
  );
}
