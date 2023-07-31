import Card from './components/UI/Card';
import UserForm from './components/UserForm/NewUserForm';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import {useState} from 'react';

import style from './App.module.scss';

const usersArr = [
    {
        id: '28098965119384',
        name: 'Thiago Tavares',
        age: 32,
        email: 'thiago.tavares.freire@gmail.com',
        position: 'Bartender',
        isEditOpen: false,
    },
    {
        id: '6512258193052',
        name: 'Alina',
        age: 27,
        email: 'alina@gmail.com',
        position: 'Manager',
        isEditOpen: false,
    },
    {
        id: '53156962376074',
        name: 'Neil',
        age: 27,
        email: 'neil@gmail.com',
        position: 'Manager',
        isEditOpen: false,
    },
    {
        id: '978072821263146',
        name: 'John Doe',
        age: 47,
        email: 'john@gmail.com',
        position: 'CEO',
        isEditOpen: false,
    },
];

function App(props) {
    const [usersList, setUsersList] = useState(usersArr);
    const [userFormState, setUserFormState] = useState(false);

    const addNewUserHandler = newUser => setUsersList([newUser, ...usersList]);

    const deleteUserHandler = id => {
        const userIndex = usersList.findIndex(usr => usr.id === id);
        usersList.splice(userIndex, 1);
        setUsersList([...usersList]);
    };

    const userEditStateHandler = data => {
        // handle data on userList state
        setUsersList(
            usersList.map(usr => {
                if (usr.email === data) {
                    if (usr.isEditOpen === false) usr.isEditOpen = true;
                    else usr.isEditOpen = false;
                }
                return usr;
            })
        );
    };

    const editUserHandler = updatedUser => {
        const updatedUsersList = usersList.map(usr => {
            if (usr.id === updatedUser.id) return updatedUser;
            return usr;
        });

        setUsersList(updatedUsersList);
    };

    return (
        <div className={style.app}>
            <Header />
            <Card>
                {' '}
                <UserForm
                    userFormState={userFormState}
                    openCloseForm={setUserFormState}
                    getNewUser={addNewUserHandler}
                />
            </Card>

            <Card>
                <UserList
                    users={usersList}
                    sendEditUserStateUp={userEditStateHandler}
                    deleteUser={deleteUserHandler}
                    editUser={editUserHandler}
                />
            </Card>
        </div>
    );
}

export default App;
