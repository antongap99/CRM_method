import create from "./create.js";
const {createRow, addtableLineClass,} = create;


const renderGoods = (arr, tBody) => {
    console.log(tBody);
    arr.forEach(element => {
        createRow(element, tBody);
    });
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