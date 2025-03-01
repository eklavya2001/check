import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [inputData, setInputData] = useState("");

  // Fetch data from the backend (GET request)
  const fetchData = async () => {
    try {
      const response = await fetch("https://check-backend-njov.onrender.com", {
        method: "GET",
        credentials: "include", // This is necessary for cookies or authentication headers if required
      });
      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Send data to the backend (POST request)
  const sendData = async () => {
    try {
      const response = await fetch("https://check-backend-njov.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputData }), // Sending input data to backend
        credentials: "include", // This is necessary for cookies or authentication headers if required
      });
      const result = await response.json();
      setData(result.data); // Display received data
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Basic React + Express App</h1>

      {/* Button to fetch data from backend */}
      <button onClick={fetchData}>Fetch Message</button>
      <p>{message}</p>

      {/* Form to send data to backend */}
      <input
        type="text"
        placeholder="Enter data"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={sendData}>Send Data</button>
      <p>{data && `Received data: ${data}`}</p>
    </div>
  );
}

export default App;
