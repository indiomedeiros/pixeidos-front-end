import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import styled from "styled-components";

export const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };
  
  export const ImageModal = styled.img`
    max-width: 60vw;
    max-height: 70vh;
    width: 100%;
    margin-bottom: -5px;
  `;
  export const DivConainer = styled.div`
    display: block;
  `;
  
  export const DivPropeties = styled.div`
    padding: 5px 20px;
    background-color: white;
    font-family: open sans;
  `;
  export const P = styled.p`
    font-size: 1.2em;
  `;
  export const ModalStyled = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
  `;