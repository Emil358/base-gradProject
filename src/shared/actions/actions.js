export const addImages = (images) => {

  return {
    type: 'ADD_IMAGES',
    payload: images
  }
}

export const likeImage = (id) => {
  return {
    type: 'LIKE_IMAGE',
    id
  }
}
