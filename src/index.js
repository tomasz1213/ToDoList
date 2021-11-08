// const contentDiv = document.querySelector('.app__tasks');
// const form = document.querySelector('.app__form');
// const input = document.getElementById('ipt');
// const button = document.getElementById('btn');
// const buttonAll = document.querySelector('.app__buttons--all');
// const buttonActive = document.querySelector('.app__buttons--active');
// const buttonCompleted = document.querySelector('.app__buttons--completed');
// buttonActive.classList.remove('app__buttons--active');
// buttonCompleted.classList.remove('app__buttons--completed');
//
// let arr = [];
// let id = 0;
//
// class Tasks {
//     constructor(id, text) {
//         this.id = id;
//         this.text = text;
//         this.completed = false;
//     }
// }
//
// function generateData(object) {
//     const para = document.createElement('p');
//     const inputs = document.createElement('input');
//
//     contentDiv.appendChild(para);
//     inputs.setAttribute("type", "checkbox");
//     inputs.setAttribute("id", object.id);
//     para.appendChild(inputs);
//     inputs.after(' '+object.text);
//     if (object.completed === true){
//         para.style.textDecoration = "line-through";
//         inputs.checked = true;
//
//         const delButton = document.createElement('button');
//         delButton.setAttribute('class','delButton');
//         delButton.setAttribute('id', object.id);
//         delButton.setAttribute('type', 'submit');
//         para.appendChild(delButton);
//     }
// }
//
// function createElements (val) {
//     contentDiv.querySelectorAll('*').forEach(n => n.remove());
//     let list = arr.filter(element => element.completed === val);
//     list.forEach((element)=> {
//         generateData(element);
//     });
// }
//
// function updateTasks() {
//     let checkBoxes=document.querySelectorAll("input[type=checkbox]"),
//         x=checkBoxes.length;
//     while(x--){
//         checkBoxes[x].addEventListener('click',function(){
//             let uid = this.getAttribute('id');
//             let object = arr[uid];
//             if (object.id === parseInt(uid) && this.checked === true){
//                 object.completed = true;
//                 let parent = this.parentNode;
//                 parent.style.textDecoration = "line-through";
//             }else {
//                 this.checked = true;
//             }
//         });
//     }
// }
// function updateDel() {
//     let dellButtons=document.querySelectorAll("button[type=submit]"),
//         y=dellButtons.length;
//     while(y--)
//         dellButtons[y].addEventListener('click',function(){
//             let uid = this.getAttribute('id');
//             let activeparagraph = this.parentNode;
//             delete arr[uid];
//             activeparagraph.remove();
//
//         });
// }
// function stage(mode){
//     updateTasks();
//     function sortButtons(text){
//         let buttons = document.getElementsByClassName('delButton');
//         let  buttonL = buttons.length;
//         if (buttonL > 0){
//             for (let i=0;i<buttonL;i++){
//                 buttons[i].style.display = text;
//             }
//         }
//     }
//     if (mode === 0){
//         sortButtons('none');
//         buttonAll.classList.add('app__buttons--all');
//         buttonActive.classList.remove('app__buttons--active');
//         buttonCompleted.classList.remove('app__buttons--completed');
//         form.style.display = 'unset';
//     }else if (mode === 1){
//         buttonAll.classList.remove('app__buttons--all');
//         buttonCompleted.classList.remove('app__buttons--completed');
//         buttonActive.classList.add('app__buttons--active');
//         form.style.display = 'unset';
//     }else if(mode === 2){
//         form.style.display = 'none';
//         buttonAll.classList.remove('app__buttons--all');
//         buttonCompleted.classList.add('app__buttons--completed');
//         buttonActive.classList.remove('app__buttons--active');
//         sortButtons('unset');
//         updateDel();
//     }
// }
//
// button.addEventListener('click', ()=> {
//     let task = new Tasks(id,input.value);
//     generateData(task);
//     updateTasks();
//     arr.push(task);
//     id++;
//     input.value = '';
// });
// buttonAll.addEventListener('click', () => {
//     contentDiv.querySelectorAll('*').forEach(n => n.remove());
//     arr.forEach((element)=> generateData(element));
//     stage(0);
// });
// buttonActive.addEventListener('click', () => {
//     createElements(false);
//     stage(1);
// });
// buttonCompleted.addEventListener('click', () => {
//     createElements(true);
//     stage(2);
// });