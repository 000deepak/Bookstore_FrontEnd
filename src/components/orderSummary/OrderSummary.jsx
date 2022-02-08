<div className="order-summary">
<div className="my-cart">Order Summary</div>
<div className="cart-items">
  <div className="book-images">
    <img src={bookImage}></img>
  </div>

  <div className="details">
    <div className="book-name">Book Name</div>
    <div className="author" style={{ fontSize: "12px", color: "#878787", font: "Roboto" }}>
      by ME
    </div>
    <div className="rating">
      <div className="point">4.5*</div>
      <div className="point-no" style={{ color: "#a03037" }}>
        (20)
      </div>
    </div>
    <div className="price">Price</div>
    <div className="add-quantity">
      <Button style={{ backgroundColor: "#A03037", color: "white", fontSize: "12px" }}>
        Checkout
      </Button>
    </div>
  </div>
</div>
</div>