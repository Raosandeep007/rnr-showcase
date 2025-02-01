import * as React from "react";
import { View } from "react-native";
import Themelayout from "~/components/theme-layout";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const RadioGroupExample = () => {
  const [value, setValue] = React.useState("Comfortable");

  function onLabelPress(label: string) {
    return () => {
      setValue(label);
    };
  }
  return (
    <Themelayout className="items-center justify-center">
      <RadioGroup value={value} onValueChange={setValue} className="gap-3">
        <RadioGroupItemWithLabel
          value="Default"
          onLabelPress={onLabelPress("Default")}
        />
        <RadioGroupItemWithLabel
          value="Comfortable"
          onLabelPress={onLabelPress("Comfortable")}
        />
        <RadioGroupItemWithLabel
          value="Compact"
          onLabelPress={onLabelPress("Compact")}
        />
      </RadioGroup>
    </Themelayout>
  );
};

function RadioGroupItemWithLabel({
  value,
  onLabelPress,
}: {
  value: string;
  onLabelPress: () => void;
}) {
  return (
    <View className={"flex-row gap-2 items-center"}>
      <RadioGroupItem aria-labelledby={`label-for-${value}`} value={value} />
      <Label nativeID={`label-for-${value}`} onPress={onLabelPress}>
        {value}
      </Label>
    </View>
  );
}

export default RadioGroupExample;
