import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";   
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };

  return (
    <>
      <HStack marginY={2}>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
