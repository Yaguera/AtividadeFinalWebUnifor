export default function Atividades() {
    return(
        <>
            <body>
                <header>
                        <h1>Lista de Atividades</h1>
                        <form action="/create" method="post">
                            <input type="text" name="task" id="task" placeholder="Enter a task"></input>
                            <button type="submit" id="addButton">Add</button>
                        </form>

                </header>
            </body>
        </>
    )
}