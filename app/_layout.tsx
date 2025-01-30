import { Stack } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "~/lib/useColorScheme";
import "../global.css";

export default function RootLayout() {
  const { top } = useSafeAreaInsets();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Stack
      screenOptions={{
        header: (props) => {
          return (
            <View
              className="px-3 pb-2 bg-white dark:bg-black items-center flex-row justify-between w-full"
              style={{
                paddingTop: top,
              }}
            >
              {props.navigation.canGoBack() && (
                <Pressable
                  hitSlop={20}
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                >
                  <ChevronLeft
                    size={20}
                    className="text-black dark:text-white"
                  />
                </Pressable>
              )}
              <Text className="text-black dark:text-white text-xl font-bold">
                {props.route.name}
              </Text>
              <Pressable hitSlop={20} onPress={toggleColorScheme}>
                <Text
                  className="text-2xl font-bold text-center"
                  onPress={toggleColorScheme}
                >
                  {colorScheme === "dark" ? "🌞" : "🌚"}
                </Text>
              </Pressable>
            </View>
          );
        },
      }}
    />
  );
}
