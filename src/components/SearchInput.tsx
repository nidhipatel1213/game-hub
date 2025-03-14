import { Input } from "@chakra-ui/react"
import { InputGroup } from "./ui/input-group"
import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  return (
    <InputGroup startElement={<FaSearch />} w="100%">
      <Input borderRadius={20} placeholder="Search games..." variant="subtle"/>
    </InputGroup>
  )
}

export default SearchInput
