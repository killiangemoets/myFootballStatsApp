import { FC, useState } from "react";
import { Cross } from "../../store/crosses/crosses.type";
import PassPopup from "../passPopup/passPopup.component";
import { PassContainer, EndingPoint } from "./pass.style";

type PassProps = {
  pass: Cross;
  heightField: number;
  widthField: number;
};

const Pass: FC<PassProps> = ({ pass, heightField, widthField }) => {
  const right = (pass.start_coordinate_x / 100) * widthField;
  const top = (pass.start_coordinate_y / 100) * heightField;

  const delta_x =
    ((pass.end_coordinate_x - pass.start_coordinate_x) / 100) * widthField;
  const delta_y =
    ((pass.end_coordinate_y - pass.start_coordinate_y) / 100) * heightField;

  const alpha = Math.atan(delta_y / delta_x);

  const L = Math.sqrt(delta_y ** 2 + delta_x ** 2);

  let Tx = (L / 2) * (1 - Math.cos(alpha));
  const Ty = (L / 2) * Math.sin(alpha);

  if (pass.start_coordinate_x > 50) Tx -= L;

  const [popup, setPopup] = useState(false);
  const showPopup = (state: boolean) => {
    setPopup(state);
  };

  return (
    <>
      <PassContainer
        rightLength={right}
        topLength={top}
        widthLength={L}
        rotation={(alpha * 180) / Math.PI}
        xTranslation={Tx}
        yTranslation={Ty}
        endingPointPosition={pass.start_coordinate_x <= 50 ? "start" : "end"}
        onMouseOver={() => showPopup(true)}
        onMouseOut={() => showPopup(false)}
      >
        <EndingPoint successful={pass.result === "successful"} />
      </PassContainer>
      {popup && <PassPopup pass={pass} />}
    </>
  );
};

export default Pass;
