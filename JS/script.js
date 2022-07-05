"use strict";

// let courses = [
//     { name: "Courses in England", prices: [0, 100] },
//     { name: "Courses in Germany", prices: [500, null] },
//     { name: "Courses in Italy", prices: [100, 200] },
//     { name: "Courses in Russia", prices: [null, 400] },
//     { name: "Courses in China", prices: [50, 250] },
//     { name: "Courses in USA", prices: [200, null] },
//     { name: "Courses in Kazakhstan", prices: [56, 324] },
//     { name: "Courses in France", prices: [null, null] },
// ];

const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("product-lists");
  const product = document.querySelectorAll(".product");
  const pname = storeItems.getElementsByTagName("h2");

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
