export const test = () => {
    console.log('from test');
};

let none = document.getElementById("none");
let remove = document.getElementById("remove");

remove.onclick = function () {
    none.style.display = "none";
};
