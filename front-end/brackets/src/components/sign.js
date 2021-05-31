import React from 'react';
import SignIn from '../routes/auth/signin';
import SignUp from '../routes/auth/signup';

 export default function Sign(){
     return(<div class="user-panel row">
     <SignIn />  <SignUp />
     </div>)
 } 