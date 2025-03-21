// const input1 = document.querySelector("#inp-1");
// const inp_btn = document.querySelector("#inp_btn");
// let push_inpt = document.querySelector(".task_show");
// let editbtn = document.getElementById("edit_btn");
// let deletebtn = document.getElementById("del_btn");
// let del = document.querySelector(".specialpara");
// console.log(del);


// inp_btn.addEventListener('click',event=>{
//         form_submiting();
//         inp_btn.value.textContent = '';
// });


// function form_submiting(){
//     const inp_data = input1.value;
//         if(!inp_data){
//             alert("Please fill out the task");
//         }
//         else {
//             create_para(inp_data);
//         }
// }

// function create_para(inp_data) {
//     var para = document.createElement('p');
//     let para1 = document.querySelector(".Task-add-section");
//     para1.appendChild(para);
//     para.textContent = inp_data;
//     para.setAttribute( 'class',"specialpara");

// }

// function edit_para(inp_data) {}

// deletebtn.addEventListener('click', event=> {
//     delete_btn();
// });

// function delete_btn() {
//     let del = document.querySelector("specialpara");
//     if(del === null) {
//         alert('Fill the to do list.')
//     }
//     else {
//         del.remove;
//     }
// }





const input1 = document.querySelector("#inp-1");
const inp_btn = document.querySelector("#inp_btn");
let push_inpt = document.querySelector(".task_show");
let editbtn = document.getElementById("edit_btn");
let deletebtn = document.getElementById("del_btn");
let del = document.querySelector(".specialpara");
console.log(del);

inp_btn.addEventListener('click', event => {
    form_submiting();
    input1.value = ''; // Clear the input field
});

function form_submiting() {
    const inp_data = input1.value;
    if (!inp_data) {
        alert("Please fill out the task");
    } else {
        create_para(inp_data);
    }
}

function create_para(inp_data) {
    var para = document.createElement('p');
    let para1 = document.querySelector(".Task-add-section");
    para1.appendChild(para);
    para.textContent = inp_data;
    para.setAttribute('class', "specialpara");
}

deletebtn.addEventListener('click', event => {
    delete_btn();
});

function delete_btn() {
    let del = document.querySelector(".specialpara"); // Corrected selector
    if (del === null) {
        alert('Fill the to-do list.');
    } else {
        del.remove(); // Remove the element entirely
    }
}

editbtn.addEventListener('click', event => {
    edit_para();
});

function edit_para() {
    let del = document.querySelector(".specialpara");
    if (del !== null) {
        let newTask = prompt("Edit your task:", del.textContent);
        if (newTask !== null) {
            del.textContent = newTask;
        }
    } else {
        alert('No task to edit.');
    }
}
