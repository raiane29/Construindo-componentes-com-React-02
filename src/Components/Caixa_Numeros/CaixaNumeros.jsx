import './CaixaNumeros.css'

const CaixaNumeros = ({num, texto}) => {
    return(
        <>
        <h1 className='num'>{num}</h1>
        <p className='texto'>{texto}</p>
        </>
    )
    }
export default CaixaNumeros
