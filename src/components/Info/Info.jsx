import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ weight, height, id, date, bmi, category, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            BMI: {bmi} / Category: {category}
          </span>
          <div className="card-data">
            <span>Weight: {weight} kg</span>
            <span>Height: {height} cm</span>
            <span>Date: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Info;
