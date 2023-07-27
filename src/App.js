import Card from './components/UI/Card';
import UserForm from './components/UserForm/UserForm';
import Header from './components/Header/Header';
import User from './components/UserList/User';

import style from './App.module.scss';

function App() {
    return (
        <div className={style.app}>
            <Header />
            <Card>
                {' '}
                <UserForm isOpen={false} />
            </Card>
            <Card>
                {' '}
                <UserForm />
            </Card>
            <Card>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
            </Card>
            {/* UserList */}
            {/* UserEdit */}
        </div>
    );
}

export default App;
