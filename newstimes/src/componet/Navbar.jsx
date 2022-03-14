
import { Link } from "react-router-dom";
import logo from '../img/logo.png'

export default function Navbar(Props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode} fixed-top`} >
        <div className="container-fluid">
          <div  ><img style={{ width: "125px", height: '45px' }} src={logo} alt="logo" /></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">TRENDING</Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link" to="/politics">POLITICS</Link>
              </li>
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href='/noaction' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">MARKET</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/stock">STOCK</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/cryptocurrency">CRYPTOCURRENCY</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/modi">IPO</Link></li>
          </ul>
        </li>
            <li className="nav-item">
                <Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tech">TECH</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">HEALTH</Link>
              </li>
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href='/noaction' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">SPORTS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/cricket">Cricket</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/football">FOOTBALL</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/f1race"> F1 RACEING</Link></li>
          </ul>
        </li>
            </ul>

            {/* Searchbar not in use */}

            {/* <form className="d-flex mx-2">
              <div className="input-group">
                <input type="text" className="form-control" onChange={Props.getData}  placeholder="Search  Here" />
                <div className="input-group-append">
                  <button className="btn btn-secondary" onClick={Props.Btn} to={Props.showdata} type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form> */}
            <div className=" justify-content-end my-2">

          {/* dark mode with svg */}

              {/* <div className="one-quarter" id="switch">
                <input type="checkbox" onClick={Props.toggleMode} className="checkbox" id="chk" />
                <label className="label" for="chk">
                  <i className="fas fa-moon"></i>
                  <i className="fas fa-sun"></i>
                  <div className="ball"></div>
                </label>
              </div> */}

              <i className={`fa-solid fa-${Props.mode === "light" ? "moon" : "sun"} fa-2xl`} onClick={Props.toggleMode}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
