import React, { useState } from "react";
import { Link } from "react-router-dom";

const ColorList = () => {
    const INITIAL_STATE = [
        { name: "red", value: "#ff0000" },
        { name: "blue", value: "#0000ff" },
    ];

    const [colors, setColors] = useState(INITIAL_STATE);

    const addColor = (newColor) => {
        setColors([...colors, newColor]);
    };

    return (
        <div>
            <section className="top-home">
                <h2>Welcome to the color factory.</h2>
                <Link to='/color/new' >Add a color</Link>    
            </section>
            <section className="bottom-home">
                <h3>Please select a color</h3>
                {colors.map((color, idx) => {
                    <Link key={idx} to={`/colors/${color.name}`}>{color.name}</Link>
                })}
            </section>
        </div>
    );
}

export default ColorList;