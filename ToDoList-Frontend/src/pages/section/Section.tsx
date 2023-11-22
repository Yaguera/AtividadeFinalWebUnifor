import "./Section.css"
import { Link } from "react-router-dom"

export default function Section() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Desperte Sua Produtividade</h1>
                        <p>Organize-se de maneira intuitiva, defina metas e conquiste seus objetivos diários com facilidade.
                        </p>
                        <Link to="cadastro" className="btn btn-danger">Crie sua conta</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

