import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react"
import { FaAngleDown } from "react-icons/fa"


const SortSelector = () => {
  return (
    <MenuRoot>
    <MenuTrigger asChild>
      <Button variant="outline" size="sm">
        Order by: Relevance
        <FaAngleDown />
      </Button>
    </MenuTrigger>
    <MenuContent>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="added">Date added</MenuItem>
        <MenuItem value="name">name</MenuItem>
        <MenuItem value="released">Release date</MenuItem>
        <MenuItem value="metacritic">Popularity</MenuItem>
        <MenuItem value="rating">Average rating</MenuItem>
    </MenuContent>
  </MenuRoot>
  )
}

export default SortSelector
