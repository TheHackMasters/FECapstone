/*eslint-disable */
import React, {useState} from 'react';
import {ModalWrapper, ModalContent, CloseModalButton} from './styles/Modal.style.js';
import {useSpring, animated} from 'react-spring';
import {ModalInput} from './styles/ModalInput.style.js';

const Modal = ({modalIsOpen, setModalIsOpen}) => {

  const [modalInput, setModalInput] = useState('')

  const handleSubmit = (event) => {
    setModalInput(event.target.value)
  }

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
            <h2>Add a question?</h2>
            <ModalInput
              type='text'
              value={modalInput}
              onChange={handleSubmit}
            />
            <button>Submit question</button>
          </ModalContent>
          <CloseModalButton aria-label='Close modal' onClick={()=> setModalIsOpen(prev => !prev)} />
        </ModalWrapper>
        </animated.div>
        )
     : null}
    </div>
  )
}

export default Modal;

{/* <>
{modalIsOpen ? (
  <Background>
    <ModalWrapper modalIsOpen={modalIsOpen}>
      <ModalContent>
        <h1>Add a question?</h1>
        <p>Adding a question</p>
      </ModalContent>
      <CloseModalButton onClick={()=> setModalIsOpen(prev => !prev)} />
    </ModalWrapper>
  </Background>
) : null}
</> */}