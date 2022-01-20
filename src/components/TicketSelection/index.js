import style from "./style.module.scss";

export const TicketSelection = () => {
  return (
    <div className={style.block}>
      <p className={style.block_title}>Количество пересадок</p>

      <label className={style.check}>
        <input name="all" type="checkbox" className={style.check__input} />
        <span className={style.check__box}></span>
        Все
      </label>

      <label className={style.check}>
        <input name="all" type="checkbox" className={style.check__input} />
        <span className={style.check__box}></span>
        Без пересадок
      </label>

      <label className={style.check}>
        <input name="all" type="checkbox" className={style.check__input} />
        <span className={style.check__box}></span>1 пересадка
      </label>

      <label className={style.check}>
        <input name="all" type="checkbox" className={style.check__input} />
        <span className={style.check__box}></span>2 пересадка
      </label>

      <label className={style.check}>
        <input name="all" type="checkbox" className={style.check__input} />
        <span className={style.check__box}></span>3 пересадка
      </label>
    </div>
  );
};
