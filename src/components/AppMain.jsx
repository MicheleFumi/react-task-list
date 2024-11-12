import tasks from '../Database/task.js'

export default function AppMain() {

    const complete = tasks.filter((task) => task.state === 'completed')
    const notComplete = tasks.filter((task) => task.state !== 'completed')
    return (


        <>
            <main>
                <div className="current">
                    <h2 className='section-name'>Current Task (4)</h2>
                    <ul>{notComplete.map(task =>

                        <li key={task.id}>

                            <h3 className='task-title'>{task.title}</h3>
                            <div className='badge'>{task.state}</div>
                            <div className='spacing-top'>Priority: {task.priority}</div>
                            <div className='spacing-bottom'>Est. time: {task.estimatedTime}</div>

                        </li>
                    )}
                    </ul>
                </div>



                <div className="completed">
                    <h2 className='section-name'>Completed Task (6)</h2>
                    <ul>{complete.map(task =>

                        <li key={task.id}>

                            <h3 className='task-title'>{task.title}</h3>
                            <div className='badge'>{task.state}</div>
                            <div className='spacing-top'>Priority: {task.priority}</div>
                            <div className='spacing-bottom'>Est. time: {task.estimatedTime}</div>

                        </li>

                    )}</ul>
                </div>

            </main>

        </>
    )
}