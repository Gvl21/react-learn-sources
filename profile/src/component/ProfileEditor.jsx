import React, { useRef, useState } from 'react';

function ProfileEditor({ onSave, user, userSet }) {
  const onChangeHandler = (event) => {
    userSet((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  //   const onClickHandler = () => {
  //     onSave()
  //   };


  return (
    <div>
      <input
        type='text'
        id='nameId'
        value={user.name}
        onChange={onChangeHandler}
      />
      <input
        type='text'
        id='emailId'
        value={user.email}
        onChange={onChangeHandler}
      />
      <input
        type='text'
        id='ageId'
        value={user.age}
        onChange={onChangeHandler}
      />
      <button onClick={onSave}>눌러</button>
    </div>
  );
}

export default ProfileEditor;
