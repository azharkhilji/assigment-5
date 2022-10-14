var items = document.getElementById("items");
var textField = document.getElementById('todo_product');
function addtodo() {

    var products = document.getElementById("todo_product")
    var li = document.createElement('li');
    li.setAttribute("id", "item")
    var litext = document.createTextNode(products.value);
    
    li.appendChild(litext);

    var editebtn = document.createElement("button")
    var edite_text = document.createTextNode("Edite");
    editebtn.setAttribute("onclick", "edite_product(this)")

    editebtn.appendChild(edite_text);

    li.appendChild(editebtn);

    var deletebtn = document.createElement("button")
    var delete_text = document.createTextNode("Delte");
    deletebtn.setAttribute("onclick", "deleteproduct(this)")
    deletebtn.appendChild(delete_text);

    li.appendChild(deletebtn);


    items.appendChild(li)
    products.value = "";

    //   console.log(li);
    //   console.log(products.value);

}

function deleteproduct(deltebtn) {

    deltebtn.parentNode.remove()

}

function edite_product(editebtn) {


    var valu = editebtn.parentNode.firstChild.data;

    console.log(valu);
    textField.value = valu;

    
 

}

