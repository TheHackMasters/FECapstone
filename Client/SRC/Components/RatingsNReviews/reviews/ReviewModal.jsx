/*eslint-disable */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';


const ReviewModal = ({ modalIsOpen, setModalIsOpen }) => {

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? `translate(0%)` : `translate(-100%)`
  })

  return (
    <div>
      {modalIsOpen ?
        (
          <animated.div style={animation}>
            <ModalWrapper modalIsOpen={modalIsOpen}>
              <ModalContent>
                <h1>Add a Review?</h1>
                <form>
                  <h4>Review Summary (A short blurb summarizing your thoughts)
                  </h4>
                  <input>
                  </input>
                  <h4>Review itself (Shower us with your lovely words of praise or concern)
                  </h4>
                  <input>
                  </input>

                </form>
                <p>Adding a Review</p>
                <button>Submit Review</button>
              </ModalContent>
              <CloseModalButton aria-label='Close modal' onClick={() => setModalIsOpen(prev => !prev)} />
            </ModalWrapper>
          </animated.div>
        )
        : null}
    </div>
  )
}

export default ReviewModal;


const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(CancelIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;