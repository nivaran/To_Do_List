// manipulating local storage

function newupdate() {
    console.log("ram");
    ti = document.getElementById('title').value;
    de = document.getElementById('description').value;
    if (localStorage.getItem('tolist') == null) {
        todolist = [];
        todolist.push([ti, de]);
        localStorage.setItem('tolist', JSON.stringify(todolist))
    }
    else {
        todolist1 = localStorage.getItem('tolist');
        todolist = JSON.parse(todolist1);
        todolist.push([ti, de]);
        localStorage.setItem('tolist', JSON.stringify(todolist));
    }
    update();
}
// manipulating table

function update() {
    if (localStorage.getItem('tolist') == null) {
        todolist = [];
        localStorage.setItem('tolist', JSON.stringify(todolist))
    }
    else {
        todolist1 = localStorage.getItem('tolist');
        todolist = JSON.parse(todolist1);
    }
    let foda = document.getElementById("table");
    let str = "";
    todolist.forEach((element, index) => {
        str += `
            <tr>
              <td>${index + 1}</td>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})" >Delete</button>
          </tr>`;
    })
    foda.innerHTML = str;
}
//Delete item in table

deleted = (itemindex) => {
    todolist1 = localStorage.getItem('tolist');
    todolist = JSON.parse(todolist1);
    todolist.splice(itemindex, 1);
    localStorage.setItem('tolist', JSON.stringify(todolist));
    update();
}

//Deleting  whole list & it's items from table and localstorage both

cleared = () => {
    if (localStorage.tolist.length > 2) {

        if (confirm("Do you really want to clear the list ?")) {
            localStorage.clear()
        }
    }
    else {
        alert("Already Empty !")
    }
    update();
}
//Event for add list

let arr = document.getElementById("abram");
arr.addEventListener("click", newupdate);
update();
