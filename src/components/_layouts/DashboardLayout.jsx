import React from 'react';
import NavHead from '../navbar/NavHead';

const DashboardLayout = ({ children, title, className, style }) => {
    return (
        <>
            <header>
                <NavHead />
            </header>

            <main style={style} className={className}>
                {children}
            </main>

            <footer>
                {/* Footer things */}
            </footer>
        </>
    );
};

export default DashboardLayout;