const initialState = {
  books: [],
};

const fetchCartBooks = (state = initialState, action) => {
  switch (action.type) {
    case "CART_BOOKS":
      return { ...state, books: action.payload };

    default:
      return state;
  }
};

export default fetchCartBooks;
