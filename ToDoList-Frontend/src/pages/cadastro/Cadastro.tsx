import "./Cadastro.css"
import Header from "../header/Header";

export default function Cadastro() {
    (() => {
        'use strict';

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;//Convertido para NodeListOf<HTMLFormElement> para informar ao TypeScript que os elementos são especificamente instâncias de HTMLFormElement.

        // Loop over them and prevent submission
        for (let i = 0; i < forms.length; i++) {
            const form = forms[i];
            form.addEventListener('submit', event => {
                event.preventDefault();

                if (!form.checkValidity()) { // Isso verifica se o formulário é válido usando o método checkValidity(). Se o formulário não for válido, impede o comportamento padrão de envio do formulário e interrompe a propagação do evento.
                    event.stopPropagation();
                }

                form.classList.add('was-validated'); //: Adiciona a classe 'was-validated' ao formulário. Essa classe é normalmente usada no Bootstrap para aplicar estilos de validação personalizados ao formulário.
            }, false);
        }
    })();




    return (
        <>
            <Header navItem1="" navItem2="SAIR" linkItem1="" linkItem2="/" />
            <div className="form-cadastro">
                <div className="container">
                    <form className="row g-3 needs-validation" noValidate>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom01" className="form-label">
                                Nome
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Nome"
                                required
                            />
                            <div className="valid-feedback">Tudo certo!</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom03" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="validationCustom03"
                                placeholder="Digite seu e-mail"
                                required
                            />
                            <div className="invalid-feedback">Por favor, digite um e-mail válido.</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom02" className="form-label">
                                Senha
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Digite sua senha"
                                required
                            />
                            <div className="valid-feedback">Tudo certo!</div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="invalidCheck"
                                    required
                                />
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Aceito os termos e condições
                                </label>
                                <div className="invalid-feedback">Você precisa aceitar antes de continuar.</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-danger" type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}