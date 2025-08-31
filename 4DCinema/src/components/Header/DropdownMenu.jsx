import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories';
import './Header.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button 
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        Фильмы по категориям
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {CATEGORIES.map(category => (
            <Link
              key={category.value}
              to={`/category/${category.value}`}
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              {category.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;