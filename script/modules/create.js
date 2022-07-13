
import calc from "./calc.js";
const {getRandomIntInclusive} = calc;


const createRow = (obj, tBody) => {
    tBody.insertAdjacentHTML("beforeend", `<tr>
    <td class="table__cell ">${tBody.children.length + 1}</td>
    <td class="table__cell table__cell_left table__cell_name" data-id="${obj["id"]}">
      <span class="table__cell-id">id: ${obj["id"]}</span>${obj["name"]}</td>
    <td class="table__cell table__cell_left">${obj["category"]}</td>
    <td class="table__cell">${obj["units"]}</td>
    <td class="table__cell">${obj["count"]}</td>
    <td class="table__cell">${obj["price"]}</td>
    <td class="table__cell">$${obj["price"] * obj["count"]}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>`)
};

const creatGoodId = (vendId) => {
    vendId.textContent = getRandomIntInclusive(0, 10000000);
    return vendId;
  };

  const addtableLineClass = (tBody) => {
    const trs = tBody.querySelectorAll('tr');
    if(!(trs.classList == 'table__line')) {
      trs.forEach(tr => {tr.classList = 'table__line'} );
    }
  };

  export default {
    createRow,
    creatGoodId,
    addtableLineClass,
  }