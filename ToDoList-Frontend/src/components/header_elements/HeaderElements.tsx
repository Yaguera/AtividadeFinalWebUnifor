import { Link } from "react-router-dom"
interface HeaderElementsProps {
    item1: string,
    item2: string,
    link1: string,
    link2: string
}

export default function HeaderElements({ item1, item2, link1, link2 }: HeaderElementsProps) {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link" id="login" to={link1}>{item1}</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-danger" id="cadastro" to={link2}>{item2}</Link>
            </li>
        </ul>
    )
}