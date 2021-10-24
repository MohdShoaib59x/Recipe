const url =
  "https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=100&apiKey=7bbf60ec2126441eb2b5abb784581fb1";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(url, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    var container = document.getElementById("container");

result.map(item=>{

container.innerHTML+=`<div class="container-inner">
<main class="card">
  <div>
    <img
      src=${item.image}
      alt="abc"
    />
  </div>
  <article class="box">
    <h2>${item.title}</h2>
    <table border="1">
      <tr>
        <td>${item.calories}</td>
        <td>${item.carbs}</td>
      </tr>
      <tr>
        <td>${item.fat}</td>
        <td>${item.protein}</td>
      </tr>
    </table>
  </article>
</main>
</div>`

})


    console.log(result);
  })
  .catch((error) => console.log("error", error));
