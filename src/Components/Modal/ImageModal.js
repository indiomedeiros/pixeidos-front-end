import styled from "styled-components";

export const ModalConteiner = styled.div`
  background-color: white;
  margin: auto;
  position: absolute;
`;
export const Img = styled.img`
  width: 100%;
`;

export default function ImageModal(props) {
  return (
    <ModalConteiner>
      <Img src={props.src} onClick={props.onClick} />
      <p>{props.subtitle}</p>
      <p>{props.author}</p>
      <p>{props.date}</p>
      <p>{props.tags}</p>
      <p>{props.collection}</p>
    </ModalConteiner>
  );
}
