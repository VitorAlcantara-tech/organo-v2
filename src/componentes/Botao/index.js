import './botao.css'

const Botao = ({ texto }) => {
    return (
        <div className='botao__container'>
            <button className="botao">
                {texto}
            </button>
        </div>
    )
}

export default Botao