import React from 'react';

const Info = (props) => {
        console.log(props);
        return (
            <div>
                 <ul>
                        {props.items?.map((item, index) => (
                            <li key={index}>{item.nome} - {item.quantita} {item.unita_misura}</li>
                        ))}
                    </ul>
            </div>
        );
    
}

export default Info;