import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div>
          <h1 className={classes.title}> Navbar </h1>
        </div>
        <div className={classes.navigator}>
          <ul className={classes.mainUl}>
            <li>Home</li>
            <li>Category</li>
            <li>Offers</li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className={classes.mobileMenu}>
          <ul>
            <li>Home</li>
            <li>Category</li>
            <li>Offers</li>
          </ul>
        </div>
        <div>
          <h3> Cart </h3>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
