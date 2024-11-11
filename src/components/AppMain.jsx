import tasks from '../Database/task.js'

export default function AppMain() {


    return (


        <>
            <main>
                <div className="current">
                    <h2>Current Task ()</h2>
                    <ul>{tasks.map((product) => <li key={product.id}>{product}</li>)}</ul>
                    <div></div>
                </div>



                <div className="completed">
                    <h2>Completed Task ()</h2>
                </div>

            </main>

        </>
    )
}