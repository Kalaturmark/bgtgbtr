import React, { useState, useEffect } from 'react';


function ColorItem({ colorName, colorCode }) {
    const itemStyle = {
        backgroundColor: colorCode,
        padding: '10px',
        margin: '5px',
        color: '#fff',
        textAlign: 'center',
    };

    return (
        <div style={itemStyle}>
            <p>{colorName}</p>
        </div>
    );
}


function Colors() {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const colorList = [
            { name: 'Red', code: '#FF0000' },
            { name: 'Green', code: '#00FF00' },
            { name: 'Blue', code: '#0000FF' },
        ];
        setColors(colorList);
    }, []); 

    return (
        <div>
            <h1>Colors</h1>
            <div>
                {colors.map((color, index) => (
                    <ColorItem key={index} colorName={color.name} colorCode={color.code} />
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Colors />
        </div>
    );
}

export default App;
