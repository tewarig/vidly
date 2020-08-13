import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <lable htmlFor={name}>{label}</lable>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {options.map((optoin) => (
          <option key={optoin._id} value={optoin._id}>
            {optoin.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger"> </div>}
    </div>
  );
};

export default Select;
