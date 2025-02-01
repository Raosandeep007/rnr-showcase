import React from "react";
import Themelayout from "~/components/theme-layout";
import { Input } from "~/components/ui/input";

const InputExample = () => {
  const [value, setValue] = React.useState("");

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <Themelayout>
      <Input
        placeholder="Write some stuff..."
        value={value}
        onChangeText={onChangeText}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
    </Themelayout>
  );
};

export default InputExample;
