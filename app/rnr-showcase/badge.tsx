import Themelayout from "~/components/theme-layout";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";

const BadgeExample = () => {
  return (
    <Themelayout className="gap-4 items-center justify-center">
      <Badge variant="default">
        <Text>Default</Text>
      </Badge>
      <Badge variant="secondary">
        <Text>Default</Text>
      </Badge>
      <Badge variant="destructive">
        <Text>Destructive</Text>
      </Badge>
      <Badge variant="outline">
        <Text>Outline</Text>
      </Badge>
    </Themelayout>
  );
};

export default BadgeExample;
