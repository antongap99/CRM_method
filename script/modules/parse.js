
const gelElement = () => {
    const tBody = document.querySelector('.table__body');
  const vendId = document.querySelector('.vendor-code__id');
  const form = document.querySelector('.modal__form');
  const addGoodsBtn = document.querySelector('.panel__add-goods');
  const overlay = document.querySelector('.overlay');

  return {
    tBody,
    vendId,
    form,
    addGoodsBtn,
    overlay,
  }
}

export default gelElement;