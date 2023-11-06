import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { useState } from 'react';

const DashboardLayout = () => {
    // temp

    const user = { name: 'john' };
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        console.log('toggle dark theme');
    };

    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <Navbar />
                    <div className="dashboard-page">
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};
export default DashboardLayout;
