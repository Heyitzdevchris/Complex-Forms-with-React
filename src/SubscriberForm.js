// Import necessary dependencies
import React, { useState } from "react";

// Define the SubscriberForm component
function SubscriberForm() {
  // Define the initial form state
  const initialFormState = {
    name: "",
    email: "",
    referral: "",
    age: "",
    subscription: true,
  };

  // Initialize form data state using useState hook and spread initialFormState
  const [formData, setFormData] = useState({ ...initialFormState });

  // Define the handleChange event handler
  const handleChange = ({ target }) => {
    // Determine the value based on the target type
    const value = target.type === "checkbox" ? target.checked : target.value;

    // Update the form data state by spreading existing data and updating the target field
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  // Define the handleSubmit event handler
  const handleSubmit = (event) => {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Log the form data
    console.log("Submitted:", formData);

    // Reset the form data state to initialFormState
    setFormData({ ...initialFormState });
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      {/* ---------- Enter Your Name ---------- */}

      <label htmlFor="name">
        Enter Your Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />

      {/* ---------- Enter Your Email ---------- */}

      <label htmlFor="email">
        Your Email:
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>
      <br />

      {/* ---------- How Did You Hear About Us? ---------- */}

      <label htmlFor="referral">
        How did you hear about us?
        <select
          id="referral"
          name="referral"
          onChange={handleChange}
          value={formData.referral}
        >
          <option value="">-- Select an Option --</option>
          <option value="twitter">Twitter</option>
          <option value="wom">Word of Mouth</option>
          <option value="youtube">YouTube</option>
        </select>
      </label>

      {/* ---------- How Old Are You? ---------- */}

      <fieldset>
        <legend>How old are you?</legend>
        <label htmlFor="low">
          Under 18
          <input
            id="low"
            type="radio"
            name="age"
            onChange={handleChange}
            value="low"
            checked={formData.age === "low"}
          />
        </label>
        <label htmlFor="middle">
          18 - 60
          <input
            id="middle"
            type="radio"
            name="age"
            onChange={handleChange}
            value="middle"
            checked={formData.age === "middle"}
          />
        </label>
        <label htmlFor="high">
          Over 60
          <input
            id="high"
            type="radio"
            name="age"
            onChange={handleChange}
            value="high"
            checked={formData.age === "high"}
          />
        </label>
      </fieldset>

      {/* ---------- Subscribe? ---------- */}

      <label htmlFor="subscription">
        Receive email notifications?
        <input
          id="subscription"
          type="checkbox"
          name="subscription"
          onChange={handleChange}
          checked={formData.subscription}
          value="subscription"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

// Export the SubscriberForm component as the default export
export default SubscriberForm;
