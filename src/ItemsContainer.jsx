import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className="items-container">
      {taskList.map((t, idx) => (
        <TaskItem
          key={`task-item-${idx}`}
          task={t}
          removeFromList={removeFromList}
        />
      ))}
    </div>
  );
};

// Validação de propiedades

export default ItemsContainer;
