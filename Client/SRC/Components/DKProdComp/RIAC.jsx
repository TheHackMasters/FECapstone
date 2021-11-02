import React, { useState } from 'react';
import Card from './Card.jsx';
import AddToOutfits from './AddToOutfits.jsx';
import EmptyOutfit from './EmptyOutfit.jsx';

function RIAC() {
  //recieve current item from props
  //recieve outfitlist from props or from db
  const [idxRecc, setIdxRecc] = useState(0);
  const [idxOutfit, setIdxOutfit] = useState(0);
  const [currProduct, setCurrProduct] = useState({
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee',
    price: '$32',
  });

  const [reccData, setReccData] = useState([{
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee',
    price: '$32',
  }, {
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'Lightweight Tether-Resist Bomber',
    price: '$64',
  }, {
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee',
    price: '$32',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'Lightweight Weather-Resist Bomber',
    price: '$64',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee',
    price: '$32',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    imgAlt: './',
    category: 'JEANS',
    name: 'Hol-B Jeans',
    price: '$98',
  }]);

  const [outfitList, setOutfitList] = useState([{
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'Lightweight Weather-Resist Bomber',
    price: '$64',
  }, {
    imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    imgAlt: './',
    category: 'JEANS',
    name: 'Hol-B Jeans',
    price: '$98',
  }]);

  //STYLES ----------------------------------------------------------
  const leftArrow ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesrDH4a-wiZIORdQTA2BC93Uj_WHCBf0gB9eKJnCjhHmsMw9dhkWM7p2KRLnzSlqBHrg&usqp=CAU';

  const rightArrow ='https://freepngimg.com/thumb/web_design/24703-6-right-arrow-image.png';

  const setMiddle = {
    margin: "auto",
    width: "65%",
  };

  const carouselStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const title1 = {
    fontWeight: "light",
    size: "24px",
    color: "grey",
    padding: "32px 0px 8px 0px",
    marginLeft: "75px",
  };

  const arrowLeftStyle = {
    width: "55px",
    height: "55px",
    objectFit: "cover",
    margin: "auto",
    marginRight: "25px",
  };

  const arrowRightStyle = {
    width: "55px",
    height: "55px",
    objectFit: "cover",
    margin: "auto",
    marginLeft: "5px",
  };

  let numTime = 0;

  let outfits = [];
  for (var n = idxOutfit; n < idxOutfit + 3; n++) {
    if (outfitList[n] === undefined) {
      outfits.push(<EmptyOutfit/>)
    } else {
      outfits.push(<Card key={outfitList[n].key} product={outfitList[n]} isRecc={false}/>)
    }
  }
  return (

    <div style={setMiddle}>
      <div className="recommended">
        <div style={title1}>RECOMMENDED</div>
        <div style={carouselStyle}>
          <img style={arrowLeftStyle} src={leftArrow} />

          {reccData.slice(idxRecc, idxRecc+4).map(reccProduct => (
            <Card product={reccProduct} isRecc={true}/>
          ))}
          <img style={arrowRightStyle} src={rightArrow} />
        </div>
      </div>
      <div className="outfits">
        <div style={title1}>OUTFITS</div>
        <div style={carouselStyle}>
          <img style={arrowLeftStyle} src={leftArrow} />
          <AddToOutfits
            currProduct={currProduct}
            outfitList={outfitList}
          />
          {outfits}
          <img style={arrowRightStyle} src={rightArrow} />
        </div>
      </div>
    </div>
  );
}

export default RIAC;
