import React, { useEffect } from 'react';

import { useEvent, useList } from 'effector-react';
import * as model from '../../../features/Recipe/model';
import { Link, Outlet, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    function handleClick(id: number) {
        navigate(`${id}`);
    }
    const messages = useList(model.$recipe, (item) => {
        return (
            <div key={item.id}>
                {item.title}
                <button onClick={() => handleClick(item.id)}>{item.id}</button>
                {/* <Link to={`${item.id}`}>React {item.id}</Link> */}
            </div>
        );
    });

    return <div>Home:{messages}</div>;
};

export default Home;
