/*eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import { postServer, validateEmail } from '../helpers/helpers.js';
import {AButton, ATextArea, Warning, AModalSubtitle, QModal, QModalContent, AModalHeader, AEmailText,
  ANameText, AWarningText, AModalTitle, AModalBody, ALabel, AText, ANameBox, AEmailBox, AModalFooter
} from './styles.js';


const AnswerModal = (props) => {
  const [aModalBody, setAModalBody] = useState('');
  const [aModalName, setAModalName] = useState('');
  const [aModalEmail, setAModalEmail] = useState('');

  const aModalBodyHandler = () => {
    setAModalBody(event.target.value);
  };

  const aModalNameHandler = () => {
    setAModalName(event.target.value);
  };

  const aModalEmailHandler = () => {
    setAModalEmail(event.target.value);
  };

  const submitAnswer = (body, name, email, id) => {

    postServer(`/qa/questions/${id}/answers`, {
      body: body,
      name: name,
      email: email
    })
      .then(() => props.setNewAnswer(JSON.stringify({
        body: body,
        name: name,
        email: email
      })))
      .then(() => props.onClose());

  };

  if (!props.show) {
    return null;
  }

  return (
    <QModal onClick={props.onClose}>
      <QModalContent onClick={e => e.stopPropagation()}>
        <AModalHeader>
          <AModalTitle>Submit Your Answer:</AModalTitle>
          <AModalSubtitle>{props.name}: {props.question}</AModalSubtitle>
        </AModalHeader>
        <AModalBody>
          <AText>
            <ALabel>
              *Your Answer:
            </ALabel>
            <ATextArea maxLength={1000} onChange={aModalBodyHandler}></ATextArea>
          </AText>
          <div className="a-name">
            <ALabel>
              *What is your name?
              <ANameBox
                maxLength={60} onChange={aModalNameHandler}
                type="text"
                placeholder="Example: jack543!">
              </ANameBox>
            </ALabel>
            <Warning>
            </Warning>
          </div>
          <div>
            <ALabel>
              *Your email:
              <AEmailBox
                maxLength={60} onChange={aModalEmailHandler}
                type="text"
                placeholder="Example: jack@email.com">
              </AEmailBox>
              <Warning>
              </Warning>
            </ALabel>
          </div>
        </AModalBody>
        <AModalFooter>
          <div>
          </div>
          <AButton
            onClick={() => submitAnswer(aModalBody, aModalName, aModalEmail, props.qId)}>
              Submit
          </AButton>
        </AModalFooter>
      </QModalContent>
    </QModal>
  );
};

export default AnswerModal;