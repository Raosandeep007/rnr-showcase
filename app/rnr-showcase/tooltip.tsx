import * as React from "react";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Themelayout from "~/components/theme-layout";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const TooltipExample = () => {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <Themelayout className="flex-1 justify-center items-center">
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Text>{Platform.OS === "web" ? "Hover me" : "Press me"}</Text>
          </Button>
        </TooltipTrigger>
        <TooltipContent insets={contentInsets}>
          <Text className="native:text-lg">Add to library</Text>
        </TooltipContent>
      </Tooltip>
    </Themelayout>
  );
};

export default TooltipExample;
