const Main = ({ data, num, setNum }) => {
    // const { data } = props;
    // console.log(props.data, data);
    // props drilling - 밑으로 전달한다.

    return (
        <main>
            main {num} <button onClick={() => setNum(num + 1)}>click</button>
        </main>
    )
}

export default Main;