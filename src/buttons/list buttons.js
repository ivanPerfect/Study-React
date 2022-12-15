import React from "react";

const ListItem = props => {
    const value = props.value;
    return <span>{value}</span>
}

export const List = ({items}) =>{   
    return (
    <span>
        {items.map(item => <ListItem key={item.toString()} value = {item}/>)}
    </span>
    );
}