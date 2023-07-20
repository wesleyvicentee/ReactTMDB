import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './styles/index.scss';

function App() {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default App;
