const DATA = [
    { id: 1, tit: 'menu01', link: '../01.html' },
    { id: 2, tit: 'menu02', link: '../02.html' },
    { id: 3, tit: 'menu03', link: '../03.html' },
]
const Nav = () => {
    return (
        <nav>
            <ul>
                {
                    DATA.map(it => {
                        return (
                            <li key={it.id}>
                                <a href={it.link}>{it.tit}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}


export default Nav;