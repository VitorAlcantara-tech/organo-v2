import './lista-suspensa.css'
import { FaRegTrashAlt } from "react-icons/fa";


const ListaSuspensa = ({ label, items, valor, aoAlterado, obrigatorio, aoDeletar }) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                    <option value="">-- Selecione --</option>
                    {items.map(item =>
                        <option key={item}>{item}</option>
                    )
                    }
                </select>
                {valor && (
                    <button
                        onClick={() => aoDeletar(valor)}
                        title="Excluir time"
                        style={{border: 'none', cursor: 'pointer'}}
                    >
                        <FaRegTrashAlt size={25} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default ListaSuspensa