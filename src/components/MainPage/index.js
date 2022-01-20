import { PlainIcon } from "../../assets/icons";
import { TicketSelection } from "../TicketSelection";
import style from "./style.module.scss";

export const MainPage = () => {
  return (
    <div className={style.page}>
      <PlainIcon />
      <div className={style.container}>
        <TicketSelection />
      </div>
    </div>
  );
};
