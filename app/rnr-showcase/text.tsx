import { View, ViewProps } from "react-native";
import Themelayout from "~/components/theme-layout";
import { Text, TextClassContext } from "~/components/ui/text";

const Parent = (props: ViewProps) => {
  return (
    <TextClassContext.Provider value="text-red-500">
      <View {...props} />
    </TextClassContext.Provider>
  );
};

const OtherParent = (props: ViewProps) => {
  return (
    <TextClassContext.Provider value="text-purple-500">
      <View {...props} />
    </TextClassContext.Provider>
  );
};

const TextExample = () => {
  return (
    <Themelayout className="items-center justify-center">
      {/* Default behavior without a parent `TextClassContext.Provider` */}
      <Text>The applied className is foreground</Text>
      <Parent>
        {/* Inherits the `TextClassContext.Provider` value from the `Parent` component and overrides the default `Text` component `className` */}
        <Text>The applied className to Parent is text-red-500</Text>
        {/* This `className` will override the `TextClassContext.Provider` value */}
        <Text className="text-blue-500">
          The applied className is text-blue-500
        </Text>
        <OtherParent>
          {/* Inherits the `TextClassContext.Provider` value from the `OtherParent` component overrides the `TextClassContext.Provider` value from the `Parent` */}
          <Text>The applied className to Parent is text-purple-500</Text>
        </OtherParent>
      </Parent>
    </Themelayout>
  );
};

export default TextExample;
