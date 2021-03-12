import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import {
  DivConainer,
  DivPropeties,
  Fade,
  ImageModal,
  ModalStyled,
  P,
} from "./styled";

export default function SpringModal(props) {
  return (
    <div>
      <ModalStyled
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <DivConainer>
            <ImageModal src={props.src} />
            <DivPropeties>
              <P>
                <strong>Subtitle: </strong>
                {props.subtitle}
              </P>
              <P>
                <strong>Author: </strong>
                {props.author}
              </P>
              <P>
                <strong>Yaer: </strong>
                {props.date}
              </P>
              <P>
                <strong>Tags: </strong>
                {props.tags}
              </P>

              <P>
                <strong>Collection:</strong> {props.collection}
              </P>
            </DivPropeties>
          </DivConainer>
        </Fade>
      </ModalStyled>
    </div>
  );
}


