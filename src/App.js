import "./App.css";
import { useState } from "react";

export default function App() {
    const [expand, setExpand] = useState(false);

    const handleOnClick = () => {
        setExpand(!expand);
    };

    return (
        <div className="App">
            <div className="accordion">
                <div className="accordion__header" onClick={handleOnClick}>
                    <h2>What is the concept of time management?</h2>
                    <span className={expand ? "rotate" : ""}> &#10095;</span>
                </div>
                {expand ? (
                    <div className="accordion__body">
                        <p>
                            Time management refers to the process of organizing
                            and planning how to divide your time between
                            specific activities effectively to increase
                            productivity and achieve goals.
                        </p>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
