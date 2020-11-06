import { useState } from "react";

import "./App.css";
import CreateTask from "./CreateTask";
import ScoreTask from "./ScoreTask";

function App() {
  const [task, setTask] = useState("");
  const [taskCreatedSnackbar, settaskCreatedSnackbar] = useState(false);

  const showCreateMessage = () => {
    setTask("");
    settaskCreatedSnackbar(true);
    setTimeout(() => {
      settaskCreatedSnackbar(false);
    }, 2500);
  };

  return (
    <div className="app">
      <h3 className="app__postname">Instructor</h3>
      <h3 className="app__username">Surya Mahla</h3>
      {taskCreatedSnackbar && (
        <div className="app__snackbar">Task Created!</div>
      )}
      {task === "create" ? (
        <CreateTask showCreateMessage={showCreateMessage} />
      ) : task === "score" ? (
        <ScoreTask />
      ) : (
        <div className="app__content">
          <img
            src="https://uploads-ssl.webflow.com/5e2544675cbbd67ed72643de/5e254b8eb2b645c1cc1332ae_Logo-p-500.png"
            alt="logo"
          ></img>
          <div className="app__buttons">
            <button onClick={() => setTask("create")}>Create Task</button>
            <button onClick={() => setTask("score")}>Score Tasks</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
