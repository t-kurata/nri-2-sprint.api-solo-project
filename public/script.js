async function displayResult() {
    const data = await fetch(`/api/ramen/${document.querySelector("#category").value}`);
    const datajson = await data.json();
    const ramen_info = datajson.ramen_info;
    const result = document.querySelector(".result");
    result.innerHTML = "";
  
    for (const ramen of ramen_info) {
      const div = document.createElement("div");
      div.classList.add("container");
      div.innerHTML = `
      <span class="img"><img src='${ramen.image}'></span>
      <span class="info">
        <p class="name">${ramen.ramen_name}</p>
        <p class="category">${ramen.category}</p>
        <p class="price">${ramen.price}円</p>
      </span>
      `;
      result.append(div);
    }
  }
  
  const button = document.querySelector(".button");
  
  button.addEventListener("click", displayResult);