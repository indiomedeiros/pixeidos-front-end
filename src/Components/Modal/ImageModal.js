import styled from "styled-components";


export const ModalConteiner = styled.div`
  background-color: white;
  margin: auto;
  position: absolute;
  width: 90%;
`;
export const Img = styled.img`
  width: 100%;
`;

export default function ImageModal(props) {
  return (
    <ModalConteiner>
      <Img src={props.src} onClick={props.onClick} />
      <p>Subtitle: {props.subtitle}</p>
      <p>author: {props.author}</p>
      <p>Date: {props.date}</p>
      <p>Tags: {props.tags}</p>
      <p>Collection: {props.collection}</p>
    </ModalConteiner>
  );
}
