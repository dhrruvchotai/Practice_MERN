import { useState, useEffect } from "react";
import Color from "./Color";
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // This effect runs when `count` changes

        alert('Counter was changed.');

        document.title = `Count: ${count}`;

        return () => {
            console.log(`Cleanup: Previous count was ${count}`);
        };

    }, [count]); // Effect re-runs whenever `count` changes

    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <Color color={"navy " + "blue " + count}/>
            </div>
        </>
    );

}

export default Counter;