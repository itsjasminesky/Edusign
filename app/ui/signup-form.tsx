import { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    childName: '',
    age: '',
    parentName: '',
    parentPhoneNumber: '',
    preferredLanguage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      email: '',
      password: '',
      childName: '',
      age: '',
      parentName: '',
      parentPhoneNumber: '',
      preferredLanguage: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="childName">Child's Name</label>
        <input
          type="text"
          id="childName"
          name="childName"
          value={formData.childName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Child's Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="parentName">Parent's Name</label>
        <input
          type="text"
          id="parentName"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="parentPhoneNumber">Parent's Phone Number</label>
        <input
          type="tel"
          id="parentPhoneNumber"
          name="parentPhoneNumber"
          value={formData.parentPhoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="preferredLanguage">Preferred Language</label>
        <select
          id="preferredLanguage"
          name="preferredLanguage"
          value={formData.preferredLanguage}
          onChange={handleChange}
          required
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}
