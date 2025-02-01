import React from "react";
import Themelayout from "~/components/theme-layout";
import { Textarea } from "~/components/ui/textarea";

const TextareaExample = () => {
  const [value, setValue] = React.useState("");
  return (
    <Themelayout>
      <Textarea
        placeholder="Write some stuff..."
        value={value}
        onChangeText={setValue}
        aria-labelledby="textareaLabel"
      />
    </Themelayout>
  );
};

export default TextareaExample;
