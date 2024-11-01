import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-3 hover:bg-yellow-300 hover:px-2 duration-200' >
        <a href={route.path}>{route.name}</a>
        </li>
            );
};

export default Link;