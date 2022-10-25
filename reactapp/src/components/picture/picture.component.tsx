import { FC } from "react";
import niceName from "../../utils/formatting/niceName";
import { Img, Name, PictureContainer } from "./picture.style";

type PictureProps = {
  playerId: string;
  playerName: string;
};

const Picture: FC<PictureProps> = ({ playerId, playerName }) => {
  return (
    <PictureContainer>
      <Img
        imageUrl={`https://mygameplan-assets.s3.eu-west-3.amazonaws.com/images/players/${playerId}.png`}
      />
      {playerName && <Name>{niceName(playerName)}</Name>}
    </PictureContainer>
  );
};

export default Picture;
