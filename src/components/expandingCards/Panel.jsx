import React from 'react';

const Panel = ({className, backgroundImg, title, visible, handleExpanded}) => {
    return(
        <div 
        className={title === visible ? 'panel active': 'panel'} 
        style={{backgroundImage: `url(${backgroundImg})`}}
        visible={visible}
        onClick={() => handleExpanded(title)}
        >
            <h3>{title}</h3>
        </div>
    )
}

export default Panel;