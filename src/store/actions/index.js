export const fetchBooks = (books) => {
  return {
    type: 'GET_BOOKS',
    payload: books
  };
};
