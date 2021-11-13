import styled from 'styled-components';

const SetMiddle = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-width: 30em;
`;

const CarouselStyle = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
`;

// const Title1 = styled.div`
//   font-weight: light;
//   size: 24px;
//   color: grey;
//   padding: 32px 0px 8px 0px;
//   margin-left: 100px;
// `;

const Spacer = styled.div`
  width: 1.7em;
  padding: 1.7em;
`;

const ComponentSpace = styled.div`
  height: 4em;
`;

const HeaderCarousel = styled.div`
  justify-content: start;
  font-weight: 300;
  font-size: 20px;
  color: grey;
  padding: 2em 0em 0em 0em;
  margin-left: 100px;
  margin-bottom: 1em;
`;

export { SetMiddle, CarouselStyle, Spacer, ComponentSpace, HeaderCarousel };
