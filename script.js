let upload = document.querySelector("#upload");
let btn_primary = document.querySelector(".btn-primary");
let span = document.querySelector(".error")
let clearbtn = document.querySelector(".clearbtn");
let ul = document.querySelector(".list-group");
let list = document.querySelector("li");

btn_primary.addEventListener("click", (e) => {
    e.preventDefault();
    if (upload.value.trim() == "") {
        span.classList.replace("d-block", "d-none");
    }
    else {
        let list = document.createElement("li");
        ul.innerHTML += `<li class="list-group-item li_list">${upload.value}`
        span.classList.replace("d-block", "d-none");
    }
    upload.value = ""
});

 let clear_btn = document.createElement("i");
 clear_btn.classList.add("clear_btn");
 list.append(i);
 ul.append(li);
 

