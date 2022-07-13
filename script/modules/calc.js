
const getRandomIntInclusive = (min, max) =>  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };

const calcTotalPrice = (tBody) => {
    const totalPrice = document.querySelector('.crm__total-price');
    let total = 0;
     for(let i = 0; i < tBody.children.length; i++) {
        total += tBody.children[i].children[5].textContent * tBody.children[i].children[4].textContent  ;
     }
     totalPrice.textContent = `$ ${total}`;
  };

  const culcModalTotalPrice = (e) => {
    e.target.closest('form').total.value = '$ ' + (e.target.closest('form').count.value * e.target.closest('form').price.value);
  };

  export default {
    getRandomIntInclusive,
    calcTotalPrice,
    culcModalTotalPrice,
  }