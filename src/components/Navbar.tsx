import { Box, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (value: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <HStack>
          <Image src={logo} boxSize="40px" />
          <Text fontSize="2xl" fontWeight="bold">
            Game Hub
          </Text>
        </HStack>
        <Box flex="1">
        <SearchInput onSearch={onSearch} />
        </Box>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default Navbar;
