import { HStack, Text } from "@chakra-ui/react"
import logo from '../assets/react.svg'
import { Image } from "@chakra-ui/react"


const Navbar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize='40px' />
        <Text>Game Hub</Text>
        </HStack>
    </div>
  )
}

export default Navbar
