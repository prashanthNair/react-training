export default function Decrement(props){
    function handleDelete(){
        props.handleCounter();
    };

    return <div>Decrement
        <div>
            <button onClick={handleDelete}> Delete </button>
        </div>
    </div>
}