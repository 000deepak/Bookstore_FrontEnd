const initialState = {
  books: [],
};

const getTheBooks = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return { ...state, books: action.payload };

    default:
      return state;
  }
};

export default getTheBooks;
