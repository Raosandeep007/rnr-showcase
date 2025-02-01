import { View } from "react-native";
import Themelayout from "~/components/theme-layout";
import { Skeleton } from "~/components/ui/skeleton";

const SkeletonExample = () => {
  return (
    <Themelayout className="flex-row gap-4 justify-center items-center">
      <Skeleton className="size-12 rounded-full" />
      <View className="gap-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </View>
    </Themelayout>
  );
};

export default SkeletonExample;
