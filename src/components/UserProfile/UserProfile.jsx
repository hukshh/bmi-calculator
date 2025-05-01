import React, { useState } from 'react';
import styles from './UserProfile.module.css';

const UserProfile = ({ profile, onProfileUpdate }) => {
  const [isEditing, setIsEditing] = useState(!profile);
  const [formData, setFormData] = useState(profile || {
    name: '',
    age: '',
    gender: '',
    goal: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isEditing && profile) {
    return (
      <div className={styles.profile}>
        <div className={styles.header}>
          <h2>Profile</h2>
          <button
            onClick={() => setIsEditing(true)}
            className={styles.editButton}
          >
            Edit
          </button>
        </div>
        <div className={styles.info}>
          <div className={styles.field}>
            <span className={styles.label}>Name:</span>
            <span className={styles.value}>{profile.name}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Age:</span>
            <span className={styles.value}>{profile.age}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Gender:</span>
            <span className={styles.value}>{profile.gender}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Goal:</span>
            <span className={styles.value}>{profile.goal}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <h2>{profile ? 'Edit Profile' : 'Create Profile'}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
            max="120"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="goal">Health Goal</label>
          <select
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          >
            <option value="">Select goal</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>

        <div className={styles.buttons}>
          {profile && (
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          )}
          <button type="submit" className={styles.saveButton}>
            {profile ? 'Save Changes' : 'Create Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile; 