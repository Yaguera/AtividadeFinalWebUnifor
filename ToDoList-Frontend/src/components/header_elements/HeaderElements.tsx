
interface HeaderElementsProps {
    item1: string,
    item2: string
}

export default function HeaderElements({item1, item2} : HeaderElementsProps) {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" id="login" href="#">{item1}</a>
            </li>
            <li className="nav-item">
                <a className="btn btn-danger" id="cadastro" href="#">{item2}</a>
            </li>
        </ul>
    )
}