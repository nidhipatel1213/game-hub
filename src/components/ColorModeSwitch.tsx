import { HStack, Switch, Icon } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <HStack>
        {/* <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} /> */}
        {/* <Switch.Root>
          <Switch.HiddenInput />
          <Switch.Control onClick={toggleColorMode}>
            <Switch.Thumb />

          </Switch.Control>
          <Switch.Label>
            {colorMode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Switch.Label>
        </Switch.Root> */}

        <Switch.Root colorPalette="blue" size="lg">
          <Switch.HiddenInput />
          <Switch.Control onClick={toggleColorMode}>
            <Switch.Thumb />
            <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
              <Icon as={FaSun} color="yellow.400" />
            </Switch.Indicator>
          </Switch.Control>
          <Switch.Label>
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Switch.Label>
        </Switch.Root>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;

