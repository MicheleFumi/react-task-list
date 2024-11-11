import tasks from '../Database/task.js'

export default function AppMain() {

    const complete = tasks.filter((task) => task.state === 'completed')
    const notComplete = tasks.filter((task) => task.state !== 'completed')
    return (


        <>
            <main>
                <div className="current">
                    <h2 className='section-name'>Current Task (4)</h2>
                    <div>{notComplete.map(task =>
                        <>
                            <h3 className='task-title' key={task.id}>{task.title}</h3>
                            <div className='badge'>{task.state}</div>
                            <div className='spacing-top'>Priority: {task.priority}</div>
                            <div className='spacing-bottom'>Est. time: {task.estimatedTime}</div>
                        </>



                    )}
                    </div>
                </div>



                <div className="completed">
                    <h2 className='section-name'>Completed Task (6)</h2>
                    <div>{complete.map(task =>
                        <>

                            <h3 className='task-title' key={task.id}>{task.title}</h3>
                            <div className='badge'>{task.state}</div>
                            <div className='spacing-top'>{task.priority}</div>
                            <div className='spacing-bottom'>Est. time: {task.estimatedTime}</div>
                        </>

                    )}</div>
                </div>

            </main>

        </>
    )
}