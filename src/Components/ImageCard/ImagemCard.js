import { CardDivConteiner } from "./styled"



export default function ImageCard (props){
    return(
        <CardDivConteiner src = {props.src} onClick = {props.onClick} id= {props.id}/>
    )
}