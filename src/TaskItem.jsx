import PropTypes from "prop-types";

const TaskItem = ({ task, removeFromList }) => {
  return (
    <div className="task-item">
      <p>{task}</p>;<button onClick={() => removeFromList(task)}>Apagar</button>
    </div>
  );
};
TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
  removeFromList: PropTypes.func.isRequired,
};

export default TaskItem;
