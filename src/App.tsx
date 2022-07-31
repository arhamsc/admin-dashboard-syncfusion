import { Route, Routes } from 'react-router-dom';
import { SideBar } from './components';
import './App.css';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
    const { sideBarOpen } = useContext(AppContext);

    return (
        <>
            {sideBarOpen ? <SideBar /> : <></>}
            <Routes>
                {/* Dashboard */}
                <Route path="/" element={<div>Dashboard</div>} />
                <Route path="/ecommerce" element="Ecom" />

                {/* Pages */}
                <Route path="/orders" element="Orders" />
                <Route path="/employees" element="employees" />
                <Route path="/customers" element="customers" />

                {/* Apps */}
                <Route path="/calendar" element="calendar" />
                <Route path="/kanban" element="kanban" />
                <Route path="/editor" element="editor" />
                <Route path="/color-picker" element="color-picker" />

                {/* Charts */}
                <Route path="/line" element="line" />
                <Route path="/area" element="area" />
            </Routes>
        </>
    );
}

export default App;
