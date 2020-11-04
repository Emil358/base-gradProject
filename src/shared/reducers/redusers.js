const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGES':
      return state.concat(action.payload);

    case 'LIKE_IMAGE':
      let newState = state.map(image => {
        if (image.id === action.id) {
          image.liked_by_user = !image.liked_by_user
          if (image.liked_by_user) {
            image.likes = ++image.likes
          } else {
            image.likes = --image.likes
          }
        }
        return image
      })
      console.log(newState);
      return newState;

    default:
      return state;
  }
}

export default images;
