import React, { useState } from "react";

const isEmpty = (obj) => {
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === "object") return Object.keys(obj).length === 0;
  return true;
};

const DynamicDropdown = ({ data, depth = 0 }) => {
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    const selectedKey = e.target.value;
    if (selectedKey === '') {
      setSelected(null); // Reset selection if no value is selected
    } else {
      setSelected(selectedKey); // Allow selection for DNEG (empty object) or any key with data
    }
  };

  // Filtered keys only if there's data
  const filteredKeys = Object.keys(data);

  return (
    <div style={{ marginLeft: depth * 20 }}>
      <select onChange={handleChange} value={selected || ''}>
        <option value="">Select</option>
        {filteredKeys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      {/* Only render child dropdown if the selected key has data */}
      {selected && data[selected] && typeof data[selected] === "object" && !isEmpty(data[selected]) && (
        <DynamicDropdown data={data[selected]} depth={depth + 1} />
      )}
    </div>
  );
};

export default DynamicDropdown;
