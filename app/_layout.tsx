import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { H3, H4 } from "~/components/ui/typography";
import { useColorScheme } from "~/hook/useColorScheme";
import "../global.css";

export default function RootLayout() {
  const { top } = useSafeAreaInsets();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  function toOptions(name: string) {
    const title = name
      .split("rnr-showcase/")
      .map(function (str: string) {
        return str.replace(/\b\w/g, function (char) {
          return char.toUpperCase();
        });
      })
      .join(" ");
    return title;
  }

  return (
    <>
      <Stack
        screenOptions={{
          header: (props) => {
            return (
              <View
                className="px-2 bg-white dark:bg-black items-center flex-row justify-between w-full"
                style={{
                  paddingTop: top,
                }}
              >
                {props.navigation.canGoBack() && (
                  <Button
                    variant="ghost"
                    size="icon"
                    hitSlop={20}
                    onPress={() => {
                      props.navigation.goBack();
                    }}
                  >
                    <ChevronLeft
                      size={28}
                      className="text-black dark:text-white"
                    />
                  </Button>
                )}
                <H4>{props.options.title || toOptions(props.route.name)}</H4>
                <Button
                  hitSlop={20}
                  variant="ghost"
                  size="icon"
                  onPress={toggleColorScheme}
                >
                  <H3>{colorScheme === "dark" ? "🌞" : "🌚"}</H3>
                </Button>
              </View>
            );
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "rnr showcase",
          }}
        />
      </Stack>
      <PortalHost />
    </>
  );
}
