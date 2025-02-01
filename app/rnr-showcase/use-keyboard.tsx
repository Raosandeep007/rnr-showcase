import * as React from "react";
import Themelayout from "~/components/theme-layout";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { useKeyboard } from "~/hook/useKeyboard";

const UseKeyboardExample = () => {
  const { isKeyboardVisible, keyboardHeight, dismissKeyboard } = useKeyboard();

  function onChangeText(text: string) {
    if (text.toLowerCase() === "dismiss") {
      dismissKeyboard();
    }
  }

  return (
    <Themelayout className="gap-4">
      <Input
        onChangeText={onChangeText}
        placeholder="Type dismiss to dismiss Keyboard"
      />
      <Text>
        {JSON.stringify({ isKeyboardVisible, keyboardHeight }, null, 2)}
      </Text>
    </Themelayout>
  );
};

export default UseKeyboardExample;
