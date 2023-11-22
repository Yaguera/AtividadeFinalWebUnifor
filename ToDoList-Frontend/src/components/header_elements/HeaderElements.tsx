import { Link } from "react-router-dom"
interface HeaderElementsProps {
    item1: string,
    item2: string
}

export default function HeaderElements({ item1, item2 }: HeaderElementsProps) {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link" id="login" to="login">{item1}</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-danger" id="cadastro" to="cadastro">{item2}</Link>
            </li>
        </ul>
    )
}