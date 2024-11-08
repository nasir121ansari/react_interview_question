import React, { useState } from "react";
 const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleonChane = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="mt-5">
      <form className="w-50 text-center" onSubmit={hanldeSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleonChane}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleonChane}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Form
