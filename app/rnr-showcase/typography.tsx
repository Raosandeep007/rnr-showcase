import { View } from "react-native";
import Themelayout from "~/components/theme-layout";
import * as Typography from "~/components/ui/typography";

const TypographyExample = () => {
  return (
    <Themelayout>
      <View className="flex flex-col gap-4">
        <Typography.H1>Heading 1</Typography.H1>
        <Typography.H2>Heading 2</Typography.H2>
        <Typography.H3>Heading 3</Typography.H3>
        <Typography.H4>Heading 4</Typography.H4>
        <Typography.Large>Large</Typography.Large>
        <Typography.Lead>Lead</Typography.Lead>
        <Typography.Muted>Muted</Typography.Muted>
        <Typography.P>Paragraph</Typography.P>
        <Typography.Small>Small</Typography.Small>
        <Typography.BlockQuote>Block Quote</Typography.BlockQuote>
        <Typography.Code>Code</Typography.Code>
      </View>
    </Themelayout>
  );
};

export default TypographyExample;
