import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={`${cls.inner} container`}>
        <p>Пример работы с инструментом RTK Query</p>
      </div>
    </header>
  );
};
