import { useSafeAreaInsets } from "react-native-safe-area-context";
import Themelayout from "~/components/theme-layout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const SelectExample = () => {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <Themelayout className="items-center justify-center">
      <Select defaultValue={{ value: "apple", label: "Apple" }}>
        <SelectTrigger className="w-[250px]">
          <SelectValue
            className="text-foreground text-sm native:text-lg"
            placeholder="Select a fruit"
          />
        </SelectTrigger>
        <SelectContent insets={contentInsets} className="w-[250px]">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem label="Apple" value="apple">
              Apple
            </SelectItem>
            <SelectItem label="Banana" value="banana">
              Banana
            </SelectItem>
            <SelectItem label="Blueberry" value="blueberry">
              Blueberry
            </SelectItem>
            <SelectItem label="Grapes" value="grapes">
              Grapes
            </SelectItem>
            <SelectItem label="Pineapple" value="pineapple">
              Pineapple
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Themelayout>
  );
};

export default SelectExample;
