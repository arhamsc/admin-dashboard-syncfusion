import { Navigate, Route, Routes } from 'react-router-dom';
import { SideBar } from './components';
import './App.css';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Box, Stack } from '@mui/material';
import {
    Area,
    Bar,
    Calendar,
    ColorPicker,
    Customers,
    Dashboard,
    Editor,
    Employees,
    Kanban,
    Line,
    Orders,
    Pie,
} from './pages';

function App() {
    const { sideBarOpen } = useContext(AppContext);

    return (
        <>
            <Stack direction={'row'} spacing={2} justifyContent="space-between">
                <Box flex={1}>{sideBarOpen ? <SideBar /> : <></>}</Box>
                <Box flex={4}>
                    <Routes>
                        {/* Dashboard */}
                        <Route
                            path="/"
                            element={<Navigate to="/e-commerce" replace />}
                        />
                        <Route path="/e-commerce" element={<Dashboard />} />

                        {/* Pages */}
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers" element={<Customers />} />

                        {/* Apps */}
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/color-picker" element={<ColorPicker />} />

                        {/* Charts */}
                        <Route path="/line" element={<Line />} />
                        <Route path="/area" element={<Area />} />
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                    </Routes>
                </Box>
            </Stack>
        </>
    );
}

export default App;
