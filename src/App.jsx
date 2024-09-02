import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Hello useeFFFECT");
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      console.log(data);
      setUsers([...users]);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
