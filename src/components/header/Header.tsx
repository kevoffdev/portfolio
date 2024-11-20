import PingIcon from './PingIcon';
import ArgentinaTime from './TimeZone';

const Header = () => {
  return (
    <header className="border-b border-primary px-10 py-6 font-medium">
      <ul className="flex items-center justify-between">
        <li className="flex items-center gap-4 rounded-xl bg-primary px-4 py-2 text-lg font-normal">
          <PingIcon />
          <span className="opacity-90">Disponible para trabajar</span>
        </li>
        <li>
          <ArgentinaTime />
        </li>
      </ul>
    </header>
  );
};

export default Header;
