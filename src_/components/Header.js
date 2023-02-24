const Header = ({ common, basic, menu, ok }) => {
    return (
        <header className="Header">
            <div className="inner">
                <h1>{common[0].company}</h1>
                <nav>
                    <ul>
                        {
                            menu.map(
                                (it, idx) => <li key={it.id}>{it.title}</li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;