import { useState } from "react";
import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="items-container">
      <input
        type="checkbox"
        name="border-bottom"
        id="border-btn"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="border-bottom">Habilitar Linhas</label>
      {taskList.map((t, idx) => (
        <TaskItem
          key={`task-item-${idx}`}
          task={t}
          removeFromList={removeFromList}
          showBorderBottom={checked}
        />
      ))}
    </div>
  );
};

// Validação de propiedades

export default ItemsContainer;
