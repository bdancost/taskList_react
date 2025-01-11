import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
  return <p>{task}</p>;
};

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};

export default TaskItem;
