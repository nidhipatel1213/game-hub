import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <div>
      <List.Root listStyleType="none">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={2}>
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
              <Text fontSize="lg">{genre.name}</Text>
              </HStack>
          </List.Item>
        ))}
      </List.Root>
    </div>
  );
};

export default GenreList;
