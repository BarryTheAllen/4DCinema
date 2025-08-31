import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import DropdownMenu from './DropdownMenu';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          4D Cinema
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/top" className="nav-link">Топ фильмы</Link>
          <Link to="/popular" className="nav-link">Популярные</Link>
          <DropdownMenu />
          <Link to="/serials" className="nav-link">Сериалы</Link>
        </nav>
        <Search />
      </div>
    </header>
  );
};

export default Header;