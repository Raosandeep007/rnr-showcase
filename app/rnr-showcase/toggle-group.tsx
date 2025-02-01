import { Bold, Italic, Underline } from "lucide-react-native";
import * as React from "react";
import Themelayout from "~/components/theme-layout";
import {
  ToggleGroup,
  ToggleGroupIcon,
  ToggleGroupItem,
} from "~/components/ui/toggle-group";

const ToggleGroupExample = () => {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <Themelayout className="justify-center items-center">
      <ToggleGroup value={value} onValueChange={setValue} type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <ToggleGroupIcon icon={Bold} size={18} />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <ToggleGroupIcon icon={Italic} size={18} />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <ToggleGroupIcon icon={Underline} size={18} />
        </ToggleGroupItem>
      </ToggleGroup>
    </Themelayout>
  );
};

export default ToggleGroupExample;
