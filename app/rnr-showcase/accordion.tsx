import { View } from "react-native";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Text } from "~/components/ui/text";

const AccordionExample = () => {
  return (
    <View className="bg-white dark:bg-black flex-1 p-4">
      <Accordion
        type="multiple"
        collapsible
        defaultValue={["item-1"]}
        className="w-full max-w-sm native:max-w-md"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text className="text-black dark:text-white">Trigger</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text className="text-black dark:text-white">
              This is the content of the accordion item. This only shows when
              the item is open.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Text className="text-black dark:text-white">
              What are universal components?
            </Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text className="text-black dark:text-white">
              In the world of React Native, universal components are components
              that work on both web and native platforms.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default AccordionExample;
