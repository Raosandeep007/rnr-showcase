import { useNavigation } from "expo-router";
import { Sparkles } from "lucide-react-native";
import * as React from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Themelayout from "~/components/theme-layout";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/alert-dialog/alert-dialog-universal",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
];

const NavigationMenuExample = () => {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  const [value, setValue] = React.useState<string>();
  const navigation = useNavigation();

  function closeAll() {
    setValue("");
  }

  React.useEffect(() => {
    const sub = navigation.addListener("blur", () => {
      closeAll();
    });

    return sub;
  }, []);

  return (
    <Themelayout>
      {Platform.OS !== "web" && !!value && (
        <Pressable
          onPress={() => {
            setValue("");
          }}
          style={StyleSheet.absoluteFill}
        />
      )}
      <NavigationMenu value={value} onValueChange={setValue}>
        <NavigationMenuList>
          <NavigationMenuItem value="getting-started">
            <NavigationMenuTrigger>
              <Text>Getting started</Text>
            </NavigationMenuTrigger>
            <NavigationMenuContent insets={contentInsets}>
              <View
                role="list"
                className="web:grid gap-3 p-6 md:w-[400px] lg:w-[500px] web:lg:grid-cols-[.75fr_1fr]"
              >
                <View role="listitem" className="web:row-span-3">
                  <NavigationMenuLink asChild>
                    <View className="flex web:select-none flex-col justify-end rounded-md web:bg-gradient-to-b web:from-muted/50 web:to-muted native:border native:border-border p-6 web:no-underline web:outline-none web:focus:shadow-md web:focus:shadow-foreground/5">
                      <Sparkles size={16} className="text-foreground" />
                      <Text className="mb-2 mt-4 text-lg native:text-2xl font-medium">
                        react-native-reusables
                      </Text>
                      <Text className="text-sm native:text-base leading-tight text-muted-foreground">
                        Universal components that you can copy and paste into
                        your apps. Accessible. Customizable. Open Source.
                      </Text>
                    </View>
                  </NavigationMenuLink>
                </View>
                <ListItem href="/docs" title="Introduction">
                  <Text>
                    Re-usable components built using Radix UI on the web and
                    Tailwind CSS.
                  </Text>
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  <Text>
                    How to install dependencies and structure your app.
                  </Text>
                </ListItem>
                <ListItem
                  href="/docshttps://rn-primitives.vercel.app/typography"
                  title="Typography"
                >
                  <Text>Styles for headings, paragraphs, lists...etc</Text>
                </ListItem>
              </View>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="components">
            <NavigationMenuTrigger>
              <Text className="text-foreground">Components</Text>
            </NavigationMenuTrigger>
            <NavigationMenuContent insets={contentInsets}>
              <View
                role="list"
                className="web:grid w-[400px] gap-3 p-4 md:w-[500px] web:md:grid-cols-2 lg:w-[600px] "
              >
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </View>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="documentation">
            <NavigationMenuLink
              onPress={closeAll}
              className={navigationMenuTriggerStyle()}
            >
              <Text>Documentation</Text>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Themelayout>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuLink>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuLink> & {
    title: string;
    href: string;
    children: React.ReactNode;
  }
>(({ className, title, children, ...props }, ref) => {
  // TODO: add navigationn to `href` on `NavigationMenuLink` onPress
  return (
    <View role="listitem">
      <NavigationMenuLink
        ref={ref}
        className={cn(
          "web:block web:select-none gap-1 rounded-md p-3 leading-none no-underline text-foreground web:outline-none web:transition-colors web:hover:bg-accent active:bg-accent web:hover:text-accent-foreground web:focus:bg-accent web:focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <Text className="text-sm native:text-base font-medium text-foreground leading-none">
          {title}
        </Text>
        <Text className="line-clamp-2 text-sm native:text-base leading-snug text-muted-foreground">
          {children}
        </Text>
      </NavigationMenuLink>
    </View>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuExample;
