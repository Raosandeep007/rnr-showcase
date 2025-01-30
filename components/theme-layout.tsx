import { View, ViewProps } from "react-native";
import React from "react";
import { cn } from "~/lib/utils";

const Themelayout = (props: ViewProps) => {
  return (
    <View
      {...props}
      className={cn("bg-white dark:bg-black flex-1 p-4", props.className ?? "")}
    />
  );
};

export default Themelayout;
