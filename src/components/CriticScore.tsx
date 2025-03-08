import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <div>
      <Badge
        borderRadius={4}
        fontSize="14px"
        paddingX={3}
        paddingY={1}
        colorPalette={color}
      >
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
