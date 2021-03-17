import { CardDivConteiner } from "./cardStyled"



export default function ImageCard (props){
    return(
        <CardDivConteiner src = {props.src} onClick = {props.onClick} id= {props.id} name = {props.name}/>
    )
}