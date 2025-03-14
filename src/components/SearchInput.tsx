import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

interface Props {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<FaSearch />} w="100%">
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
