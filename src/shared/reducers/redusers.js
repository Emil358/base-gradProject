const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGES':
      return state.concat(action.payload);

    case 'LIKE_IMAGE':
      return state;

    default:
      return state;
  }
}

export default images;
