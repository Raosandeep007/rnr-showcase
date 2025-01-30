import { AlertTriangle, Terminal } from "lucide-react-native";
import { View } from "react-native";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

const AlertExample = () => {
  return (
    <>
      <View className="mt-4" />
      <Alert icon={Terminal} className="max-w-sm inset-x-7">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can use a terminal to run commands on your computer.
        </AlertDescription>
      </Alert>
      <View className="mt-2" />
      <Alert
        icon={AlertTriangle}
        variant="destructive"
        className="max-w-sm inset-x-7"
      >
        <AlertTitle>Danger!</AlertTitle>
        <AlertDescription>
          High voltage. Do not touch. Risk of electric shock. Keep away from
          children.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AlertExample;
