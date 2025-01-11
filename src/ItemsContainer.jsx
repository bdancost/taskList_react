import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div>
      {taskList.map((t) => (
        <TaskItem key={t.id} task={t.task} removeFromList={removeFromList} />
      ))}
    </div>
  );
};

// Validação de propiedades
ItemsContainer.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  removeFromList: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
};

export default ItemsContainer;
