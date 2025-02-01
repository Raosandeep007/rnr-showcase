import { Bold } from "lucide-react-native";
import * as React from "react";
import Themelayout from "~/components/theme-layout";
import { Toggle, ToggleIcon } from "~/components/ui/toggle";

const ToggleExample = () => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Themelayout className="justify-center items-center">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Toggle bold"
        variant="outline"
      >
        <ToggleIcon icon={Bold} size={18} />
      </Toggle>
    </Themelayout>
  );
};

export default ToggleExample;
