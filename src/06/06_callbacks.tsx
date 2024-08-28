import { MouseEvent } from "react";

export const User = () => {
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
   
    alert(event.currentTarget.name);
  };

  const saveUser = () => {
    alert("user was saved");
  };

  const onNameChanged = () => {
    console.log("name changed");
  };

  const focusLostHandler = () => {
    console.log("focus lost");
  };

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLostHandler}>
        Dimych
      </textarea>
      <input type="text" name="" id="" />
      <button name='delete' onClick={deleteUser}>x</button>
      <button name='save' onClick={deleteUser}>x</button>
    </div>
  );
};
