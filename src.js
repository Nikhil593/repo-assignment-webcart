// const data = fetch("./assets/data.json")
// .then(res => res.json())
// .then(data => console.log(data))

 const data = fetch('./assets/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data.items);

    console.log(data.items)
  })
  .catch(function (err) {
    console.log(err);
  });

  function appendData(data) {
  const container = document.getElementById('contents');
  const container1 = document.getElementById('calculationcontent');
  data.forEach((result, idx) => {
    // Construct card content
    const content = `
      <!-- Content cart -->
      <div class="shopping-item">
        <div class="discount_tag">${result.discount}% </div>
        <img id ="image" src=${result.image} >
        <div class="footer">
            <p class="item">${result.name}</p>
            <br>
            <div class="text_align">
            <p class="discounted_rate">
            <span class="discounted"><span style='color:#8e8383'>${result.price.actual}</span>
         </span>
              <span class="final_rate"> ${result.price.display}</span>
              <button class="footerbutton">
                Add To Cart
              </button>
          </div>
          </p>

        </div>
      </div>
    `;
   
    container.innerHTML += content;

  });
  const content1 = `
  <!-- Content cart -->
  <table>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>
        <img class ="image_short" src=${data[0].image} >

        ${data[0].name}</td>
        <td > <span>  -   </span>  <span class="box_shadow"> 2 </span> <span>+</span>
        </td>
        <td>$${data[0].price.actual}</td>
      </tr>
      <tr>
        <td>
        <img class ="image_short" src=${data[0].image} >

        ${data[0].name}
        
        </td>
        <td > <span>  -   </span>  <span class="box_shadow"> 2 </span> <span>+</span>
        </td>        <td>$${data[0].price.actual}</td>
      </tr>
      
    </table>
    <div class="total_amount">
    <h4 class="sub_head">Total</h4>
    <table >
  <tr>
    <th>${data[0].name}:</th>
    <td>$${data[0].price.actual}</td>
  </tr>
  <tr>
    <th>Discount:</th>
    <td>$${data[0].discount}</td>
  </tr>
  <tr>
    <th>Type Discount:</th>
    <td>$0</td>
  </tr>
  <tr class="last_row">
  <th>Order Total:</th>
  <td>$${data[0].price.actual}</td>
</tr>
</table>
</div>

  `
       container1.innerHTML += content1;


}