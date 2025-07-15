import './campo.css'

//type padrão do input é text
//label é o texto que aparece antes do input
//valor é o valor do input
//aoAlterado é a função que será chamada quando o valor do input for alterado
const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo;