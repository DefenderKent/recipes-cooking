import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            Home TEMPLATE
            <button onClick={() => navigate(-1)}> назад</button>
            <button onClick={() => navigate('1')}> На шаблон</button>
            <Outlet />
        </div>
    );
};

export default Home;
