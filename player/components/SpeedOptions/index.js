import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Option, ListOptions } from './styles';

function SpeedOptions({ oncChangeSpeed, currentValue }) {
  function handleChange(val) {
    oncChangeSpeed(val);
  }

  return (
    <>
      <ListOptions>
        <Option
          label="0.5"
          current={currentValue}
          onClick={() => handleChange(0.5)}
        />
        <Option
          label="1.0"
          current={currentValue}
          onClick={() => handleChange(1)}
        />
        <Option
          label="1.5"
          current={currentValue}
          onClick={() => handleChange(1.5)}
        />
        <Option
          label="2.0"
          current={currentValue}
          onClick={() => handleChange(2)}
        />
        <Option
          label="2.5"
          current={currentValue}
          onClick={() => handleChange(2.5)}
        />
        <Option
          label="3.0"
          current={currentValue}
          onClick={() => handleChange(3)}
        />
      </ListOptions>
    </>
  );
}

SpeedOptions.propTypes = {
  oncChangeSpeed: PropTypes.func,
  currentValue: PropTypes.number
};

SpeedOptions.defaultProps = {
  oncChangeSpeed: () => {},
  currentValue: 1
};

export default memo(SpeedOptions);
