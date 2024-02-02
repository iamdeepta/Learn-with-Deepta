const fetchTodoData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // console.log({ response });
    const data = await response.json();

    // console.log(data);

    const div = document.querySelector(".div");
    data.map((item) => {
      const paragraph = document.createElement("p");
      paragraph.classList.add("para");
      paragraph.innerHTML = item.id + ". " + item.title;
      div.appendChild(paragraph);
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchPostData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // console.log(data);

    const postDiv = document.querySelector(".postDiv");
    data.map((item) => {
      const paragraph = document.createElement("p");
      paragraph.classList.add("paraPost");
      paragraph.innerHTML =
        item.id + ". " + item.title + ", Body: " + item.body;
      postDiv.appendChild(paragraph);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchTodoData();
fetchPostData();
