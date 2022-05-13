import "./App.css";
import axios from "axios";

function App() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("El proceso fue exitoso"));

  axios.get("https://jsonplaceholder.typicode.com/users/5").then((response) => {
    console.log(response.data);
  });

  axios
    .post("https://jsonplaceholder.typicode.com/users", {
      id: 123823,
      name: "Jose Ramírez",
      username: "jramirez12",
    })
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.log(error);
    });
  axios
    .put("https://jsonplaceholder.typicode.com/users/5", { apodo: "Cris" })
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.log(error);
    });
  axios
    .delete("https://jsonplaceholder.typicode.com/users/5", {
      name: "Chelsey Dietrich",
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <h1>Mision Axios</h1>
    </div>
  );
}

export default App;
