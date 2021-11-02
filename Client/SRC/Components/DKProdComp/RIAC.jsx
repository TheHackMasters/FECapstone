import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import AddToOutfits from './AddToOutfits.jsx';
import EmptyOutfit from './EmptyOutfit.jsx';

function RIAC() {
  let [idxRecc, setIdxRecc] = useState(0);
  let [idxOutfit, setIdxOutfit] = useState(0);

  const [currProduct, setCurrProduct] = useState({
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee',
    price: '$32',
  });
  const [reccList, setReccList] = useState([{
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'FIRST',
    price: '$32',
  }, {
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'SECOND',
    price: '$64',
  }, {
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'THIRD',
    price: '$32',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'FOURTH',
    price: '$64',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'FIFTH',
    price: '$32',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    imgAlt: './',
    category: 'JEANS',
    name: 'LAST',
    price: '$98',
  }]);
  const [outfitList, setOutfitList] = useState([{
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee - FIRST',
    price: '$32',
  }, {
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'Lightweight Tether-Resist Bomber - SECOND',
    price: '$64',
  }, {
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee -  THIRD',
    price: '$32',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'Lightweight Weather-Resist Bomber - FOURTH',
    price: '$64',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
    imgAlt: './',
    category: 'TEES',
    name: 'LSKD.CO Collab Tee - FIFTH',
    price: '$32',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    imgAlt: './',
    category: 'JEANS',
    name: 'Hol-B Jeans - LAST',
    price: '$98',
  }]);

  let [displayRecc, setDisplayRecc] = useState(Array(4));
  let [displayOutfit, setDisplayOutfit] = useState(Array(3));

  useEffect(() => {
    setDisplayRecc(reccList.slice(idxRecc, idxRecc + 4));
    console.log(displayRecc);
  }, [idxRecc]);

  useEffect(() => {
    setDisplayOutfit(outfitList.slice(idxOutfit, idxOutfit + 3));
  }, [idxOutfit]);

  const nextSlideRecc = () => {
    setIdxRecc(idxRecc + 3 === reccList.length - 1 ? 0 : idxRecc + 1);
  };

  const nextSlideOutfit = () => {
    setIdxOutfit(idxOutfit + 2 === outfitList.length - 1 ? 0 : idxOutfit + 1);
  };

  const prevSlideRecc = () => {
    setIdxRecc(idxRecc === 0 ? 0 : idxRecc - 1);
  };

  const prevSlideOutfit = () => {
    setIdxOutfit(idxOutfit === 0 ? 0 : idxOutfit - 1);
  };

  const leftArrow = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesrDH4a-wiZIORdQTA2BC93Uj_WHCBf0gB9eKJnCjhHmsMw9dhkWM7p2KRLnzSlqBHrg&usqp=CAU';

  const rightArrow = 'https://freepngimg.com/thumb/web_design/24703-6-right-arrow-image.png';

  const setMiddle = {
    margin: 'auto',
    width: '65%',
  };

  const carouselStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const title1 = {
    fontWeight: 'light',
    size: '24px',
    color: 'grey',
    padding: '32px 0px 8px 0px',
    marginLeft: '75px',
  };

  const arrowLeftStyle = {
    width: '55px',
    height: '55px',
    objectFit: 'cover',
    margin: 'auto',
    marginRight: '25px',
  };

  const arrowRightStyle = {
    width: '55px',
    height: '55px',
    objectFit: 'cover',
    margin: 'auto',
    marginLeft: '5px',
  };

  const outfits = [];
  for (let n = idxOutfit; n < idxOutfit + 3; n ++) {
    if (outfitList[n] === undefined) {
      outfits.push(<EmptyOutfit />);
    } else {
      outfits.push(<Card key={outfitList[n].key} product={outfitList[n]} isRecc={false} />);
    }
  }

  return (
    <div style={setMiddle}>
      <div className="recommended">
        <div style={title1}>RECOMMENDED</div>
        <div style={carouselStyle}>
          <img style={arrowLeftStyle} alt='left arrow' src={leftArrow} onClick={prevSlideRecc} />

          {displayRecc.map((reccProduct) => {
            return (
              <Card product={reccProduct} isRecc={true}/>
            )
          })}
          {/* {reccList.slice(idxRecc, idxRecc+4).map(reccProduct => (
            <Card product={reccProduct} isRecc={true}/>
          ))} */}
          <img style={arrowRightStyle} alt='right arrow' src={rightArrow} onClick={nextSlideRecc}/>
        </div>
      </div>
      <div className="outfits">
        <div style={title1}>OUTFITS</div>
        <div style={carouselStyle}>
          <img style={arrowLeftStyle} alt src={leftArrow} onClick={prevSlideOutfit}/>
          <AddToOutfits
            currProduct={currProduct}
            outfitList={outfitList}
          />
          {outfits}
          <img style={arrowRightStyle} src={rightArrow} onClick={nextSlideOutfit}/>
        </div>
      </div>
    </div>
  );
}

export default RIAC;
