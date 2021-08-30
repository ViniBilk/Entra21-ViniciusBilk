export function Notificacoes(props){

    const notificacoes = props.mensagens || []

    return (
        <>
        {
             props.mensagens && props.mensagens.length > 0 && 
             <p>Você tem {props.mensagens.length} notificaçoe(s)</p>
        }      
        </>
    )
}