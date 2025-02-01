import React from "react";
import Themelayout from "~/components/theme-layout";
import { Progress } from "~/components/ui/progress";

const ProgressExample = () => {
  const [progressValue, setProgressValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        let newValue = prev + 1;
        if (newValue > 100) newValue = 0;
        return newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Themelayout className="justify-center">
      <Progress value={progressValue} className="web:w-[60%]" />
    </Themelayout>
  );
};

export default ProgressExample;
