import { ChevronsDownUp, ChevronsUpDown } from "lucide-react-native";
import * as React from "react";
import { View } from "react-native";
import Themelayout from "~/components/theme-layout";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Text } from "~/components/ui/text";

const CollapsibleExample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible asChild open={open} onOpenChange={setOpen}>
      <Themelayout className="items-center justify-center">
        <View className="w-full gap-2">
          <View className="flex flex-row items-center justify-between space-x-4 px-4">
            <Text className="text-foreground text-sm native:text-lg font-semibold">
              @peduarte starred 3 repositories
            </Text>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? (
                  <ChevronsDownUp size={16} className="text-foreground" />
                ) : (
                  <ChevronsUpDown size={16} className="text-foreground" />
                )}
                <Text className="sr-only">Toggle</Text>
              </Button>
            </CollapsibleTrigger>
          </View>
          <View className="rounded-md border border-border px-4 py-3 ">
            <Text className="text-foreground text-sm native:text-lg">
              @radix-ui/primitives
            </Text>
          </View>
          <CollapsibleContent className="gap-2">
            <CollapsibleItem>@radix-ui/react</CollapsibleItem>
            <CollapsibleItem>@stitches/core</CollapsibleItem>
          </CollapsibleContent>
        </View>
      </Themelayout>
    </Collapsible>
  );
};

export default CollapsibleExample;

function CollapsibleItem({ children }: { children: string }) {
  return (
    <View className="rounded-md border border-border px-4 py-3">
      <Text className="text-foreground text-sm native:text-lg">{children}</Text>
    </View>
  );
}
