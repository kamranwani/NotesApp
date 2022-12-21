const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  removePopUp = document.querySelector(".removePopUp"),
  addBtn = document.querySelector(".addBtn"),
  titleTag = document.querySelector("input"),
  descTag = document.querySelector("textarea"),
  addData = document.querySelector(".details");

let counter = 0;
addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});
removePopUp.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

// loading data in html
loadNote = (noteInfo) => {
  document.querySelector(".Note");
  const div = document.createElement("div");
  div.innerHTML = `
            <h2>${noteInfo.title}</h2>
            <p>
              ${noteInfo.description}
            </p>
          </div>
          <div class="btm-content">
            <div class="date">${noteInfo.date}</div>
            <div class="settings">...</div>`;
  document.querySelector(".Note").appendChild(div);
  div.classList.add("details");
  div.setAttribute("id", noteInfo.id);
  popupBox.classList.remove("show");
};

// this event is setting up new note in this app
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  counter++;
  let noteTitle = titleTag.value,
    noteDesc = descTag.value;
  if (noteTitle || noteDesc) {
    let dateObj = new Date(),
      month = dateObj.getMonth(),
      day = dateObj.getDay(),
      year = dateObj.getFullYear();

    let noteInfo = {
      id: counter,
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day} ${year}`,
    };
    loadNote(noteInfo); //calling fuction to load note in html//
  }
});
