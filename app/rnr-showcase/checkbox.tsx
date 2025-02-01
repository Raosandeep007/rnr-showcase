import { useState } from "react";
import { View } from "react-native";
import Themelayout from "~/components/theme-layout";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";

const CheckBoxExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Themelayout className="gap-4 items-center justify-center">
      <View className="flex-row gap-4 items-center">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Label nativeID="terms" onPress={() => setChecked(!checked)}>
          Accept terms and conditions
        </Label>
      </View>
      <View className="flex-row gap-4 items-center">
        <Checkbox disabled checked={checked} onCheckedChange={setChecked} />
        <Label nativeID="terms" disabled>
          Accept terms and conditions
        </Label>
      </View>
    </Themelayout>
  );
};

export default CheckBoxExample;
