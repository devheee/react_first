const MainContent = ({ basic }) => {
    return (
        <section className="MainContent">
            <h2>content</h2>
            <p>content desc</p>
            <div className="inner">
                {
                    basic.map(it => {
                        return (
                            <div className="itm" key={it.id}>
                                <div className="tit">{it.title}</div>
                                <strong>{it.desc}</strong>
                                <em>{it.id}</em>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MainContent;