let btn = document.querySelector("button");
let btn_div = document.querySelector("#button_div");
let btn_list = document.querySelector("#button_list");

function onClick() {
  if (btn_list.innerText.length < 164) {
    btn_list.innerText += " meow";
  } else {
    return (btn_list.innerText = "");
  }
}

btn.addEventListener("click", onClick);
