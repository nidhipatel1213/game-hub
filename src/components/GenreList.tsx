import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text, Spinner, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  return (
    <div>
      <List.Root listStyleType="none">
        {error && <Text>{null}</Text>}
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                // _hover={{ textDecoration: "underline" }} 
                variant='ghost'
                fontWeight="bold"
                padding={0}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </div>
  );
};

export default GenreList;
