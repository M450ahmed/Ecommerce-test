let detailsContainer = document.querySelector(".details-container div");
let productDetails = JSON.parse(localStorage.getItem("proItemDetId"));

function showDetails(){
let cartDetailsUI = productDetails.map((item) => {
      return  `<div class="details-group">
      <img src="${item.image}" alt="" class="details-img">
      <div class="details-small-imgs grid">
        <img src="${item.image}" alt="" class="details-small-img"/>
        <img src="Imgs/blouse.jpeg" alt="" class="details-small-img"/>
        <img src="Imgs/blouse2.jpeg" alt="" class="details-small-img"/>
        
        
      </div>
    </div> 
    <div class="details-group">
      <h3 class="details-title">${item.title}</h3>
      <p class="details-brand">Brands: <span>asos</span></p>
      <div class="details-price flex">
        <span class="new-price">$27</span>
        <span class="old-price">$${item.price} </span>
        <span class="save-price">$30 off</span>
      </div>
      <p class="short-discription">Balck Lenin top bal bla bla bal bla bla bla bla bla bla bla bla bla bal bla bla bla bla bla blahhhhhhh...</p>
      <ul class="product-list">
        <li class="list-item flex">
          <i class="fi-rs-crown"> 1 Year warranty</i>
        </li>
        
        <li class="list-item flex">
          <i class="fi-rs-refresh"> 30 Day Return Policy</i>
        </li>
        
        <li class="list-item flex">
          <i class="fi-rs-credit-card"> Cash on delivery available </i>
        </li>
        
      </ul>
      <div class="details-color flex">
        <span class="details-color-title">Color</span>
        <ul class="color-list">
          <li>
            <a href="" 
            class="color-link" 
            style="background-color: hsl(37, 100%, 65%)"></a>
          </li>
          
          <li>
            <a href="" 
            class="color-link"
            style="background-color: hsl(353, 100%, 67%)"></a>
          </li>
          
          <li>
            <a href="" 
            class="color-link"
            style="background-color: hsl(49, 100%, 60%)"></a>
          </li>
          
          <li>
            <a href="" 
            class="color-link"
            style="background-color: hsl(304, 100%, 78%)"></a>
          </li>
          
          <li>
            <a href="" 
            class="color-link"
            style="background-color: hsl(126, 61%, 52%)"></a>
          </li>
        </ul>
      </div>
      
      <div class="details-size flex">
        <span class="details-size-title">Size</span>
        <ul class="size-list">
          <li>
            <a href="#" 
            class="size-link size-active">${item.size}</a>
          </li>
          
          <li>
            <a href="#" 
            class="size-link">L</a>
          </li>
          
          <li>
            <a href="#" 
            class="size-link">XL</a>
          </li>
          
          <li>
            <a href="#" 
            class="size-link">XXL</a>
          </li>
        </ul>
      </div>
      
      <div class="details-action">
       
        <a href="#" class="btn btn-sm" onclick="addToCart(${item.id})">Add to cart</a>
        <a href="#" class="details-action-btn" onclick="addToFav(${item.id})">
          <i class="fi fi-rs-heart"></i>
        </a>
      </div>
      <ul class="details-meta">
        <li class="meta-list flex"><span>SKU:</span> FWM15VKT</li>
        
        <li class="meta-list flex"><span>Tags:</span> cloth, women, top</li>
        
        <li class="meta-list flex"><span>Availability:</span> 21 Items in stock </li>
        
      </ul>
    </div>`;
});
detailsContainer.innerHTML = cartDetailsUI;
   // initCartPage();
    //updateCartUI();
   // updateTotalPriceUI(totalPrice);
}
(function initDetalPage() {
 showDetails();
  
})();
