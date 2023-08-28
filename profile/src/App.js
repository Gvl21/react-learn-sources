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
    const [user, setUser] = useState([{
        name: '',
        email: '',
        age: '',}])
  const idRef = useRef(0);
  const onCreate = (nameValue, emailValue, ageValue) => {
    const newUser = {
      id: idRef.current,
      userName: nameValue,
      emal: emailValue,
      age: ageValue,
    };
    setUser([newUser, ...user]);
    idRef.current += 1;
  };

  return (
    <div className='App'>
      <Header />
      <ProfileEditor onCreate={onCreate} />
      <ProfileList />
      <ProfileItem user={user} />
    </div>
  );
}

export default App;
