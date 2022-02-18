import getTheBooks from "./getBooks";
import fetchCartBooks from "./fetchCartBooks";
import fetchWishlistBooks from "./fetchWishlistBooks";

import { combineReducers } from "redux";

const reducers = combineReducers({
  getTheBooks,
  fetchCartBooks,
  fetchWishlistBooks,
});

export default reducers;
