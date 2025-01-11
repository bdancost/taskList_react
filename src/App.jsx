import { useState } from "react";
import ItemsContainer from "./ItemsContainer";
import AddItemsContainer from "./AddItemsContainer";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  const removeFromList = (taskToRemove) => {
    const newList = taskList.filter((task) => task.id !== taskToRemove.id);
    setTaskList(newList);
  };

  const addToList = (newTask) => {
    const newTaskObject = {
      id: Date.now(),
      task: newTask,
    };

    setTaskList([...taskList, newTaskObject]);
  };

  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <AddItemsContainer addToList={addToList} />
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
