import { Moon, Sun } from "lucide-react-native";
import React from "react";
import { useColorScheme } from "~/hook/useColorScheme";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      hitSlop={20}
      variant="ghost"
      size="icon"
      onPress={toggleColorScheme}
    >
      {colorScheme === "dark" ? <Sun color="white" /> : <Moon color="black" />}
    </Button>
  );
};

export default ThemeSwitcher;
