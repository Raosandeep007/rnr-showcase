import * as React from "react";
import { View } from "react-native";
import Themelayout from "~/components/theme-layout";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

const SwitchExample = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Themelayout className="items-center justify-center gap-4">
      <View className="flex-row items-center gap-2">
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          nativeID="airplane-mode"
        />
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}
        >
          Airplane Mode
        </Label>
      </View>
      <View className="flex-row items-center gap-2">
        <Switch
          disabled
          checked={checked}
          onCheckedChange={setChecked}
          nativeID="airplane-mode"
        />
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}
        >
          Disabled Switch
        </Label>
      </View>
    </Themelayout>
  );
};

export default SwitchExample;
