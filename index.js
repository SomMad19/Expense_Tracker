const form = document.querySelector("form");
const e_amt = document.getElementById("amt");
const e_descr = document.getElementById("descr");
const type = document.querySelector("select");
const data = document.querySelector("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const li = document.createElement("li");
    li.textContent = `${e_amt.value} - ${e_descr.value} - ${type.value}`;
    data.appendChild(li);

    e_amt.value = "";
    e_descr.value = "";
    type.value = "fuel";

    const del = document.createElement("button");
    del.className = "delete";
    del.innerHTML = "Delete";
    li.append(del);

    del.addEventListener("click", function (event) {
        event.preventDefault();
        data.removeChild(li);
    })


    const edit = document.createElement("button");
    edit.className = "edit";
    edit.innerHTML = "Edit";
    li.append(edit);

    edit.addEventListener("click", function (event) {
        event.preventDefault();
        const parts = li.textContent.replace("EditDelete", "").split(" - ");
        const amount = parts[0];
        const descr = parts[1];
        const category = parts[2];

        e_amt.value = amount;
        e_descr.value = descr;
        type.value = category;

        data.removeChild(li);


    })
});