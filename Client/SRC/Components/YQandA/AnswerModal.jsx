/*eslint-disable */
import React, {useState} from 'react';
import {ModalWrapper, ModalContent, CloseModalButton} from './styles/Modal.style.js';
import {useSpring, animated} from 'react-spring';
import {ModalInput} from './styles/ModalInput.style.js';

const ModalAnswer = ({aModalIsOpen, setAModalIsOpen}) => {

  const [modalAInput, setModalAInput] = useState('')

  const handleSubmit = (event) => {
    setModalAInput(event.target.value)
  }

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: aModalIsOpen ? 1 : 0,
    transform: aModalIsOpen ? `translate(0%)` : `translate(-100%)`
  })

  return (
    <div>
     {aModalIsOpen ?
        (
        <animated.div style={animation}>
        <ModalWrapper aModalIsOpen={aModalIsOpen}>
          <ModalContent>
            <h2>Add a Answer?</h2>
            <ModalInput
              type='text'
              value={modalAInput}
              onChange={handleSubmit}
            />
            <button>Submit Answer</button>
          </ModalContent>
          <CloseModalButton aria-label='Close modal' onClick={()=> setAModalIsOpen(prev => !prev)} />
        </ModalWrapper>
        </animated.div>
        )
     : null}
    </div>
  )
}

export default ModalAnswer;
