// ---------------------------------------------------------------- //
// --------------------------- IMPORTS ---------------------------- //
// ---------------------------------------------------------------- //

// -------------------------- COMPONENTS -------------------------- //

import Card from './components/UI/Card';
import UserForm from './components/UserForm/NewUserFormRef';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';
import Message from './components/UI/Message';

// ---------------------------- REACT ----------------------------- //
import {useState} from 'react';

// ------------------- MODULES | HELPERS | DATA ------------------- //

import {usersData} from './data/usersList';
import style from './App.module.scss';

// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //

function App() {
    // ------------------------- STATE HOOKS -------------------------- //

    const [usersList, setUsersList] = useState(usersData);
    const [userFormState, setUserFormState] = useState(false);
    const [errorMessagePopUp, setErrorMessagePopUp] = useState('');

    // ------------------- NEW USER FORM - HANDLER -------------------- //

    const addNewUserHandler = newUser => setUsersList([newUser, ...usersList]);

    // ------------------ EDIT USER FORM - HANDLERS ------------------- //

    const openEditUserFormHandler = id => {
        // handle data on userList state
        setUsersList(
            usersList.map(usr => {
                if (usr.id === id) {
                    if (usr.isEditOpen === false) usr.isEditOpen = true;
                    else usr.isEditOpen = false;
                }
                return usr;
            })
        );
    };

    const deleteUserHandler = id => {
        const userIndex = usersList.findIndex(usr => usr.id === id);
        usersList.splice(userIndex, 1);
        setUsersList([...usersList]);
    };

    const editUserHandler = updatedUser => {
        const updatedUsersList = usersList.map(usr => {
            if (usr.id === updatedUser.id) return updatedUser;
            return usr;
        });

        setUsersList(updatedUsersList);
    };

    // ------------------- ERROR MESSAGE - HANDLERS ------------------- //

    const errorMessagePopUpHandler = errorMessage => setErrorMessagePopUp(errorMessage);
    const closeErrorMessagePopUpHandler = () => setErrorMessagePopUp('');

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //

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
                    openEditUserForm={openEditUserFormHandler}
                    deleteUser={deleteUserHandler}
                    editUser={editUserHandler}
                    onInputError={errorMessagePopUpHandler}
                />
            </Card>
        </div>
    );
}

export default App;
