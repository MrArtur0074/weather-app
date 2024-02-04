function Counter(props) {
    const [counter, setCounter] = props.counter
    function clickEvent() {
        setCounter(counter + 1)
    }

    return (
        <div>
            {counter}
            <button onClick={clickEvent}> Нажми на меня </button>
        </div>
    );
}

export default Counter;