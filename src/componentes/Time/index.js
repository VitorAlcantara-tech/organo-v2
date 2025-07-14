import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'
const Time = ({ time, colaboradores, aoDeletarColaborador, mudarCor, aoFavoritar }) => {
    return (

        // importar hexToRgba para colocar opacidade na cor de fundo
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.4) }}>

            <input onChange={event => mudarCor(event.target.value, time.id)}
                value={time.cor}
                type='color'
                className='input-cor'
            />

            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice}
                            colaborador={colaborador}
                            corDeFundo={time.cor}
                            aoDeletarColaborador={aoDeletarColaborador}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                }
                )}
            </div>
        </section>

    )
}

export default Time