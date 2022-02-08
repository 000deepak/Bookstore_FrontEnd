import service from "./axios";

let url = "http://localhost:9000/api/v1";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

const bookService = {
  addCart: (data) => {
    return service.postMethod(`${url}/cart/cart/${data}`, data, header);
  },
  getCart: () => {
    return service.getMethod(`${url}/cart/cart`, header);
  },
  updateCart: (data) => {
    return service.putMethod(`${url}/cart/update/${data.bookId}`,data,header);
  },
  addWishlist: (data) => {
    return service.postMethod(`${url}/wishlist/wishlist/${data}`,data, header);
  },
  getWishlist: () => {
    return service.getMethod(`${url}/wishlist/wishlist`, header);
  },
  updateWishlist: (data) => {
    return service.putMethod(`${url}/wishlist/update/${data}`,data, header);
  },
  addBook: (data) => {
    return service.postMethod(`${url}/book/book`, data, header);
  },
  getBooks: () => {
    return service.getMethod(`${url}/book/book`, header);
  },
  signup: (data) => {
    return service.postMethod(`${url}/user/signup`, data);
  },
  signin: (data) => {
    return service.postMethod(`${url}/user/signin`, data);
  },
};

export default bookService;
