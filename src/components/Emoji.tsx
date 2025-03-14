import { Icon } from "@chakra-ui/react";
import { BsFillHeartFill, BsFillHandThumbsUpFill } from "react-icons/bs";

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;
    if (rating >= 3 && rating < 7) return <BsFillHandThumbsUpFill />;
    if (rating >= 7) return <BsFillHeartFill />;
    const emojiMap: Record<3 | 4 | 5 | 6 | 7, React.ComponentType> = {
        3: BsFillHeartFill,
        4: BsFillHeartFill,
        5: BsFillHeartFill,
        6: BsFillHeartFill,
        7: BsFillHeartFill,
    }
  return (
    <div>
       {emojiMap[rating as 3 | 4 | 5 | 6 | 7] && (
                <Icon as={emojiMap[rating as 3 | 4 | 5 | 6 | 7]} boxSize="25px" />
            )}
    </div>
  )
}

export default Emoji
