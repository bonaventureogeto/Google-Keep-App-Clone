import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">Menu</span>
          <span className="tooltiptext">Main Menu</span>
        </div>
        <img
          className="gb_Hc gb_Md"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
          alt=""
          aria-hidden="true"
          role="presentation"
          style={{ width: "40px", height: "40px" }}
        />
        <span className="logo-text">Keep</span>
      </div>
      <div className="search-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">Search</span>
          <span className="tooltiptext">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">refresh</span>
          <span className="tooltiptext">refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">view_agenda</span>
          <span className="tooltiptext">agenda</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">settings</span>
          <span className="tooltiptext">settings</span>
        </div>
      </div>
      <div className="profile-action-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">apps</span>
          <span className="tooltiptext">Google apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            account_circle
          </span>
          <span className="tooltiptext">account</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
