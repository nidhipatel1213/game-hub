
import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./ui/PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card.Root borderRadius={10} overflow="hidden" width="300px">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading textStyle="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root>
    </div>
  );
};

export default GameCard;
