import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInfoUser, updateUserInfo } from '../redux/reducers/userSlice';

const UserNameEditor = ({ userDetails }) => {
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState(userDetails.userName);
  const [editing, setEditing] = useState(false);

  const initialState = {
    userName: "",
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      [name]: value
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo({ id: userDetails.id, userInfo: { userName: newUserName } }));
    dispatch(getInfoUser());
    setEditing(false);
    setFormData(initialState);

  };
  const onCancel = () => {
    setNewUserName(userDetails.userName);
    setEditing(false);
  };
  return (
    <>
      {editing ? (
        <div className='userNameEditor'>
          <h2>Edit user info</h2>
          <form onSubmit={onSubmit}>
            <span>
              <label htmlFor="username">User Name:</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your username"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onSubmit(e);
                  }
                }}
              /></span>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input className='interdit' type="text" id="champ_interdit" value={userDetails.firstName} name="champ_interdit" readOnly />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input className='interdit' type="text" id="champ_interdit" name="champ_interdit" value={userDetails.lastName} readOnly />
            </div>
            <div>
            </div>
            <div className='btnsection'>
              <button className='editSubmit' type="submit">Save</button>
              <button className='editSubmit' type="reset" onClick={onCancel}>Cancel</button>
            </div>
          </form></div>
      ) : (
        <div>
          <h1 className='welcome'>
            Welcome back
            <br />
            {userDetails.firstName} {userDetails.lastName} !
          </h1>
          <button className='editBtn' onClick={() => setEditing(true)}>Edit Username</button>
        </div>
      )}
    </>
  );
};

export default UserNameEditor;
