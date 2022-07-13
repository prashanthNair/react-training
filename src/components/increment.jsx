

const Increment = ({ counter, title, handleCounter}) => {
    //let { counter, title, handleCounter } = props; 

    const handleClick = () => {
    console.log(props.title);
    if(props.title == "increment")
    {
        counter++;
    }
    else 
    {
        counter--;
    }
    props.handleCounter(counter);
};
    return <div> 
        {title}
        <div>
            <button onClick={handleClick}> {props.title ==  "increment" ? "Add" : "Delete" } </button>
        </div>
    </div>
    
}
export default Increment;