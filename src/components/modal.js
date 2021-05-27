import React from 'react'


const Modal = ({ onClose = () => { }, children }) => {
    return (
        <div className="modal">
            <div className="container">
                <button className="close" onClick={onClose}>X</button>
                <div className="title">
                    <h3>Monitoria ocorrência de atualizações de status de pedidos</h3>
                </div>
                <hr />
                <div className="content">
                    <table className="table">
                        <thead className="tablehead">
                            <tr>
                                <th>STATUS</th>
                                <th>ÚLTIMA ATUALIZAÇÃO</th>
                                <th>SITUAÇÃO</th>
                                <th>OPERAÇÃO AFETADA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pronto para manuseio</td>
                                <td>00:05:00</td>
                                <td>Saúdavel</td>
                                <td>CD, Polo, Retire na Loja</td>
                            </tr>
                            <tr>
                                <td>Pronto para manuseio</td>
                                <td>00:05:00</td>
                                <td>Pouco Saúdavel</td>
                                <td>CD</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Modal;