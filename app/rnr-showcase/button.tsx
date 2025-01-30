import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

const ButtonExample = () => {
  return (
    <View className="bg-white dark:bg-black flex-1 p-4 gap-8">
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
    </View>
  );
};

export default ButtonExample;
