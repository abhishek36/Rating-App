let form = document.querySelector("form");
let textarea = document.querySelector("textarea");
let select = document.querySelector("select");
let ul = document.querySelector("ul");
let empty = document.querySelector(".empty");
let emptytwo = document.querySelector(".emptytwo");

let savereview = (e) => {
  if(textarea.value === ""){
    alert("please give your rating and review both")
  } else if (select.value < 1){
    alert("please give your rating and review both")
  } else {
    e.preventDefault();
    let newli = document.createElement("li");
    console.log(newli);
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let dlbtn = document.createElement("button");
    let savereview = document.createElement("div");
    let dltsavereview = document.createElement("div");
  
    newli.className = "list";
    dlbtn.className = "dlbtn";
    savereview.className = "savereview";
    dlbtn.innerText = "delete";
    savereview.innerText = "Your review was saved";
    dltsavereview.innerText = "x";
    dltsavereview.className = "dltsavereview";
  
    h1.innerText = select.value;
    h2.innerText = textarea.value;
  
    ul.appendChild(newli);
    newli.appendChild(h1);
    newli.appendChild(h2);
    newli.appendChild(dlbtn);
    empty.appendChild(savereview);
    savereview.appendChild(dltsavereview);
  
  }
 
  // savediv.innerText = "save review"

  form.reset();
};

let dsavereview = (e) => {
  console.log(e.target.className.includes("savedlticon"));
  e.target.parentElement.remove();
};

empty.addEventListener("click", dsavereview);

let removeli = (e) => {
  if (e.target.className.includes("dlbtn")) {
    if (window.confirm("Are You Sure")) {
      let dltreview = document.createElement("div");
      dltreview.innerText = "Your review was delete";
      dltreview.className = "dltreview";
      emptytwo.appendChild(dltreview);
      let dlticon = document.createElement("div");
      dlticon.innerText = "X";
      dlticon.className = "dlticon";
      dltreview.appendChild(dlticon);
      e.target.parentElement.remove();
    }
  }
};

let dreviewremove = (e) => {
  console.log(e.target.className.includes("dlticon"));
  e.target.parentElement.remove();
};

emptytwo.addEventListener("click", dreviewremove);

ul.addEventListener("click", removeli);

form.addEventListener("submit", savereview);
