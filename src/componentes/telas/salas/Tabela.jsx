import { useContext } from "react";
import SalasContext from "./SalasContext";
import Alerta from "../../Alerta";

function Tabela(){
    const { setObjeto, alerta, setAlerta, listaObjetos, remover, setEditar, recuperar } = useContext(SalasContext);

    return(
        <div style={{padding: '20px'}}>
            <h1>Salas</h1>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao" onClick={() => {
                                setObjeto({codigo: 0, numero: "", descricao: "", capacidade: "", predio: ""});
                                setEditar(false);
                                setAlerta({status:"", message: ""});
                            }}>
                                <i className="bi bi-file-earmark-plus"></i>
                            </button>
            <Alerta alerta={alerta}></Alerta>
            {listaObjetos.length == 0 && 
            <h1>Nenhuma sala encontrado</h1>
            }
            {listaObjetos.length > 0 &&
            ( <table className="table">
            <thead>
                <tr>
                    <th scope="col" style={{ textAlign : 'center' }}>Ações</th>
                    <th scope="col">Código</th>
                    <th scope="col">Numero</th>
                    <th scope="col">Descricao</th>
                    <th scope="col">Capacidade</th>
                    <th scope="col">Predio</th>
                </tr>
            </thead>
            <tbody>
                {listaObjetos.map(objeto => (
                    <tr key={objeto.codigo}>
                        <td align="center">
                            <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEdicao" onClick={() => {
                                recuperar(objeto.codigo);
                                setEditar(true);
                                setAlerta({status:"", message: ""});
                            }}>
                                <i className="bi bi-pencil-square"></i>
                            </button>
                            <button className="btn btn-danger" title="Remover"
                                onClick={() => { remover(objeto); }}>
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                        <td>{objeto.codigo}</td>
                        <td>{objeto.numero}</td>
                        <td>{objeto.descricao}</td>
                        <td>{objeto.capacidade}</td>
                        <td>{objeto.nomepredio}</td>
                    </tr>
                ))}
            </tbody>
        </table>)
            }
        </div>
    )
}

export default Tabela;