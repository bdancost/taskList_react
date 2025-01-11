import { useState } from "react";

const AddItemsContainer = ({ addToList }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    addToList(newTask);
    setNewTask("");
  };

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="add-items-container">
      <input
        type="text"
        value={newTask}
        onChange={(evt) => setNewTask(evt.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTask}>Adicionar</button>
    </div>
  );
};

export default AddItemsContainer;
