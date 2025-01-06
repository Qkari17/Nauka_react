import { useState, useEffect } from "react";
import { Text } from "../../ui";

export const Counter =() =>{
    const [count, setCount] = useState(0);
    useEffect(()=> {
        const id = setInterval(() => {
          setCount((value) => value + 1)
        },1000 );
        return () => {
            // unmount
            clearInterval(id);
        }
    }, [])

    return <Text>{[count]}</Text>
}