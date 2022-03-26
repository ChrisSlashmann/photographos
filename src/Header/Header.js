import './header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Welcome to Photographos
      </h1>
      <ul className="header__list">
        <li className="header__list-item">
          <a className="header__list-demo-link" href='#'>
            Demo #1
          </a>
        </li>
        <li className="header__list-item">
          <div className="header__list-divider"></div>
          <a className="header__list-demo-link" href='#'>
            Demo #2
          </a>
        </li>
        <li className="header__list-item">
          <div className="header__list-divider"></div>
          <a className="header__list-demo-link" href='#'>
            Demo #3
          </a>
        </li>
        <li className="header__list-item">
          <div className="header__list-divider"></div>
          <a className="header__list-demo-link" href='#'>
            Demo #4
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header;