import { CardBody, Card } from "@chakra-ui/react"
import { Skeleton } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="300px">
        <Skeleton height="200px" />
        <CardBody>
            <Skeleton />
        </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton
