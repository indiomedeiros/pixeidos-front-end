import styled from "styled-components"
export const CardDivConteiner = styled.img`
    display: flex;
    width:400px;
    height: 300px;
    border: 1px solid black;
    position: relative;
    margin: 20px;
`


export default function ImageCard (props){
    return(
        <CardDivConteiner src = {props.src}/>

        
    )
}