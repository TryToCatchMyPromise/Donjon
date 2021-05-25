let initialState = {
link: {
  main: "../../../files/my_video.mp4",
  hotel: '',
  restaurant: '',
  services: '',
  contacts: '',

}
};

const videoSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default videoSectionReducer;