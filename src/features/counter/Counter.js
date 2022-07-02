import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <section>
            <p id="counter-value">Count is: {count}</p>
            <div>
                <button id="increase-button" onClick={()=>dispatch(increment())}>increase</button>
                <button id="reset-button" onClick={()=>dispatch(reset())}>reset</button>
                <button id="decrease-button" onClick={()=>dispatch(decrement())}>decrease</button>
            </div>
        </section>
    )
}

export default Counter;