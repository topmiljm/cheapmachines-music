import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Music', to: '/music' },
  { label: 'About', to: '/about' },
  { label: 'Live', to: '/shows' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
      <div className="navbar-img-container">
        <img 
        className="hero-title-img" 
        src="/images/cheap-machines-title2.jpg"
        >
        </img>
      </div>
      </NavLink>
      <div className="navbar-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `navbar-link${isActive ? ' active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

