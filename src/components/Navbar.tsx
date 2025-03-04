import { HStack, Text} from "@chakra-ui/react"
import logo from '../assets/react.svg'
import { Image } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
    
  return (
    <div>
      <HStack justifyContent='space-between' padding='10px'>
        <HStack>
        <Image src={logo} boxSize='40px' />
        <Text fontSize='2xl' fontWeight='bold'>Game Hub</Text>
        </HStack>
        <ColorModeSwitch />
        </HStack>
    </div>
  )
}

export default Navbar
