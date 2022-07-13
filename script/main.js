'use strict';

import goods from "./modules/data.js";
import calc from "./modules/calc.js";
const {calcTotalPrice, culcModalTotalPrice,} = calc;
import create from "./modules/create.js";
const { creatGoodId, addtableLineClass,} = create;
import render from "./modules/render.js";
const {renderGoods, addGoods,} = render;
import storage from "./modules/serviceStorge.js";
const  {setStorage, removeStorage, getStorage,} = storage;
import control from "./modules/control.js";
import parse from "./modules/parse.js";
const {
  tBodyControl,
  addGoodsBtnControl,
  overlayControl,
  formControl,
  formDiscountControl,
  formCountControl,
  formPriceControl,
  NumeringControl,
} = control;


export  const main = () => {

  const elements =parse();
  const {
    tBody,
    vendId,
    form,
    addGoodsBtn,
    overlay,
  } = elements;

  tBodyControl(tBody);

  addGoodsBtnControl(addGoodsBtn, vendId, overlay, form);

  overlayControl(overlay);

  formControl(form, vendId, tBody);

  formDiscountControl(form);


  formPriceControl(form);

  renderGoods(getStorage('data'),  tBody);

  calcTotalPrice(tBody);

  addtableLineClass(tBody);


}





