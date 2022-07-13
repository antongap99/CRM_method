
const getStorage = (key) => {
    let result;
    try {
      result = JSON.parse(localStorage.getItem(key));
    } catch {
      result = localStorage.getItem(key);
    }

    return result || [];
  };

  const setStorage = (key, goodData) => {
    const data = getStorage(key);
    data.push(goodData);
    window.localStorage.removeItem('data');
    window.localStorage.setItem('data', JSON.stringify(data));
  };


  const removeStorage = (goodDataId) => {
    const data = getStorage('data');

    const newData = data.filter((elem) => +goodDataId !== +elem.id);

    window.localStorage.removeItem('data');
    window.localStorage.setItem('data', JSON.stringify(newData));
  };


  export default {
    setStorage,
    removeStorage,
    getStorage,
  };