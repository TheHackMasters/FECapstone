import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
import AddToOutfitsCard from './AddToOutfitsCard.jsx';
import EmptyOutfit from './EmptyOutfit.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import ComparisonModal from './ComparisonModal.jsx';

function RIAC(props) {
  const [idxRecc, setIdxRecc] = useState(0);
  const [idxOutfit, setIdxOutfit] = useState(0);

  const [currProduct, setCurrProduct] = useState(props.overviewData);
  const [currProductStyle, setCurrProductStyle] = useState(props.overviewStyles);
  const [reccList, setReccList] = useState(props.relatedData);
  const [reccListStyles, setReccListStyles] = useState([]);
  const [addedCurrentToOutfits, setAddedCurrentToOutfit] = useState(!!localStorage.getItem(currProduct.id));

  const [openModal, setOpenModal] = useState(false);
  const [compareProd, setCompareProd] = useState({});

  const cleanData = (data) => {
    const set = new Set(data);
    const arr = Array.from(set);
    const filter = arr.filter((item) => (item.id !== currProduct.id));
    return filter;
  };

  //console.log('curr', currProduct);
  //console.log('comp', compareProd);

  useEffect(() => {
    setCurrProduct(props.overviewData);
    setReccList(cleanData(props.relatedData));
    setCurrProductStyle(props.overviewStyles);
    setReccListStyles(props.relatedStyles);
    setAddedCurrentToOutfit(!!localStorage.getItem(currProduct.id));
    setIdxRecc(0);
    setIdxOutfit(0);
  }, [props]);

  // console.log(props.relatedStyles);

  const selectStyle = (id) => {
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

  const selectStyleOutfits = (id) => {
    if (id === Number(currProductStyle.product_id)) {
      return currProductStyle;
    }
  };

  const clickX = (product) => {
    let idx = -1;
    for (let n = 0; n < localStorage.length; n += 1) {
      if (product.id === Number(localStorage.key(n))) {
        idx = n;
      }
    }
    if (idx > -1) {
      if (product.id === currProduct.id) {
        setAddedCurrentToOutfit(!addedCurrentToOutfits);
      }
      localStorage.removeItem(product.id);
      setAddedCurrentToOutfit(!addedCurrentToOutfits);
      if (idxOutfit > idx) {
        setIdxOutfit(idxOutfit - 1);
      }
    }
  };

  const clickAddToOutfits = (product, style) => {
    if (!localStorage.getItem(product.id)) {
      const itemObj = [product, style];
      localStorage.setItem(product.id, JSON.stringify(itemObj));
      setAddedCurrentToOutfit(true);
    }
  };

  const clickStar = (product) => {
    setCompareProd(product);
    setOpenModal(true);
  };

  const recommends = [];
  for (let n = idxRecc; n < idxRecc + 4; n += 1) {
    if (reccList[n] === undefined) {
      recommends.push(<EmptyOutfit key={-1 * n} />);
    } else if (reccList[n] === currProduct.id) {
      continue;
    } else {
      // console.log('product', reccList[n]);
      // console.log('style', reccListStyles.length === 0 ? { product_id: -1 } : selectStyle(reccList[n].id));
      recommends.push(
        <Card
          key={reccList[n].id}
          products={reccList[n]}
          style={reccListStyles.length === 0 ? { product_id: -1 } : selectStyle(reccList[n].id)}
          setCurProdId={props.setCurProdId}
          isRecc
          clickX={clickX}
          clickStar={clickStar}
        />,
      );
    }
  }

  const outfits = [];
  for (let n = idxOutfit; n < idxOutfit + 3; n += 1) {
    if (localStorage.key(n) === null) {
      outfits.push(<EmptyOutfit key={-10 * n} />);
    } else {
      const storageKey = localStorage.key(n);
      const currOutfit = JSON.parse(localStorage.getItem(storageKey));
      outfits.push(
        <Card
          key={storageKey}
          products={currOutfit[0]}
          style={currOutfit[1]}
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
    setIdxOutfit(idxOutfit + 2 >= localStorage.length - 1 ? idxOutfit : idxOutfit + 1);
  };

  const prevSlideRecc = () => {
    setIdxRecc(idxRecc === 0 ? 0 : idxRecc - 1);
  };

  const prevSlideOutfit = () => {
    setIdxOutfit(idxOutfit === 0 ? 0 : idxOutfit - 1);
  };

  return (
    <SetMiddle>
      <ComponentSpace />
      <div className="recommended">
        <h2>RECOMMENDED</h2>
        <CarouselStyle>
          {idxRecc === 0 ? <Spacer />
            : (
              <LeftArrow
                idx={idxRecc}
                list={reccList}
                nextSlide={prevSlideRecc}
              />
            )}
          {recommends}
          {openModal ? (
            <ComparisonModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              currProduct={currProduct}
              compareProd={compareProd}
            />
          ) : null}
          {idxRecc === reccList.length - 4 ? <Spacer />
            : (
              <RightArrow
                idx={idxRecc}
                list={reccList}
                nextSlide={nextSlideRecc}
              />
            )}
        </CarouselStyle>
      </div>
      <div className="outfits">
        <h2>OUTFITS</h2>
        <CarouselStyle>
          {idxOutfit === 0 ? <Spacer />
            : (
              <LeftArrow
                idx={idxOutfit}
                nextSlide={prevSlideOutfit}
              />
            )}
          <AddToOutfitsCard
            currProduct={currProduct}
            style={selectStyleOutfits(currProduct.id)}
            clickAddToOutfits={clickAddToOutfits}
          />

          {outfits}
          { idxOutfit >= localStorage.length - 3 ? <Spacer />
            : <RightArrow idx={idxOutfit} nextSlide={nextSlideOutfit} />}
        </CarouselStyle>
      </div>
      <ComponentSpace />
    </SetMiddle>
  );
}

export default RIAC;

const SetMiddle = styled.div`
  margin: auto;
`;

const CarouselStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// const Title1 = styled.div`
//   font-weight: light;
//   size: 24px;
//   color: grey;
//   padding: 32px 0px 8px 0px;
//   margin-left: 100px;
// `;

const Spacer = styled.div`
  width: 2em;
  padding: 2em;
`;

const ComponentSpace = styled.div`
  height: 4em;
`;
