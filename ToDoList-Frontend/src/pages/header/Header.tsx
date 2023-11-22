import Logo from "../../assets/img/logo.jpg"
import "./Header.css"

export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler shadow-sm" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" id="login" href="">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-danger" id="cadastro" href="">CRIE SUA CONTA</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}