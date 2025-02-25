import Themelayout from "~/components/theme-layout";
import * as React from "react";
import { Platform } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";
import { Text } from "~/components/ui/text";
import { AspectRatio } from "~/components/ui/aspect-ratio";

const ContextMenuExample = () => {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [subCheckboxValue, setSubCheckboxValue] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("pedro");

  return (
    <Themelayout className="justify-center">
      <ContextMenu>
        <AspectRatio ratio={16 / 9}>
          <ContextMenuTrigger className="flex h-full w-full  mx-auto web:cursor-default items-center justify-center rounded-md border border-foreground border-dashed">
            <Text className="text-foreground text-sm native:text-lg">
              {Platform.OS === "web" ? "Right click here" : "Long press here"}
            </Text>
          </ContextMenuTrigger>
        </AspectRatio>

        <ContextMenuContent align="start" insets={contentInsets}>
          <ContextMenuItem inset>
            <Text>Back</Text>
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            <Text>Forward</Text>
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            <Text>Reload</Text>
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuSub>
            <ContextMenuSubTrigger inset>
              <Text>More Tools</Text>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="web:w-48 native:mt-1">
              <Animated.View entering={FadeInUp.duration(200)}>
                <ContextMenuItem>
                  <Text>Save Page As...</Text>
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Text>Create Shortcut...</Text>
                </ContextMenuItem>

                <ContextMenuSeparator />
                <ContextMenuItem>
                  <Text>Developer Tools</Text>
                </ContextMenuItem>
              </Animated.View>
            </ContextMenuSubContent>
          </ContextMenuSub>

          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={checkboxValue}
            onCheckedChange={setCheckboxValue}
            closeOnPress={false}
          >
            <Text>Show Bookmarks Bar</Text>
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={subCheckboxValue}
            onCheckedChange={setSubCheckboxValue}
            closeOnPress={false}
          >
            <Text>Show Full URLs</Text>
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup
            value={radioValue}
            onValueChange={setRadioValue}
          >
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro" closeOnPress={false}>
              <Text>Elmer Fudd</Text>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm" closeOnPress={false}>
              <Text>Foghorn Leghorn</Text>
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </Themelayout>
  );
};

export default ContextMenuExample;
