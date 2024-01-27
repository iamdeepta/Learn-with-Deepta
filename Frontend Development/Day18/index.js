//promise

// async await

const function1 = async () => {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Code executed");
      }, 10000);

      return Promise.resolve();
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hello");
      }, 3000);

      return Promise.resolve();
    });

    const promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hello World");
      }, 3000);

      return Promise.resolve();
    });

    await promise
      .then(() => {
        promise2;
      })
      .then(() => {
        promise3;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

// function1();

//api fetch
const fetchData = () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        const div = document.querySelector(".div");
        data.map((item) => {
          const paragraph = document.createElement("p");
          paragraph.classList.add("para");
          paragraph.innerHTML = item.id + ". " + item.name;
          div.appendChild(paragraph);
        });
      });
  } catch (error) {
    console.log(error);
  }
};

//async await
const fetchDataAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const data = await response.json();

    const div = document.querySelector(".div");
    data.map((item) => {
      const paragraph = document.createElement("p");
      paragraph.classList.add("para");
      paragraph.innerHTML = item.id + ". " + item.name;
      div.appendChild(paragraph);
    });
  } catch (error) {
    console.log(error);
  }
};

// fetchData();
fetchDataAsyncAwait();
