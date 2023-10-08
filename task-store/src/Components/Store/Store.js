import React from "react";
import "./Store.css";

const Store = () => {
  return (
    <div id="store">
      <div id="store-main">
        <div id="store-left">
          <div id="left-1">
            <i class="fa-solid fa-chevron-left fa-xl"></i>
            <h3>your design space </h3>
          </div>
          <div id="left-2">
            <div id="left-main-img">
              <div id="main-img">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/kfpq5jk0-0/shoe/c/j/x/cw1777-102nike-12-nike-white-black-vapor-green-hyper-jade-original-imafw4y5qzvx5hng.jpeg?q=70"
                  alt="main"
                />
              </div>
              <div id="sub-imgs">
                <div id="sub-img">
                  <img
                    src="https://rukminim2.flixcart.com/image/832/832/kfpq5jk0-0/shoe/c/j/x/cw1777-102nike-12-nike-white-black-vapor-green-hyper-jade-original-imafw4y5qzvx5hng.jpeg?q=70"
                    alt="sub"
                  />
                </div>
                <div id="sub-img">
                  <img
                    src="https://rukminim2.flixcart.com/image/832/832/kfpq5jk0-0/shoe/c/j/x/cw1777-102nike-12-nike-white-black-vapor-green-hyper-jade-original-imafw4y5qzvx5hng.jpeg?q=70"
                    alt="sub"
                  />
                </div>
                <div id="sub-img">
                  <img
                    src="https://rukminim2.flixcart.com/image/832/832/kfpq5jk0-0/shoe/c/j/x/cw1777-102nike-12-nike-white-black-vapor-green-hyper-jade-original-imafw4y5qzvx5hng.jpeg?q=70"
                    alt="sub"
                  />
                </div>
              </div>
            </div>
            <div id="left-main-desc">
              <div id="left-header">
                <h2>KSL 01</h2>
                <p>by KICKSUP and you</p>
              </div>
              <div id="left-reviews">
                <div id="left-stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <span>80 reviews</span>
              </div>
              <div id="left-price">
                <h4>Rs. 2000/-</h4>
                <span>Get an exclusive 20% off shopping with HDFC bank</span>
              </div>
              <div id="left-angle">
                <div id="angle">
                  <p>Front</p>
                  <div id="boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div id="angle">
                  <p>Middle</p>
                  <div id="boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div id="angle">
                  <p>Back</p>
                  <div id="boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div id="angle">
                  <p>Sole</p>
                  <div id="boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div id="left-size">
                <p>Size</p>
                <div id="size-number">
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                </div>
              </div>
            </div>
          </div>
          <div id="left-3">
           <div id="rate">
           <p>Rate Product</p>
            <div>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
           </div>
          </div>
          <div id="left-4">
            <button>share design</button>
            <button>add to cart</button>
          </div>
        </div>
        <div id="store-right"></div>
      </div>
    </div>
  );
};

export default Store;
