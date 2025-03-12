import { Button } from "@chakra-ui/react"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { FaAngleDown } from "react-icons/fa";
import usePlatforms from "@/hooks/usePlatforms";


const PlatformSelector = () => {
    const {data,error} = usePlatforms();

    if (error) return null;
  return (
    <MenuRoot>
    <MenuTrigger asChild>
      <Button variant="outline" size="sm">
        Platforms
        <FaAngleDown />
      </Button>
    </MenuTrigger>
    <MenuContent>
        {data.map((platform) => (
            <MenuItem value={platform.id.toString()} key={platform.id}>{platform.name}</MenuItem>
        ))}
    </MenuContent>
  </MenuRoot>

  );
};

export default PlatformSelector;
