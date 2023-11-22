export default function Cadastro() {
    (() => {
        'use strict';
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;
    
        // Loop over them and prevent submission
        for (let i = 0; i < forms.length; i++) {
            const form = forms[i];
    
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
    
                form.classList.add('was-validated');
            }, false);
        }
    })();
    
    
    

    return (
        <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                    Nome Completo
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="João da Silva Chavier"
                    required
                />
                <div className="valid-feedback">Tudo certo!</div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                    Senha
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="digite sua senha"
                    required
                />
                <div className="valid-feedback">Tudo certo!</div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustomUsername" className="form-label">
                    Usuário
                </label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                        @
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <div className="invalid-feedback">Por favor, digite seu usuário.</div>
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                    E-mail
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="validationCustom03"
                    required
                />
                <div className="invalid-feedback">Por favor, digite um e-mail válido.</div>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                    Zip
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom05"
                    required
                />
                <div className="invalid-feedback">Please provide a valid zip.</div>
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
                <button className="btn btn-primary" type="submit">
                    Cadastrar
                </button>
            </div>
        </form>

    )
}