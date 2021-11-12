import React from 'react';
import styled from 'styled-components';

function AddToOutfitsCard(props) {
  const greyPlus = 'https://images.squarespace-cdn.com/content/v1/56e19ec5e3214084d69d4b7d/1473524254173-BGV5W2Z5FM46F67SYZHJ/PlusIcon_Small_Gray.png';

  const imageStyle = {
    display: 'flex',
    width: '135px',
    height: '125px',
    objectFit: 'cover',
    margin: 'auto',
  };

  return (
    <CardStyle
      onClick={() => props.clickAddToOutfits(props.currProduct, props.style)}
    >
      <CardImgStyle>
        <img style={imageStyle} src={greyPlus} alt="grey plus" />
      </CardImgStyle>
      <CardInfo>
        <CardT2>Add to your outfits</CardT2>
      </CardInfo>
    </CardStyle>
  );
}

export default AddToOutfitsCard;

const CardT2 = styled.div`
  text-align: center;
  color: grey;
  font-size: 1em;
  font-weight: bold;
  padding-top: .1em;
`;

const CardStyle = styled.div`
  border: 2px solid #D3D3D3;
  width: 14.6em;
  height: 21.8em;
  margin-right: 1em;
  margin-left: 1em;
  background-color: white;
  `;

const CardImgStyle = styled.div`
  width: 235px;
  height: 235px;
  object-fit: cover;
  margin-top: 80px;
`;

const CardInfo = styled.div`
  padding: 8px 8px 8px 8px;
`;
