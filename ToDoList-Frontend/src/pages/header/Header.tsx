import Logo from "../../assets/img/logo.jpg"
import HeaderElements from "../../components/header_elements/HeaderElements"
import "./Header.css"
interface HeaderProps {
    navItem1: string,
    navItem2: string
}

export default function Header({navItem1, navItem2} : HeaderProps) {

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
                        <HeaderElements item1={navItem1} item2={navItem2} />
                    </div>
                </div>
            </nav>
        </header>
    )
}