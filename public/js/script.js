const edit_buttons = document.querySelectorAll(".edit");
const delete_buttons = document.querySelectorAll(".delete");
const toastEl = document.querySelector("#mytoast");
const toast = new bootstrap.Toast(toastEl,[]);
const deletefinal = document.querySelector("#delete-final");

for(const edit_button of edit_buttons){
  edit_button.addEventListener("click", (e) => {
    console.log(e.target.dataset.id);
    const path = '/edit/' + e.target.dataset.id;
    window.location.href = path;
  });
  
}

for(const delete_button of delete_buttons){
    delete_button.addEventListener("click", (e) => {
    toast.show();
    deletefinal.dataset.id = e.target.dataset.id;
});
}

deletefinal.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    fetch(`/delete/${id}`, {method: "DELETE"})
    .then((res) => res.json())
    .then((data)=> window.location.href = data.redirect)
    .catch((err) => console.log(err));

});