let links = document.querySelectorAll(".portfolio .contaner ul li");
let imgs = document.querySelectorAll(".portfolio .box-contaner > div");

links.forEach((el) => {
  el.addEventListener("click", function (e) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    imgs.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelectorAll(e.target.dataset.cat).forEach((ele) => {
      ele.style.display = "block";
    });
  });
});
