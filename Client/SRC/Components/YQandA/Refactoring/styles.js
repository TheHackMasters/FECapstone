/*eslint-disable */

import styled from 'styled-components';

const Question =styled.div`
  clear: both;
  display: grid;
  grid-template-columns: 15% 20% auto 15%;
  grid-template-rows: 60px auto 52px;
`

const ListButton =styled.button`
  margin-left: 150px;
  margin-top: -50px;
`

// const.add-question {
//   grid-column: 2;
//   grid-row: 2;
//   margin-top: 6px;
// }

const QTitle=styled.div`
  margin-top: 25px;
  font-size: 20px;
  grid-column: 2;
`

const QContainer=styled.div`
  display: grid;
  grid-template-rows: auto 21px;
  justify-self: center;
  grid-column: 2/4;
  width: 100%;
  grid-row: 2/3;
`

const QListGrid=styled.div`
  margin-top: 25px;
  font-size: 25px;
  grid-column: 2;
`
const QAListGrid=styled.div`
  grid-row: 2;
  grid-column: 2/3;
`
const QAListD = styled.div`
  overflow-y: auto;
  max-height: 65vh;
  width: 100%;
  grid-row: 2;
  grid-column: 2/3;
`

// ::-webkit-scrollbar {
//   display: none;
// }

// cons
// .emptyDiv {
//   height: 50px;
// }

const QModal =styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
`

const QModalContent =styled.div`
  display: grid;
  height: 70%;
  width: 40%;
  background-color:rgb(195, 214, 241);
  box-shadow: 10px 25px 50px 10px rgba(71, 71, 70, 0.424), 0 12px 25px 0 rgba(0, 0, 0, 0.19);
  justify-content: center;
  border-style: unset;
  overflow-y: auto;
  overflow-x:inherit;
  grid-template-rows: 25% 60% 15%;
  border-radius: 10%;
  z-index: 1000;
`

// .nameText {
//   grid-column: 2;
//   margin-left: 15px;
//   grid-row: 2;
//   color: red;
//   font-style: italic;
// }

// .emailText {
//   grid-column: 2;
//   margin-left: 15px;
//   grid-row: 3;
//   color: red;
//   font-style: italic;
// }

// .qWarningText {
//   margin-left: 15px;
//   grid-row: 1;
//   grid-column: 2;
//   color: red;
//   font-style: italic;
// }

const Warning =styled.div`
  font-size: small;
  font-style: italic;
  margin-top: 1%;
`

// label {
//   font-size: 20px;
//   margin-top: -10px;
// }

// .email-text-box {
//   width: 230px;
//   margin-left: 15px;
// }

const SearchGrid =styled.div`
  display:grid;
  grid-template-rows: 17% auto;
  grid-template-columns: 10% auto 10%;
  grid-column: 1/4;
  grid-row: 1/3;
  margin-bottom: 10px;
`

const SearchTextBox =styled.input`
  justify-self: center;
  font-size: 25px;
  height: 50px;
  width: 90%;
  grid-column: 2/3;
`

// .question-form {
//   height: 100%;
//   display: grid;
//   grid-template-rows: 50% 25% 25%;
// }

// .question-grid {
//   display: grid;
//   grid-template-rows: 20% auto;
//   grid-template-columns: 187px 280px;
// }


// .q-label {
//   margin-top: 64px;
//   grid-row: 1;
//   font-size: 18px;
// }

// .modal-text-box {
//   height: 50%;
//   width: 177px;
//   grid-row: 1/3;
//   resize: none;
//   margin-top: 30px;
// }

const QButton =styled.button`
  border-style: solid;
  background-color: rgb(139, 192, 241);
  height: 50px;
  width: 150px;
  font-weight: 600;
  border-width: thin;
  border-color: rgb(0, 0, 0);
  cursor: pointer;
  color:black;

  &:hover {
    opacity: 0.7;
    transform: scale(0.98)
  }
`

const Link = styled.span`
  text-decoration:underline;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`

const QEntry = styled.div`
  display: grid;
  border-top: blanchedalmond;
  border-left: blanchedalmond;
  border-right: blanchedalmond;
  border-bottom: 4px rgb(148, 182, 245, 0.5);
  border-style: solid;
  padding-bottom: 10px;
  padding-top: 10px;
  grid-template-columns: 5% auto;
`

// .aEntry {
//   display: grid;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   grid-template-columns: 5% auto;
//   grid-template-rows: 70% 30%;
//   border: 1px solid rgb(148, 182, 245, 0.5);
//   border-top: blanchedalmond;
//   border-left: blanchedalmond;
//   border-right: blanchedalmond;
// }

const QLetter = styled.span`
  font-size: 25px;
`

const QText = styled.span`
  margin-top: 4px;
  margin-left: 10px;
  font-size: 20px;
`

const SellerSig =styled.div`
  font-size: 15px ;
  justify-self: end;
  margin-right: 5px;
  grid-row: 2;
  grid-column: 2;
`

const MoreAnswers =styled.div`
  font-size: large;
  cursor: pointer;
  background-color: rgb(148, 182, 245, 0.5);
`

const AnswerList =styled.div`
  overflow-y: auto;
  max-height: 35vh;
`

const AModalTitle =styled.h2`
  justify-self: center;
  grid-row: 1;
`

// .a-modal-subtitle {
//   margin-top: 25px;
//   justify-self: center;
// }

const AModalHeader =styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  height: 60%;
`

const AModalBody =styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 33% 33% 33%;;
`
const AText =styled.div`
  display: grid;
  grid-template-columns: 35% auto 30%;
  grid-template-rows: 30% 40% auto;
`

const ATextArea = styled.textarea`
  height: 50px;
  resize: none;
`

const ALabel = styled.label`
  font-size: large;
  margin-top: 20px;
`

const ANameBox =styled.input`
  margin-left: 23px;
`

const AEmailBox =styled.input`
  margin-left: 15px;
  width: 250px;
`

const AModalFooter =styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 33% 33% 33%;
`

const AButton=styled.button`
  grid-column: 1;
  grid-row: 1;
  border-style: solid;
  background-color: rgb(139, 192, 241);
  height: 50px;
  width: 150px;
  font-weight: 600;
  border-width: thin;
  border-color: rgb(0, 0, 0);
  cursor: pointer;
  color: black;

  &:hover {
   background-color: rgb(34, 117, 212);
  }
`

const AWarningText =styled.span`
  grid-column: 2;
  grid-row: 1;
  margin-left: 55px;
  color: red;
  font-style: italic;
`
const ANameText =styled.span`
  grid-column: 2;
  grid-row: 2;
  margin-left: 55px;
  color: red;
`
const AEmailText =styled.span`
  grid-column: 2;
  grid-row: 3;
  margin-left: 55px;
  color: red;
  font-style: italic;
`

const QuestionSub = styled.h4`
  justify-self: center;
  margin-top: 25px;
  font-style: italic;
`

const EmptyListButton =styled.div`
  margin-top: 40px;
  margin-left: 48px
`

/* .empty-list-button {
  margin-top: 40px;
  margin-left: 48px
} */

const Highlight = styled.span`
  background-color: yellow;
`

export {
  Question,
  ListButton,
  QTitle,
  QContainer,
  QButton,
  SearchGrid,
  SearchTextBox,
  AWarningText,
  ANameText,
  AEmailText,
  QModal,
  QModalContent,
  AModalHeader,
  AModalTitle,
  QuestionSub,
  AModalFooter,
  Warning,
  AModalBody,
  AText,
  AEmailBox,
  ANameBox,
  ALabel,
  ATextArea,
  MoreAnswers,
  Highlight,
  QEntry,
  Link,
  SellerSig,
  QText,
  QLetter,
  QAListGrid,
  QAListD,
  EmptyListButton,
  AnswerList,
  AButton
};