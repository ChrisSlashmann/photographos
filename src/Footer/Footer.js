import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">
          <a className="footer__list-link" href="http://">
            Instructions
          </a>
        </li>

        <li className="footer__list-item">
          <a className="footer__list-link" href="http://">
            Style guide
          </a>
        </li>

        <li className="footer__list-item">
          <a className="footer__list-link" href="http://">
            Image license info
          </a>
        </li>

        <li className="footer__list-item">
          <a className="footer__list-link" href="http://">
            Changelog
          </a>
        </li>

        <li className="footer__list-item">
          <a className="footer__list-link" href="http://">
            Made by Fouroom
          </a>
        </li>

        <li className="footer__list-item">
          <a className="footer__list-link" href="http://">
            Powered by Webflow
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;