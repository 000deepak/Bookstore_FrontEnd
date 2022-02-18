export const fetchBooks = (books) => {
  return {
    type: "GET_BOOKS",
    payload: books,
  };
};

export const fetchCartBooks = (books) => {
  return {
    type: "CART_BOOKS",
    payload: books,
  };
};

export const fetchWishlistBooks = (books) => {
  return {
    type: "WISHLIST_BOOKS",
    payload: books,
  };
};
