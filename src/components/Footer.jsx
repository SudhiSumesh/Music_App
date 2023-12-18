import "../styles/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left-side">
          <ul className="company">
            <li>Company</li>
            <li>
              <a href="">About </a>
            </li>
            <li>
              <a href="">Jobs </a>
            </li>
            <li>
              <a href="">For the Record</a>
            </li>
          </ul>
          <ul className="communities">
            <li>Communities</li>
            <li>
              <a href="">For Artists</a>
            </li>
            <li>
              <a href="">Developers </a>
            </li>
            <li>
              <a href="">Advertising</a>
            </li>
            <li>
              <a href="">Investors </a>
            </li>
            <li>
              <a href="">Vendors </a>
            </li>
          </ul>
          <ul className="usefull-links">
            <li>Usefull links </li>
            <li>
              <a href="">Support </a>
            </li>
            <li>
              <a href="">Free Mobile App </a>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <ul className="icons">
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter "></i>
            </li>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
          <ul>
            <li>
              <a href="">Legal</a>
            </li>
            <li>
              <a href="">Privacy Center</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">About Ads</a>
            </li>
            <li>
              <a href="">Accessibility</a>
            </li>
          </ul>
          <div className="copyright">© 2023 Spotify AB</div>
        </div>
    </>
  );
}
