import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card.jsx';
import AddToOutfitsCard from './AddToOutfitsCard.jsx';
import EmptyOutfit from './EmptyOutfit.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';

function RIAC(props) {
  const [idxRecc, setIdxRecc] = useState(0);
  const [idxOutfit, setIdxOutfit] = useState(0);

  const [currProduct, setCurrProduct] = useState(props.overviewData);
  const [currProductStyle, setCurrProductStyle] = useState(props.overviewStyles)
  const [reccList, setReccList] = useState(props.relatedData);
  const [reccListStyles, setReccListStyles] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  const [preMount, setPreMount] = useState({ product_id: -1 });

  useEffect(() => {
    setCurrProduct(props.overviewData);
    setReccList(props.relatedData);
    setReccListStyles(props.relatedStyles);
    setCurrProductStyle(props.overviewStyles);
  }, [props]);

  // console.log(reccList);
  // console.log('recclistStyles', reccListStyles);

  const [addedCurrentOutfit, setAddedCurrentOutfit] = useState(() => {
    let isIncluded = false;
    outfitList.forEach((item) => {
      if (currProduct.id === item.id) {
        isIncluded = true;
      }
    });
    return isIncluded;
  });

  const selectStyle = (id) => {
    //console.log('currProductStyleID', currProductStyle);
    if (id === Number(currProductStyle.product_id)) {
      return currProductStyle;
    }
    return reccListStyles.reduce((selected, item) => {
      if (Number(item.product_id) === id) {
        selected = item;
      }
      return selected;
    });
  };

  const clickX = (product) => {
    let idx = -1;
    //console.log('clicked ', product);
    for (let n = 0; n < outfitList.length; n++) {
      if (product.id === outfitList[n].id) {
        idx = n;
      }
    }
    if (idx > -1) {
      //console.log('removing from idx: ', idx);
      //console.log('idxOutfit is :', idxOutfit);
      setOutfitList([...outfitList.slice(0, idx), ...outfitList.slice(idx + 1, outfitList.length)]);
      if (idxOutfit > idx) {
        setIdxOutfit(idxOutfit - 1);
      }
      // setOutfitList(outfitList.filter((item) => item !== undefined));
    }
  };

  const clickStar = (product) => {
    // console.log('clicked star', product);
    // console.log('product id, ', product.id);
    let notAlready = true;
    outfitList.forEach((item) => {
      // console.log('item id', item.id);
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
  for (let n = idxOutfit; n < idxOutfit + 3; n += 1) {
    if (outfitList[n] === undefined) {
      outfits.push(<EmptyOutfit />);
    } else {
      outfits.push(
        <Card
          key={outfitList[n].id}
          products={outfitList[n]}
          style={reccListStyles.length === 0 ? { product_id: -1 } : selectStyle(outfitList[n].id)}
          setCurProdId={props.setCurProdId}
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

  const spacer = {
    width: '50px',
    padding: '48px',
  };

  return (
    <div style={setMiddle}>
      <div className="recommended">
        <div style={title1}>RECOMMENDED</div>
        <div style={carouselStyle}>
          {idxRecc === 0 ? <div style={spacer} />
            : (
              <LeftArrow
                idx={idxRecc}
                list={reccList}
                nextSlide={prevSlideRecc}
              />
            )}
          {reccList.slice(idxRecc, idxRecc + 4).map((reccProduct) => (
            <Card
              key={reccProduct.id}
              products={reccProduct}
              style={reccListStyles.length === 0 ? { product_id: -1 } : selectStyle(reccProduct.id)}
              isRecc
              setCurProdId={props.setCurProdId}
              clickX={clickX}
              clickStar={clickStar}
            />
          ))}
          {idxRecc === reccList.length - 4 ? <div style={spacer} />
            : (
              <RightArrow
                idx={idxRecc}
                list={reccList}
                nextSlide={nextSlideRecc}
              />
            )}
        </div>
      </div>
      <div className="outfits">
        <div style={title1}>OUTFITS</div>
        <div style={carouselStyle}>
          {idxOutfit === 0 ? <div style={spacer} />
            : (
              <LeftArrow
                idx={idxOutfit}
                list={outfitList}
                nextSlide={prevSlideOutfit}
              />
            )}
          {addedCurrentOutfit ? (
            <Card
              key={reccProduct.id}
              products={reccProduct}
              isRecc
              clickX={clickX}
              clickStar={clickStar}
            />
          )
            : (
              <AddToOutfitsCard
                currProduct={currProduct}
                style={currProductStyle}
                clickStar={clickStar}
              />
            )}
          {outfits}
          {idxOutfit >= outfitList.length - 3 ? <div style={spacer} />
            : <RightArrow idx={idxOutfit} list={outfitList} nextSlide={nextSlideOutfit} />}
        </div>
      </div>
    </div>
  );
}

export default RIAC;
