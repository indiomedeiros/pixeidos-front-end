import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    font-weight: bolder;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 0px 30px;
    height: 70px;  
   

`
export const ButtonTitle = styled.h1`
    font-size: 1.7em;
     cursor: pointer; 
     font-family: Roboto;
     :hover{
         color: #40b988;
     }
`
export const ButtonsContainer = styled.div `
    display: flex;
    justify-content: space-around;
    height: 30px;
    
    
`
export const MarginOfButtons = styled.button `
    margin-left: 10px;
   
`
export const ButtonLoginLogout= styled(MarginOfButtons)`
    font-weight: bolder;
    border-radius: 5px;
    background-color: #0b986a;
    color: white;
    width: 80px;
    height: 35px;
    border: none;
    :focus{
        outline: none;
     }
     :hover{
        background-color: #40b988;
     }
     
  

`
export const ButtonUser = styled(MarginOfButtons)`
    background-color: transparent;
    font-size: 1.2em;
    text-decoration: none;
    border: 3px solid white;
    :hover{
         border-bottom: 3px solid #0b986a;
     }
     
     :focus{
        border-bottom: 3px solid #0b986a;
        outline: none;
     }
     font-family: Roboto;
     
`

export const ButtonSignup = styled(MarginOfButtons)`
background-color: transparent;
    font-size: 1.2em;
    text-decoration: none;
    border: 3px solid white;
    :hover{
         border-bottom: 3px solid #0b986a;
     }
     
     :focus{
        border-bottom: 3px solid #0b986a;
        outline: none;
     }
     font-family: Roboto;
`

export const ButtonUploud = styled(MarginOfButtons)`

`