import React, { useState } from 'react';
export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  return(
    <form>
      <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
    </form>
  )
  // console.log(this.username.value);
  // console.log(this.password.value);

}
