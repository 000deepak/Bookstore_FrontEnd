const initialState = {
  books: [],
};

const fetchWishlistBooks = (state = initialState, action) => {
  switch (action.type) {
    case "WISHLIST_BOOKS":
      return { ...state, books: action.payload };

    default:
      return state;
  }
};

export default fetchWishlistBooks;
