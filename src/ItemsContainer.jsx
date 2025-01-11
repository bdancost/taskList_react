import PropTypes from "prop-types";

const ItemsContainer = ({ taskList }) => {
  return <p> {taskList[0]} </p>;
};

// Validação de propiedades
ItemsContainer.propTypes = {
  taskList: PropTypes.arrayOf.isRequired,
};

export default ItemsContainer;
