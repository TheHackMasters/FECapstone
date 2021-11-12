/*eslint-disable */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';


const ComparisonModal = (props) => {

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.openModal ? 1 : 0,
    transform: props.openModal ? `translate(0%)` : `translate(-100%)`
  })

  const allFeatures = () => {
    var features = [];
    props.currProduct.features.forEach((item) => {
      if (!features.includes(item.feature)) {
        features.push(item.feature);
      }
    })
    props.compareProd.features.forEach((item) => {
      if (!features.includes(item.feature)) {
        features.push(item.feature);
      }
    })
    return features;
  }

  const checkFeature = (arr, currFeature) => {
    for (var n of arr) {
      if (n.feature === currFeature) {
        if (n.value === null) {
          return '✔';
        } else return n.value;
      }
    }
    return '✕'
  }

  return (
    <div>
      {props.openModal ?
        (
          <animated.div style={animation}>
            <ModalWrapper openModal={props.openModal}>
              <ModalHeader>Comparing Features
              </ModalHeader>
              <ModalProdHeader >
                <div>{props.currProduct.name}</div>
                <div>{props.compareProd.name}</div>
              </ModalProdHeader>
              <ModalContent>
                {allFeatures().map((feature) => {
                  return (<ModalLine>
                    <ModalText>{checkFeature(props.currProduct.features, feature)}</ModalText>
                    <ModalTextCenter>{feature}</ModalTextCenter>
                    <ModalTextRight>{checkFeature(props.compareProd.features, feature)}</ModalTextRight>
                  </ModalLine>
                  )
                })}
              </ModalContent>
              <CloseModalButton aria-label='Close modal' onClick={() => props.setOpenModal(prev => !prev)} />
            </ModalWrapper>
          </animated.div>
        )
        : null}
    </div>
  )
}

export default ComparisonModal;

const ModalHeader = styled.div`
color: grey;
padding: 48px 0px 8px 32px;
`;
const ModalProdHeader = styled.div`
display: flex;
justify-content: space-between;
margin-left: 32px;
margin-right:32px;
font-weight: bold;
font-size: 20px;
margin-bottom: 32px;
`;

const ModalWrapper = styled.div`
  width: 600px;
  min-height: 350px;
  max-height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  left: -870px;
  // margin: auto;

  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  line-height: 1.8;
  color: #141414;
  margin-bottom:  48px;
`;

const ModalText = styled.div`
  width: 110px;
`;

const ModalTextCenter = styled.div`
width: 110px;
text-align: center;
font-weight: 800;
`;

const ModalTextRight = styled.div`
width: 110px;
justify-content: flex-end;
text-align: right;
`;

const ModalLine = styled.div`
display: flex;
justify-content: space-between;
margin: 4px;
margin-left: 32px;
margin-right: 32px;
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