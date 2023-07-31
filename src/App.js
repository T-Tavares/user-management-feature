import Card from './components/UI/Card';
import UserForm from './components/UserForm/NewUserForm';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import Message from './components/UI/Message';
import {useState} from 'react';

import style from './App.module.scss';

const usersArr = [
    {
        id: '28098965119384',
        name: 'Thiago Tavares',
        age: 32,
        email: 'thiago.tavares.freire@gmail.com',
        position: 'CEO',
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
        position: 'Bar Manager',
        isEditOpen: false,
    },
];

function App(props) {
    const [usersList, setUsersList] = useState(usersArr);
    const [userFormState, setUserFormState] = useState(false);
    const [errorMessagePopUp, setErrorMessagePopUp] = useState('');

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

    const errorMessagePopUpHandler = errorMessage => setErrorMessagePopUp(errorMessage);
    const closeErrorMessagePopUpHandler = () => setErrorMessagePopUp('');

    return (
        <div className={style.app}>
            {errorMessagePopUp === '' ? (
                ''
            ) : (
                <Message errorMessage={errorMessagePopUp} closeErrorMessage={closeErrorMessagePopUpHandler} />
            )}
            <Header />
            <Card>
                {' '}
                <UserForm
                    userFormState={userFormState}
                    openCloseForm={setUserFormState}
                    getNewUser={addNewUserHandler}
                    onInputError={errorMessagePopUpHandler}
                />
            </Card>

            <Card>
                <UserList
                    users={usersList}
                    sendEditUserStateUp={userEditStateHandler}
                    deleteUser={deleteUserHandler}
                    editUser={editUserHandler}
                    onInputError={errorMessagePopUpHandler}
                />
            </Card>
        </div>
    );
}

export default App;
