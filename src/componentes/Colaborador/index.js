import { IoIosCloseCircleOutline } from 'react-icons/io'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletarColaborador, aoFavoritar }) => {

    const favoritar = () => {
        aoFavoritar(colaborador.id);
    }

    const propsFavoritar ={
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <IoIosCloseCircleOutline
                size={25}
                className="deletar"
                onClick={() => aoDeletarColaborador(colaborador.id)}
            />

            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavoritar} color='red' />
                        : <AiOutlineHeart {...propsFavoritar} />
                    }
                </div>
            </div>
        </div>)
}

export default Colaborador