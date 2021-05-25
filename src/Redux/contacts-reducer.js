const initialState = {

    hotel: {
      phone: "7 (4842) 56-57-56",
      email: "hotel@donjon-kaluga.ru"
    },
    restaurant: {
      phone: "7 (4842) 22-49-96",
      email: "restuarant@donjon-kaluga.ru",
    },
    services: {
      phone: "7 (4842) 56-57-56",
      email: "services@donjon-kaluga.ru",
    },
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default contactsReducer;
