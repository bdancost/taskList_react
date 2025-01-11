import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList }) => {
  return (
    <div>
      {taskList.map((t) => (
        <TaskItem key={t.id} task={t.task} />
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
};

export default ItemsContainer;
