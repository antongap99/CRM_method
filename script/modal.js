'use strict';

const goods = [
    {
      "id": 24601654816512,
      "name": "Навигационная система Soundmax",
      "price": 100,
      "description": "Навигационная система Soundmax",
      "category": "Техника для дома	",
      "discont": false,
      "count": 5,
      "units": "шт",
      "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
      }
    },
    {
      "id": 24601654816513,
      "name": "Телевизор DEXP",
      "price": 1000,
      "description": "Телевизор DEXP",
      "category": "Техника для дома	",
      "discont": false,
      "count": 15,
      "units": "шт",
      "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
      }
    },

    {
      "id": 1,
      "name": "Смартфон Xiaomi 11T 8/128GB",
      "price": 27000,
      "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
      "category": "mobile-phone",
      "discont": false,
      "count": 3,
      "units": "шт",
      "images": {
        "small": "img/smrtxiaomi11t-m.jpg",
        "big": "img/smrtxiaomi11t-b.jpg"
      },
    },
    {
      "id": 2,
      "name": "Радиоуправляемый автомобиль Cheetan",
      "price": 4000,
      "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
      "category": "toys",
      "discont": 5,
      "count": 1,
      "units": "шт",
      "images": {
        "small": "img/cheetancar-m.jpg",
        "big": "img/cheetancar-b.jpg"
      }
    },
    {
      "id": 3,
      "name": "ТВ приставка MECOOL KI",
      "price": 12400,
      "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
      "category": "tv-box",
      "discont": 15,
      "count": 4,
      "units": "шт",
      "images": {
        "small": "img/tvboxmecool-m.jpg",
        "big": "img/tvboxmecool-b.jpg"
      }
    },
    {
      "id": 4,
      "name": "Витая пара PROConnect 01-0043-3-25",
      "price": 22,
      "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
      "category": "cables",
      "discont": false,
      "count": 420,
      "units": "шт",
      "images": {
        "small": "img/lan_proconnect43-3-25.jpg",
        "big": "img/lan_proconnect43-3-25-b.jpg"
      }
    }
  ]


const creatElem = (tag, attr) => {
    const elem = document.createElement(tag);
    return Object.assign(elem, {...attr})
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const overlay = document.querySelector('.overlay');
const tBody = document.querySelector('.table__body');
overlay.classList.toggle('active');



const createRow = (obj) => {
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
}


const renderGoods = (arr) => {
    arr.forEach(element => {
        createRow(element);
    });
}

renderGoods(goods);


const addGoodsBtn = document.querySelector('.panel__add-goods');

addGoodsBtn.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', (e) => {
  const target = e.target;
  if(target === overlay || target.closest('.modal__close')) {
    overlay.classList.toggle('active');
  }

});




const delBtn = document.querySelector('.table__btn_del');
const trs = tBody.querySelectorAll('tr');
trs.forEach(tr => {tr.classList = 'table__line'} );


tBody.addEventListener('click', (e) => {
  const target = e.target;
  if(target.closest('.table__btn_del')) {
    e.target.closest('.table__line').remove();

    for(let i = 0; i < goods.length; i++){
      const id =  +e.target.closest('.table__line').children[1].dataset.id;
      if(goods[i].id === id){
        goods.splice(goods[i], 1);
        console.log('goods: ', goods);
      }
    }
  };
})

const form = document.querySelector('.modal__form');
console.log('form: ', form);

form.discount.addEventListener('click', () => {
  if(form.discount_count.hasAttribute('disabled')){
    form.discount_count.removeAttribute('disabled');
  } else {
    form.discount_count.setAttribute('disabled',  'disabled');
    form.discount_count.value = '';
  };
  console.log('form.discount_count.attr: ', form.discount_count );
});


const addGoods = (obj, tBody) => {
  obj.id = getRandomIntInclusive(0 , 10000);
  createRow(obj);
}

const submit = document.querySelector('.modal__submit');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newGoods = Object.fromEntries(formData);
  newGoods.id = 0;
  console.log('newGoods: ', newGoods);
  addGoods( newGoods ,tBody);
  form.reset();
})
