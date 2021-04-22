
const NavbarAnimated = () => {

return(
<header>
<nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div className="container-fluid">
      <button
              className="navbar-toggler ps-0"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <span
              className="navbar-toggler-icon d-flex justify-content-start align-items-center"
              >
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#intro">Home</a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link"
               href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
               rel="nofollow"
               target="_blank"
               >Learn Bootstrap 5</a
              >
          </li>
          <li className="nav-item">
            <a
               className="nav-link"
               href="https://mdbootstrap.com/docs/standard/"
               target="_blank"
               >Download MDB UI KIT animatded</a
              >
          </li>
        </ul>

        <ul className="navbar-nav flex-row">
          
          <li className="nav-item">
            <a
               className="nav-link pe-2"
               href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link px-2"
               href="https://www.facebook.com/mdbootstrap"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link px-2"
               href="https://twitter.com/MDBootstrap"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link ps-2"
               href="https://github.com/mdbootstrap/mdb-ui-kit"
               rel="nofollow"
               target="_blank"
               >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
);

};

export default NavbarAnimated;