import Button from "./Button"

const Header = ({ title, onShowAddTask, showAddTask }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                text={showAddTask ? 'Close' : 'Add'} 
                color='steelblue' 
                onClick={onShowAddTask}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
