import { Game } from "@/hooks/useGames" 
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <div>
      <Card.Root borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
            <Heading textStyle="2xl">{game.name}</Heading>
            <Text>{game.name}</Text>
        </CardBody>
      </Card.Root>
    </div>
  )
}

export default GameCard
