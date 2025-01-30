import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="accordion"
        options={{
          title: "Accordion",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
