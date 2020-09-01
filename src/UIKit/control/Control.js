import PropTypes from 'prop-types';
import React from 'react';

export default function Control({
  label, containerStyle = {}, containerClassName = '', ...props
}) {
  return (
    <div className={`custom-control custom-checkbox ${containerClassName}`} style={containerStyle}>
      <input type="checkbox" className="custom-control-input" id="signup-agree" {...props} />
      <label className="custom-control-label text-small text-muted" htmlFor="signup-agree">
        {label}
      </label>
    </div>
  );
}

Control.propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  label: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
};
