import styled from "styled-components"
export const CardDivConteiner = styled.img`
    display: flex;
    width:400px;
    height: 300px;
    position: relative;
    margin: 5px;
`


export default function ImageCard (props){
    return(
        <CardDivConteiner src = {props.src} onClick = {props.onClick} id= {props.id}/>
    )
}