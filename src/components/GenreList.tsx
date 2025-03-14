import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text, Spinner, Button, Heading } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  return (
    <div>
      <Heading fontSize="2xl" marginY={3}>Genres</Heading>
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
                objectFit="cover"
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant='ghost'
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                padding={0}
                whiteSpace="normal"
                textAlign="left"
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
