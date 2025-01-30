import Themelayout from "~/components/theme-layout";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

const ButtonExample = () => {
  return (
    <Themelayout className="gap-5">
      <Button variant="default">
        <Text>Default</Text>
      </Button>
      <Button variant="destructive">
        <Text>Destructive</Text>
      </Button>
      <Button variant="secondary">
        <Text>Secondary</Text>
      </Button>
      <Button variant="ghost">
        <Text>Ghost</Text>
      </Button>
      <Button variant="link">
        <Text>Link</Text>
      </Button>
      <Button variant="outline">
        <Text>Outline</Text>
      </Button>
    </Themelayout>
  );
};

export default ButtonExample;
