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


const QTitle=styled.div`
  margin-top: 25px;
  font-size: 20px;
  color: grey;
  font-size: 25px;
  width: 100%;
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
  font-size: 25px;
  /* grid-column: 2; */
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
  position: absolute;
  width: 60%;
  color: black;
  background-color:rgb(184,184,184);
  left: 10%;
  right: 20%;
  top: 15%;
  padding: 20px;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
`

const Warning =styled.div`
  font-size: small;
  font-style: italic;
  margin-top: 1%;
`

const SearchGrid =styled.div`
  display:grid;
  grid-template-rows: 25% auto;
  grid-template-columns: 5% auto 5%;
  grid-column: 1/2;
  grid-row: 1/2;
  margin-bottom: 10px;
`

const SearchTextBox =styled.input`
  justify-self: center;
  margin-bottom: 30px;
  font-size: 20px;
  height: 40px;
  width: 90%;
  grid-column: 2/3;
`

const QButton =styled.button`
  border-style: solid;
  grid-column: 1/3;
  justify-self: center;
  background-color: #f5f5f5;
  height: 40px;
  width: 170px;
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
  /* border-top: blanchedalmond;
  border-left: blanchedalmond;
  border-right: blanchedalmond;
  border-bottom: 1px black; */
  border: solid 1px black;
  /* border-style: solid; */
  padding-bottom: 8px;
  padding-top: 7px;
  padding-left: 10px;
  grid-template-columns: 5% auto;
`

const QLetter = styled.span`
  font-size: 20px;
`

const QText = styled.span`
  margin-top: 2px;
  margin-left: 5px;
  font-size: 18px;
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
  color:black;
`

const AModalSubtitle =styled.h4`
  margin-top: 25px;
  justify-self: center;
`

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
  height: 20px;
  resize: none;
`

const ALabel = styled.label`
  font-size: large;
  margin-top: 20px;
`

const ANameBox =styled.input`
  grid-column: 3/3;
  justify-self: center;
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
  border-style: solid;
  grid-column: 1/3;
  justify-self: center;
  background-color: #f5f5f5;
  height: 40px;
  width: 150px;
  margin-bottom: 10px
  border-width: thin;
  border-color: rgb(0, 0, 0);
  cursor: pointer;
  color:black;
  &:hover {
    opacity: 0.7;
    transform: scale(0.98)
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
  AButton,
  AModalSubtitle,
};