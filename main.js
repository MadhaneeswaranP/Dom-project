var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form Submit Event
form.addEventListener("submit", addItems);
itemList.addEventListener("click", removeItems);
filter.addEventListener("keyup", filterItems);

function addItems(e) {
  e.preventDefault();

  var newItem = document.getElementById("item").value;

  var li = document.createElement("li");

  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  var deletebtn = document.createElement("button");

  deletebtn.className = "btn btn-danger btn-sm float-right delete";

  deletebtn.appendChild(document.createTextNode("X"));

  li.appendChild(deletebtn);

  itemList.appendChild(li);
}

function removeItems(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure?")) {
        var li = e.target.parentElement;
        //console.log(li);
        itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items=itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
    })

}
