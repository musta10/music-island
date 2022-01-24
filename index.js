import {
  saveTask,
  getTasks,
  onGetTasks,
  deleteTask,
  getTask,
  updateTask,
} from "./firbase.js";
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = '';

window.addEventListener("DOMContentLoaded", async () => {
  onGetTasks((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
            <div class="card card-body mt-4">
            <h3>${task.description}</h3>
            <p>${task.name} ha compartido una canción</p>
            <a class="mb-3" href=${task.url}>Ver publicación</a>
            <button class='btn-delete btn btn-primary mt-3' data-id="${doc.id}">Eliminar</button>
            </div>`;
    });

    tasksContainer.innerHTML = html;
    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        deleteTask(dataset.id);
      });
    });

    // const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    // btnsEdit.forEach((btn) => {
    //   btn.addEventListener("click", async ({ target: { dataset } }) => {
    //     // console.log(dataset.id);
    //     const doc = await getTask(dataset.id);
    //     const task = doc.data();
    //     taskForm["description"].value = task.description;
    //     taskForm["name"].value = task.name;
    //     taskForm["url"].value = task.url;

    //     editStatus = true;
    //     id = doc.id;
    //   });
    // });
  });
});

const taskForm = document.getElementById("form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = taskForm["name"];
  const url = taskForm["url"];
  const description = taskForm["description"];

  if (!editStatus) {
    saveTask(name.value, url.value, description.value);
  } else {
    updateTask(id, {name: name.value, url: url.value, description: description.value});

    editStatus = false;
  }

  taskForm.reset();
});
