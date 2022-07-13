'use strict';

import goods from "./modules/data.js";
import calc from "./modules/calc.js";
const {calcTotalPrice, culcModalTotalPrice,} = calc;
import create from "./modules/create.js";
const { creatGoodId, addtableLineClass,} = create;
import render from "./modules/render.js";
const {renderGoods, addGoods,} = render;


const init = () => {
  const tBody = document.querySelector('.table__body');
  const vendId = document.querySelector('.vendor-code__id');
  const form = document.querySelector('.modal__form');
  const addGoodsBtn = document.querySelector('.panel__add-goods');
  const overlay = document.querySelector('.overlay');
  overlay.classList.toggle('active');


  tBody.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.table__btn_del')) {
      e.target.closest('.table__line').remove();

      for(let i = 0; i < goods.length; i++){
        const id =  +e.target.closest('.table__line').children[1].dataset.id;
        if(goods[i].id === id){
          goods.splice(goods[i], 1);

        }
      }
    };
  })



  addGoodsBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');
    creatGoodId(vendId);
  });

  overlay.addEventListener('click', (e) => {
    const target = e.target;
    if(target === overlay || target.closest('.modal__close')) {
      overlay.classList.toggle('active');
    }

  });

  form.discount.addEventListener('click', () => {
    if(form.discount_count.hasAttribute('disabled')){
      form.discount_count.removeAttribute('disabled');
    } else {
      form.discount_count.setAttribute('disabled',  'disabled');
      form.discount_count.value = '';
    };
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGoods = Object.fromEntries(formData);
    newGoods.id = 0;
    addGoods( newGoods , vendId, tBody);
    form.reset();
    form.total.value = 0;
    calcTotalPrice(tBody);
  });

  form.count.addEventListener('change', culcModalTotalPrice);
  form.price.addEventListener('change', culcModalTotalPrice);


  renderGoods(goods,  tBody);
  calcTotalPrice(tBody);
  addtableLineClass(tBody);

}


init();