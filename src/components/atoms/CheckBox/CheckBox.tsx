import React from 'react';

const CheckboxWithLabel = ({ id, label, checked, onChange }) => {
  return (
    <div style={styles.container}>
      
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        style={styles.checkbox}
      />
      <label htmlFor={id} style={styles.label}>
        {label}
      </label>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
  },
};

export default CheckboxWithLabel;
