/*eslint-disable */

import React, {useState} from 'react';
import { postServer, validateEmail } from '../helpers/helpers.js';
import {
  AWarningText, ANameText, AEmailText, QModal, QModalContent, AModalHeader, AModalTitle,
  QuestionSub, AModalFooter, Warning, AModalBody, AText, AEmailBox, ANameBox, ALabel, ATextArea, QButton

} from './styles.js'


const QuestionModal = (props) => {
  const [qModalBody, setQModalBody] = useState('');
  const [qModalName, setQModalName] = useState('');
  const [qModalEmail, setQModalEmail] = useState('');

  const qModalBodyHandler = () => {
    setQModalBody(event.target.value);
  };

  const qModalNameHandler = () => {
    setQModalName(event.target.value);
  };

  const qModalEmailHandler = () => {
    setQModalEmail(event.target.value);
  };

  const submitQuestion = (body, name, email, id) => {

    postServer('/qa/questions', {
      body: body,
      name: name,
      email: email,
      product_id: id
    })
      .then(() => props.setNewQuestion(JSON.stringify({
        body: body,
        name: name,
        email: email,
        product_id: id
      })))
      .then(() => props.onClose());

  };

  if (!props.show) {
    return null;
  }
  var qWarning;
  var nWarning;
  var eWarning;

  if (qModalBody.length > 0) {
    qWarning = null;
  } else {
    qWarning = <AWarningText>Please ask a question</AWarningText>;
  }

  if (qModalName.length > 0) {
    nWarning = null;
  } else {
    nWarning = <ANameText>Please enter your nickname</ANameText>;
  }


  if (validateEmail(qModalEmail)) {
    eWarning = null;
  } else {
    eWarning = <AEmailText>Please enter a valid email</AEmailText>;
  }

  return (
    <QModal onClick={props.onClose}>
      <QModalContent onClick={e => e.stopPropagation()}>
        <AModalHeader>
          <AModalTitle>Ask Your Question about the... </AModalTitle>
          <QuestionSub> {props.name}</QuestionSub>
        </AModalHeader>
        <AModalBody>
          <AText>
            <ALabel>
              * Your Question:
            </ALabel>
            <ATextArea type="text" maxLength={1000} onChange={qModalBodyHandler}></ATextArea>
          </AText>
          <AText>
            <ALabel>
              * What is your nickname?
              <ANameBox
                maxLength={60}
                onChange={qModalNameHandler}
                type="text"
                placeholder="Example: jackson11!">
              </ANameBox>
            </ALabel>
            <Warning>
              For privacy reasons, do not use your full name or email address
            </Warning>
          </AText>
          <div>
            <ALabel>
              * Your email:
              <AEmailBox
                maxLength={60}
                onChange={qModalEmailHandler}
                type="text"
                placeholder="Why did you like the product or not?">
              </AEmailBox>
            </ALabel>
            <Warning>
                For authentication reasons you will not be emailed
            </Warning>
            <Warning>* Indicates a required field</Warning>
          </div>
        </AModalBody>
        <AModalFooter>
          <QButton
            onClick={() => submitQuestion(qModalBody, qModalName, qModalEmail, props.productId)}
          >
          Submit
          </QButton>
          {qWarning} {nWarning} {eWarning}
        </AModalFooter>
      </QModalContent>
    </QModal>
  );
};

export default QuestionModal;