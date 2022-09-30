import { useContext } from "react";
import Alerta from "../../Alerta";
import SalasContext from "./SalasContext";
import InputForm from "./commons/InputForm";
function Form(){

    const {objeto, handleChange, acaoCadastrar, alerta, listaPredios} = useContext(SalasContext);
    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()

    return(
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sala</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar} className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtCodigo" className="form-label">
                                    Código
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtCodigo"
                                    name="codigo"
                                    value={objeto.codigo}
                                    onChange={handleChange}
                                />
                               
                            </div>
                            <div className="form-group">
                            <InputForm htmlFor="txtNumero" type="number" label="Numero" id="txtNumero" name="numero" value={objeto.numero} onChange={handleChange} required={true} validFeedback="OK!" invalidFeedback="Preencha este campo!"></InputForm>
                            </div>
                            <div className="form-group">
                            <InputForm htmlFor="txtDescricao" label="Descricao" type="text" id="txtDescricao" name="descricao" value={objeto.descricao} onChange={handleChange} required={true} validFeedback="OK!" invalidFeedback="Preencha este campo!"></InputForm>
                            </div>
                            <div className="form-group">
                            <InputForm htmlFor="txtCapacidade" label="Capacidade" type="number" id="txtCapacidade" name="capacidade" value={objeto.capacidade} onChange={handleChange} required={true} validFeedback="OK!" invalidFeedback="Preencha este campo!"></InputForm>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="selectPredio">Prédio</label><select required="true" className="form-control" name="predio" value={objeto.predio} id="selectPredio" onChange={handleChange}><option disable="true" value="">
                                    (Selecione o prédio)</option>
                                    {
                                        listaPredios.map((predio) => (<option key={predio.codigo} value={predio.codigo} >{predio.nome}</option>))
                                    }</select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;