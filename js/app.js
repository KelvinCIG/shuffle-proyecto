window.addEventListener("DOMContentLoaded", function(){
    acordeon("demoA");
    acordeon("demoB", true);
});
function acordeon (elemento, one) {
  elemento = document.getElementById(elemento);
  elemento.classList.add("awrap");  
  if (typeof one != "boolean") { 
    one = false; 
  }
  let head = elemento.getElementsByClassName("ahead");  
  if (one) {
    for (let headElement of head) {
      headElement.addEventListener("click", function(){
        for (let e of head) { 
          if (e != this) { 
            e.classList.remove("open"); 
          }
          else { 
            this.classList.toggle("open"); 
          }
        }
      });
    }
  }
  else {
    for (let h of head) {
      h.addEventListener("click", function(){
        this.classList.toggle("open");
      });
    }
  }
}

