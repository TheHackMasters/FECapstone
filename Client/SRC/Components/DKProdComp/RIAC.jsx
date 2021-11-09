import React, { useState, useEffect } from 'react';
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
  const [addedCurrentToOutfits, setAddedCurrentToOutfit] =
  useState(!!localStorage.getItem(currProduct.id));

  const [openModal, setOpenModal] = useState(false);
  const [compareProd, setCompareProd] = useState({});

  const cleanData = (data) => {
    // console.log('before, ', data);
    const set = new Set(data);
    const arr = Array.from(set);
    const filter = arr.filter((item) => (item.id !== currProduct.id));
    // console.log('after filter,', filter);
    return filter;
  };

  useEffect(() => {
    setCurrProduct(props.overviewData);
    setReccList(cleanData(props.relatedData));
    setReccListStyles(props.relatedStyles);
    setCurrProductStyle(props.overviewStyles);
    setAddedCurrentToOutfit(!!localStorage.getItem(currProduct.id));
    setIdxRecc(0);
    setIdxOutfit(0);
  }, [props]);

  // console.log(reccList);
  // console.log('recclistStyles', reccListStyles);

  // const [addedCurrentOutfit, setAddedCurrentOutfit] = useState(() => {
  //   let isIncluded = false;
  //   outfitList.forEach((item) => {
  //     if (currProduct.id === item.id) {
  //       isIncluded = true;
  //     }
  //   });
  //   return isIncluded;
  // });

  const selectStyle = (id) => {
    // console.log('currProductStyleID', currProductStyle);
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
    // console.log('currProductStyleID', currProductStyle);
    // if (localStorage.getItem(id)) {
    //   return (JSON.parse(localStorage.getItem(id))[1]);
    // }
    if (id === Number(currProductStyle.product_id)) {
      return currProductStyle;
    }
    // return outfitListStyles.reduce((selected, item) => {
    //   if (Number(item.product_id) === id) {
    //     selected = item;
    //   }
    //   return selected;
    // });
  };

  const clickX = (product) => {
    //console.log(localStorage);
    let idx = -1;
    // console.log('clicked ', product);
    for (let n = 0; n < localStorage.length; n += 1) {
      // console.log('storage key ', localStorage.key(n));
      // console.log('product key ', product.id);
      // console.log(product.id === Number(localStorage.key(n)));

      if (product.id === Number(localStorage.key(n))) {
        idx = n;
      }
    }
    //console.log(idx);
    if (idx > -1) {
      // console.log('removing from idx: ', idx);
      // console.log('idxOutfit is :', idxOutfit);
      if (product.id === currProduct.id) {
        setAddedCurrentToOutfit(false);
      }
      //console.log('removing');
      localStorage.removeItem(product.id);
      // setOutfitList([...outfitList.slice(0, idx), ...outfitList.slice(idx + 1, outfitList.length)]);
      if (idxOutfit > idx) {
        setIdxOutfit(idxOutfit - 1);
      }
      // setOutfitList(outfitList.filter((item) => item !== undefined));
    }
    //console.log('after, ', localStorage);
  };

  const clickAddToOutfits = (product, style) => {
    // console.log('clicked star', product);
    // console.log('product id, ', product.id);
    // let notAlready = true;
    // console.log(localStorage);
    // outfitList.forEach((item) => {
    //   // console.log('item id', item.id);
    //   if (item.id === product.id) {
    //     notAlready = false;
    //   }
    // });
    // console.log('product', product);
    // console.log('style', style);
    if (!localStorage.getItem(product.id)) {
      const itemObj = [product, style];
      localStorage.setItem(product.id, JSON.stringify(itemObj));
      setAddedCurrentToOutfit(true);
    }
    // console.log(JSON.parse(localStorage.getItem(product.id)));
    // console.log(localStorage);
    //localStorage.setItem(product.id, [])
    //localStorage.outfits.push({product[id]: [product, style]});
    // if (notAlready) {
    //   setOutfitList([product, ...outfitList]);
    //   setOutfitListStyles([style, ...outfitListStyles]);
    //   if (idxOutfit > 0) {
    //     setIdxOutfit(idxOutfit - 1);
    //   }
    // }
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

  // (outfitList.length < 3 ? 3 : outfitList.length)
  // useEffect(() => {
  //   console.log('WAZZZZAAA');

  // }, [addedCurrentToOutfits]);

  const outfits = [];
  for (let n = idxOutfit; n < idxOutfit + 3; n += 1) {
    // console.log(localStorage.key(n));
    if (localStorage.key(n) === null) {
      outfits.push(<EmptyOutfit key={-10 * n} />);
    } else {
      const storageKey = localStorage.key(n);
      console.log(JSON.parse(localStorage.getItem(storageKey)));
      const currOutfit = JSON.parse(localStorage.getItem(storageKey));
      // console.log(currOutfit);
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
          {/* {reccList.slice(idxRecc, idxRecc + 4).map((reccProduct) => (
            <Card
              key={reccProduct.id}
              products={reccProduct}
              style={reccListStyles.length === 0 ? { product_id: -1 } : selectStyle(reccProduct.id)}
              isRecc
              setCurProdId={props.setCurProdId}
              clickX={clickX}
              clickStar={clickStar}
            />
          ))} */}
          {recommends}
          {openModal ? (
            <ComparisonModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              currProduct={currProduct}
              compareProd={compareProd}
            />
          ) : null}
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
                nextSlide={prevSlideOutfit}
              />
            )}
              <AddToOutfitsCard
                currProduct={currProduct}
                style={selectStyleOutfits(currProduct.id)}
                clickAddToOutfits={clickAddToOutfits}
              />

          {outfits}
          { idxOutfit >= localStorage.length - 3 ? <div style={spacer} />
            : <RightArrow idx={idxOutfit} nextSlide={nextSlideOutfit} />}
        </div>
      </div>
    </div>
  );
}

export default RIAC;
