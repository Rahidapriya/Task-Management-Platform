import React from 'react';

const Header = ({text,bg,count}) => {
    return (
        <div className={`${bg} flex items-center h-12 rounded-md uppercase text-sm text-white pl-4`}>
            {text}
            <div className='ml-2 bg-white w-5 h-5 text-black flex rounded items-center justify-center'>{count}</div>
        </div>
    );
};

export default Header;