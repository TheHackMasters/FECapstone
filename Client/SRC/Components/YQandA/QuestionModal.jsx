/*eslint-disable */
import React, {useState} from 'react';
import {ModalWrapper, ModalContent, CloseModalButton} from './styles/Modal.style.js';
import {useSpring, animated} from 'react-spring';
import {ModalInput} from './styles/ModalInput.style.js';

const ModalQuestion = ({qModalIsOpen, setQModalIsOpen}) => {

  const [modalQInput, setModalQInput] = useState('')

  const handleSubmit = (event) => {
    setModalQInput(event.target.value)
  }

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: qModalIsOpen ? 1 : 0,
    transform: qModalIsOpen ? `translate(0%)` : `translate(-100%)`
  })

  return (
    <div>
     {qModalIsOpen ?
        (
        <animated.div style={animation}>
        <ModalWrapper qModalIsOpen={qModalIsOpen}>
          <ModalContent>
            <h2>Add a question?</h2>
            <ModalInput
              type='text'
              value={modalQInput}
              onChange={handleSubmit}
            />
            <button>Submit question</button>
          </ModalContent>
          <CloseModalButton aria-label='Close modal' onClick={()=> setQModalIsOpen(prev => !prev)} />
        </ModalWrapper>
        </animated.div>
        )
     : null}
    </div>
  )
}

export default ModalQuestion;
