import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import AddToOutfitsCard from './AddToOutfitsCard.jsx';
import EmptyOutfit from './EmptyOutfit.jsx';

function RIAC() {
  let [idxRecc, setIdxRecc] = useState(0);
  let [idxOutfit, setIdxOutfit] = useState(0);


  const [currProduct, setCurrProduct] = useState({
    imageSrc:
      'https://images.unsplash.com/photo-1572495673508-62a6b369c380?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    imgAlt: './',
    category: 'JACKETS',
    name: 'LOCATION FOUND Hoodie - FIRST',
    price: '$92',
    id: 111,
  });
  const [reccList, setReccList] = useState([
    {
      imageSrc:
        'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
      imgAlt: './',
      category: 'TEES',
      name: 'LSKD.CO Collab Tee - FIRST',
      price: '$32',
      id: 1,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
      imgAlt: './',
      category: 'JACKETS',
      name: 'Lightweight Tether-Resist Bomber - SECOND',
      price: '$64',
      id: 2,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
      imgAlt: './',
      category: 'TEES',
      name: 'LSKD.CO Collab Tee - Third',
      price: '$32',
      id: 3,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1552337557-45792b252a2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      imgAlt: './',
      category: 'TEES',
      name: 'Deep-Dive, Reflective Sunglasses - FOURTH',
      price: '$52',
      id: 4,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      imgAlt: './',
      category: 'JACKETS',
      name: 'Lightweight Tether-Resist Bomber - LAST',
      price: '$64',
      id: 5,
    },
  ]); // relatedData
  const [outfitList, setOutfitList] = useState([
    {
      imageSrc:
        'https://images.unsplash.com/photo-1552337557-45792b252a2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      imgAlt: './',
      category: 'TEES',
      name: 'Reflective Sunglasses - FIRST',
      price: '$32',
      id: 11,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
      imgAlt: './',
      category: 'JACKETS',
      name: 'Lightweight Tether-Resist Bomber - SECOND',
      price: '$64',
      id: 12,
    },
  ]);

  let [addedCurrentOutfit, setAddedCurrentOutfit] = useState(() => {
    let isIncluded = false;
    outfitList.forEach((item) => {
      if (currProduct.id === item.id) {
        isIncluded = true;
      }
    });
    return isIncluded;
  });

  const clickX = (product) => {
    let idx = -1;
    console.log('clicked ', product);
    for (let n = 0; n < outfitList.length; n++) {
      if (product.id === outfitList[n].id) {
        idx = n;
      }
    }
    if (idx > -1) {
      console.log('removing from idx: ', idx);
      console.log('idxOutfit is :', idxOutfit);
      setOutfitList([...outfitList.slice(0, idx), ...outfitList.slice(idx + 1, outfitList.length)]);
      if (idxOutfit > idx) {
        setIdxOutfit(idxOutfit - 1);
      }
      // setOutfitList(outfitList.filter((item) => item !== undefined));
    }
  };

  const clickStar = (product) => {
    //console.log('clicked star', product);
    //console.log('product id, ', product.id);
    let notAlready = true;
    outfitList.forEach((item) => {
      //console.log('item id', item.id);
      if (item.id === product.id) {
        notAlready = false;
      }
    });
    if (notAlready) {
      setOutfitList([product, ...outfitList]);
      if (idxOutfit > 0) {
        setIdxOutfit(idxOutfit - 1);
      }
    }
  };
// (outfitList.length < 3 ? 3 : outfitList.length)
  const outfits = [];
  for (let n = idxOutfit; n < 3; n++) {
    if (outfitList[n] === undefined) {
      outfits.push(<EmptyOutfit />);
    } else {
      outfits.push(
        <Card
          key={outfitList[n].id}
          products={outfitList[n]}
          isRecc={false}
          clickX={clickX}
          clickStar={clickStar}
        />,
      );
    }
  }

  const nextSlideRecc = () => {
    setIdxRecc(idxRecc + 3 === reccList.length - 1 ? idxRecc : idxRecc + 1);
  };

  const nextSlideOutfit = () => {
    setIdxOutfit(idxOutfit + 2 >= outfitList.length - 1 ? idxOutfit : idxOutfit + 1);
  };

  const prevSlideRecc = () => {
    setIdxRecc(idxRecc === 0 ? 0 : idxRecc - 1);
  };

  const prevSlideOutfit = () => {
    setIdxOutfit(idxOutfit === 0 ? 0 : idxOutfit - 1);
  };

  const leftArrow =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesrDH4a-wiZIORdQTA2BC93Uj_WHCBf0gB9eKJnCjhHmsMw9dhkWM7p2KRLnzSlqBHrg&usqp=CAU';

  const rightArrow =
    'https://freepngimg.com/thumb/web_design/24703-6-right-arrow-image.png';

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

  const arrowButtonStyle = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  };

  const spacer = {
    width: '50px',
    padding: '48px',
  };

  return (
    <div style={setMiddle}>
      <div className="recommended">
        <div style={title1}>RECOMMENDED</div>
        <div style={carouselStyle}>
        {idxRecc === 0 ? <div style={spacer}></div> :
          <button style={arrowButtonStyle}><img
          style={arrowLeftStyle}
          alt="left arrow"
          src={leftArrow}
          onClick={prevSlideRecc}
          /></button>
        }
          {reccList.slice(idxRecc, idxRecc + 4).map((reccProduct) => (
            <Card
              key={reccProduct.id}
              products={reccProduct}
              isRecc={true}
              clickX={clickX}
              clickStar={clickStar}
            />
          ))}
          {idxRecc === reccList.length - 4 ? <div style={spacer} />
            : <button style={arrowButtonStyle}><img
              style={arrowRightStyle}
              alt="right arrow"
              src={rightArrow}
              onClick={nextSlideRecc}
          /></button>
          }
        </div>
      </div>
      <div className="outfits">
        <div style={title1}>OUTFITS</div>
        <div style={carouselStyle}>
        {idxOutfit === 0 ? <div style={spacer}/> :
        <button style={arrowButtonStyle}><img
            style={arrowLeftStyle}
            alt="left arrow"
            src={leftArrow}
            onClick={prevSlideOutfit}
          /></button>
        }
          {addedCurrentOutfit ? <Card
              key={reccProduct.id}
              products={reccProduct}
              isRecc={true}
              clickX={clickX}
              clickStar={clickStar}
            /> :
          <AddToOutfitsCard
          currProduct={currProduct}
          clickStar={clickStar}
          />}
          {outfits}
          {idxOutfit >= outfitList.length - 3 ? <div style={spacer} /> :
          <button style={arrowButtonStyle}><img
            style={arrowRightStyle}
            alt="right arrow"
            src={rightArrow}
            onClick={nextSlideOutfit}
          /></button>
          }
        </div>
      </div>
    </div>
  );
}

export default RIAC;
