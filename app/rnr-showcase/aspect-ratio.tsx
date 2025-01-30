import { View } from "react-native";
import Themelayout from "~/components/theme-layout";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import * as Typography from "~/components/ui/typography";

const AspectRatioExample = () => {
  return (
    <Themelayout>
      <AspectRatio ratio={16 / 9}>
        <View className="bg-blue-500 h-full w-full rounded-lg flex flex-col gap-2 justify-center items-center">
          <Typography.H1 className="text-white">16:9</Typography.H1>
          <Typography.Small className="text-white">
            Aspect-ratio
          </Typography.Small>
        </View>
      </AspectRatio>
    </Themelayout>
  );
};

export default AspectRatioExample;
