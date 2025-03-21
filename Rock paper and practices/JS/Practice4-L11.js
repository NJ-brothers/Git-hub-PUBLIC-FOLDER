// let todo_input = document.getElementById("input_1");
// let add_buton = document.getElementById("add_btn");
// let todo_List = [{
//     name: 'wash',
//     duedate:'2020'
//     }
// ];

// add_buton.addEventListener("click",event=>{
//     getdata();
// });

// function getdata() {
//     let input1 = todo_input.value;
//     const due_date = document.querySelector(".duedateinput");
//     const duedateinp = due_date.value;
//     const newTodo = {
//         name:input1,
//         date:duedateinp
//     };


//     todo_List.push(input1);
//     todo_List.push(newTodo);
//     todo_input.value = "";

//     rendertodolist();

// }

// function rendertodolist() {
//     let todo_addHTML = "";

//     for(let i = 0; i < todo_List.length; i++) {
//         const todo_loop = todo_List[i];
//         const { name , duedate } = todo_loop;
//         const html = `
//         <p> ${name} ${duedate} 
//             <button class = "del_buton" onclick = "
//             todo_List.splice(${i},1)
//             rendertodolist();
//             ">Delete</button>
//         </p>`;
//         todo_addHTML += html;
//         // document.querySelector(".para1").innerHTML = todo_loop;

//     }

//     document.querySelector(".js-todolist").innerHTML = todo_addHTML;

// }






let todo_input = document.getElementById("input_1");
let add_button = document.getElementById("add_btn");
let todo_List = [
];

add_button.addEventListener("click", () => {
    getdata();
});

function getdata() {
    let input1 = todo_input.value;
    const due_date = document.querySelector(".duedateinput");
    const duedateinp = due_date.value;

    if (input1 && duedateinp) {
        // Create a new todo item object
        const newTodo = {
            name: input1,
            duedate: duedateinp
        };
        // Add the object to the todo list
        todo_List.push(newTodo);

        console.log(todo_List);

        // Clear input fields
        todo_input.value = "";
        due_date.value = "";

        rendertodolist();
    } else {
        alert("Please fill in both fields!");
    }
}

function rendertodolist() {
    let todo_addHTML = "";

    for (let i = 0; i < todo_List.length; i++) {
        const todo_loop = todo_List[i];
        const { name, duedate } = todo_loop;

        const html = `
        <p> ${name} - ${duedate} 
            <button class="del_button" onclick="
            todo_List.splice(${i},1);
            rendertodolist();
            ">Delete</button>
        </p>`;
        todo_addHTML += html;
    }

    document.querySelector(".js-todolist").innerHTML = todo_addHTML;
}