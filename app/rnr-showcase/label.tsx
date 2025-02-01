import React from "react";
import Themelayout from "~/components/theme-layout";
import { Label } from "~/components/ui/label";

const LabelExample = () => {
  return (
    <Themelayout className="items-center justify-center">
      <Label nativeID="name">Label example </Label>
    </Themelayout>
  );
};

export default LabelExample;
