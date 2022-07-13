import storage from "./serviceStorge.js";
const {
    setStorage,
    removeStorage,
    getStorage,
} = storage;
import goods from "./data.js";
import create from "./create.js";
const {creatGoodId,} = create;
import render from "./render.js";
const {addGoods,} = render;
import calc from "./calc.js";
const {calcTotalPrice, culcModalTotalPrice,} = calc;

const tBodyControl = (tBody) => {
    tBody.addEventListener('click', (e) => {
        const target = e.target;
        if(target.closest('.table__btn_del')) {
          e.target.closest('.table__line').remove();
          const delItemId = e.target.closest('.table__line').children[1].dataset.id;
          removeStorage(delItemId);

          for(let i = 0; i < goods.length; i++){
            const id =  +e.target.closest('.table__line').children[1].dataset.id;
            if(goods[i].id === id){
              goods.splice(goods[i], 1);
            }
          }
          NumberingControl(tBody);
        };
      })

}
const addGoodsBtnControl = (addGoodsBtn, vendId, overlay, form) => {
    addGoodsBtn.addEventListener('click', () => {
        overlay.classList.toggle('active');
        creatGoodId(vendId);
      });
      form.total.value = '$ ' + 0;
}
const overlayControl = (overlay) => {
    overlay.addEventListener('click', (e) => {
        const target = e.target;
        if(target === overlay || target.closest('.modal__close')) {
          overlay.classList.toggle('active');
        }
      });
}

const formControl = (form, vendId, tBody) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newGoods = Object.fromEntries(formData);
        newGoods.id = 0;
        addGoods( newGoods , vendId, tBody);
        setStorage('data', newGoods);
        form.reset();
        form.total.value = 0;
        calcTotalPrice(tBody);
        creatGoodId(vendId);
      });

}

const formDiscountControl = (form) => {
    form.discount.addEventListener('click', () => {
        if(form.discount_count.hasAttribute('disabled')){
          form.discount_count.removeAttribute('disabled');
        } else {
          form.discount_count.setAttribute('disabled',  'disabled');
          form.discount_count.value = '';
        };
      });
}

const formPriceControl = (form) => {
    form.price.addEventListener('change', culcModalTotalPrice);
}

const NumberingControl = (tBody) => {
    const numbering = tBody.children;
    console.log('numbering: ', numbering);
    for (let i = 1; i <= tBody.children.length; i++ ){
        numbering[i - 1].firstElementChild.textContent = i;
        console.log(numbering[i - 1].firstElementChild.textContent);
    }
  }

export default {
    tBodyControl,
    addGoodsBtnControl,
    overlayControl,
    formControl,
    formDiscountControl,
    formPriceControl,
    NumberingControl,
}