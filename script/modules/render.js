import create from "./create.js";
const {createRow, addtableLineClass,} = create;
import storage from "./serviceStorge.js";
const {setStorage, removeStorage, getStorage,} = storage;


const renderGoods = (arr, tBody) => {
    arr.forEach(element => {
        createRow(element, tBody);
    });
    localStorage.setItem('data', JSON.stringify(arr));
};

const addGoods = (obj, goodId, tBody) => {
    obj.id = goodId.textContent;
    createRow(obj, tBody);
    addtableLineClass(tBody);

  }

  export default {
    renderGoods,
    addGoods,
  }