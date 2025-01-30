import { Href, useRouter } from "expo-router";
import { FlatList } from "react-native";
import Themelayout from "~/components/theme-layout";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
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
    {
      name: "Alert",
      href: "/rnr-showcase/alert",
    },
    {
      name: "Alert dialog",
      href: "/rnr-showcase/alert-dialog",
    },
    {
      name: "Aspect ratio",
      href: "/rnr-showcase/aspect-ratio",
    },
    {
      name: "Typography",
      href: "/rnr-showcase/typography",
    },
    {
      name: "Avatar",
      href: "/rnr-showcase/avatar",
    },
  ];

  return (
    <Themelayout>
      <FlatList
        data={COMPONENTS}
        keyExtractor={(item) => item.name}
        contentContainerClassName="gap-2"
        renderItem={({ item }) => {
          return (
            <Button variant="outline" onPress={() => router.push(item.href)}>
              <Text className="text-lg font-medium">{item.name}</Text>
            </Button>
          );
        }}
      />
    </Themelayout>
  );
}
