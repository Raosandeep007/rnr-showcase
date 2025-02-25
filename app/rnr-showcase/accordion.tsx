import Themelayout from "~/components/theme-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Text } from "~/components/ui/text";

const AccordionExample = () => {
  return (
    <Themelayout className="items-center justify-center">
      <Accordion
        type="multiple"
        collapsible
        defaultValue={["item-1"]}
        className="w-full max-w-sm native:max-w-md"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>Trigger</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              This is the content of the accordion item. This only shows when
              the item is open.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Text>What are universal components?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              In the world of React Native, universal components are components
              that work on both web and native platforms.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Themelayout>
  );
};

export default AccordionExample;
