import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatEmail: "",
    repeatPassword: "",
    name: "",
    phone: "",
    street: "",
    city: "",
    country: "",
    website: "",
    gender: "",
    birthdate: "",
    nationality: "",
    hasChildren: false,
    acceptPolicy: false,
    receiveOffers: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://phrmsbackend.vercel.app/api/admin/signup", formData);
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="main-block">
      <form onSubmit={handleSubmit}>
        <h1>Create a free account</h1>
        <fieldset>
          <legend>
            <h3>Account Details</h3>
          </legend>
          <div className="account-details">
            <div>
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="password">Password*</label>
              <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="repeatEmail">Repeat email*</label>
              <input type="email" name="repeatEmail" id="repeatEmail" value={formData.repeatEmail} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="repeatPassword">Repeat password*</label>
              <input type="password" name="repeatPassword" id="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h3>Personal Details</h3>
          </legend>
          <div className="personal-details">
            <div>
              <label htmlFor="name">Name*</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="phone">Phone*</label>
              <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="street">Street</label>
              <input type="text" name="street" id="street" value={formData.street} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="city">City*</label>
              <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="country">Country*</label>
              <select name="country" id="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select Country</option>
                <option value="Armenia">Armenia</option>
                <option value="Russia">Russia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div>
              <label htmlFor="website">Website</label>
              <input type="text" name="website" id="website" value={formData.website} onChange={handleChange} />
            </div>
            <div>
              <label>Gender*</label>
              <div className="gender">
                <input type="radio" value="male" id="male" name="gender" checked={formData.gender === "male"} onChange={handleChange} required />
                <label htmlFor="male" className="radio">Male</label>
                <input type="radio" value="female" id="female" name="gender" checked={formData.gender === "female"} onChange={handleChange} required />
                <label htmlFor="female" className="radio">Female</label>
              </div>
            </div>
            <div>
              <label>Birthdate*</label>
              <div className="bdate-block">
                <select name="birthdateDay" className="day" value={formData.birthdate.day} onChange={handleChange} required>
                  <option value="">Day</option>
                  {/* Add options from 01 to 31 */}
                </select>
                <select name="birthdateMonth" className="month" value={formData.birthdate.month} onChange={handleChange} required>
                  <option value="">Month</option>
                  {/* Add month options */}
                </select>
                <input type="text" name="birthdateYear" value={formData.birthdate.year} onChange={handleChange} placeholder="Year" required />
              </div>
            </div>
            <div>
              <label htmlFor="nationality">Nationality*</label>
              <select name="nationality" id="nationality" value={formData.nationality} onChange={handleChange} required>
                <option value="">Select Nationality</option>
                <option value="Armenian">Armenian</option>
                <option value="Russian">Russian</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="American">American</option>
                <option value="English">English</option>
              </select>
            </div>
            <div>
              <label htmlFor="hasChildren">Children*</label>
              <input type="checkbox" name="hasChildren" id="hasChildren" checked={formData.hasChildren} onChange={handleChange} required />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h3>Terms and Mailing</h3>
          </legend>
          <div className="terms-mailing">
            <div className="checkbox">
              <input type="checkbox" name="acceptPolicy" checked={formData.acceptPolicy} onChange={handleChange} required />
              <span>I accept the <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs.</a></span>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="receiveOffers" checked={formData.receiveOffers} onChange={handleChange} />
              <span>I want to receive personalized offers by your site</span>
            </div>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
