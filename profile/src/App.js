import { useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import ProfileEditor from './component/ProfileEditor';
import ProfileList from './component/ProfileList';
import ProfileItem from './component/ProfileItem';


const user = {
  id: 1,
  userName: '',
  emal: '@.com',
  age: 10,
};

function App() {
  const [userArr, arrSet] = useState([{}]);

  const [user, userSet] = useState({
    userName: '',
    email: '',
    age: '',
  });
  const userRef = useRef(0);
  const onSave = () => {
    userSet({ ...user, id: userRef });
    arrSet(...userArr, user);
    userRef.current += 1;
  };

  return (
    <div className='App'>
      <Header />
      <ProfileEditor onSave={onSave} user = {user} userSet = {userSet}/>
      <ProfileList />
      <ProfileItem />
    </div>
  );
}
export default App;
