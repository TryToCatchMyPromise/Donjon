const initialState = {
  sectionNames:{
    main: [
      {
        text: 'Начало',
        hash: '#start',
      },
      {
        text: 'Разделы',
        hash: '#image_transfer',
      },
      {
        text: 'История',
        hash: '#history',
      },
      {
        text: 'Инфографика',
        hash: '#infographics',
      },
      {
        text: 'Конец',
        hash: '#end',
      },
    ],
    hotel: [
      {
        text: 'Привет',
        hash: '#start',
      },
      {
        text: 'Я',
        hash: '#image_transfer',
      },
      {
        text: 'Боковое',
        hash: '#history',
      },
      {
        text: 'Меню',
        hash: '#infographics',
      },
      {
        text: 'Ура!',
        hash: '#end',
      },
    ],
    restaurant: [
      {
        text: 'Привет',
        hash: '#start',
      },
      {
        text: 'Я',
        hash: '#image_transfer',
      },
      {
        text: 'Боковое',
        hash: '#history',
      },
      {
        text: 'Меню',
        hash: '#infographics',
      },
      {
        text: 'Ура!',
        hash: '#end',
      },
      {
        text: 'Шестой пункт',
        hash: '#endd',
      },
    ],
    services: [
      {
        text: 'Привет',
        hash: '#start',
      },
      {
        text: 'Я',
        hash: '#image_transfer',
      },
      {
        text: 'Боковое',
        hash: '#history',
      },
      {
        text: 'Меню',
        hash: '#infographics',
      },
      {
        text: 'Ура!',
        hash: '#end',
      },
      {
        text: 'Шестой пункт',
        hash: '#endd',
      },
      {
        text: 'Седьмой пункт',
        hash: '#endd',
      },
    ],
    contacts: [
      {
        text: 'Не',
        hash: '#start',
      },
      {
        text: 'Забыть',
        hash: '#image_transfer',
      },
      {
        text: 'Пофиксить',
        hash: '#history',
      },
      {
        text: 'Хэш',
        hash: '#infographics',
      },
      {
        text: 'Линки',
        hash: '#end',
      },
    ],
  }

};

const leftNavReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default leftNavReducer;
