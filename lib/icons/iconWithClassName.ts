import type { LucideIcon } from "lucide-react-native";
import { cssInterop } from "nativewind";
import { icons } from "lucide-react-native";

export function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

Object.keys(icons).forEach((iconName) => {
  iconWithClassName(icons[iconName as keyof typeof icons]);
});
