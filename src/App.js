import Card from './components/UI/Card';
import UserForm from './components/UserForm/NewUserForm';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import {useState} from 'react';

import style from './App.module.scss';

const usersArr = [
    {
        name: 'Thiago Tavares',
        age: 32,
        email: 'thiago.tavares.freire@gmail.com',
        position: 'Bartender',
        isEditOpen: false,
    },
    {
        name: 'Alina',
        age: 27,
        email: 'alina@gmail.com',
        position: 'Manager',
        isEditOpen: false,
    },
    {
        name: 'Neil',
        age: 27,
        email: 'neil@gmail.com',
        position: 'Manager',
        isEditOpen: false,
    },
];

function App(props) {
    const [usersList, setUsersList] = useState(usersArr);
    const [userFormState, setUserFormState] = useState(false);

    const userEditStateHandler = data => {
        // handle data on userList state
        setUsersList(
            usersArr.map(usr => {
                if (usr.email === data) {
                    if (usr.isEditOpen === false) usr.isEditOpen = true;
                    else usr.isEditOpen = false;
                }
                return usr;
            })
        );
    };

    return (
        <div className={style.app}>
            <Header />
            <Card>
                {' '}
                <UserForm userFormState={userFormState} openCloseForm={setUserFormState} />
            </Card>

            <Card>
                <UserList users={usersList} sendEditUserStateUp={userEditStateHandler} />
            </Card>
        </div>
    );
}

export default App;
