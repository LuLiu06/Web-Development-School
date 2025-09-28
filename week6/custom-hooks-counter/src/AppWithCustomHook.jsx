import useLocalStorage from "./useLocalStorage";
import "./App.css";

const AppWithCustomHook=()=>{
    const [name,setName]=useLocalStorage('name','');
    const [born,setBorn]=useLocalStorage('born','');
    const [height,setHeight]=useLocalStorage('height','');

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log('Name: ',nameInput);
        console.log('Birthdate: ',bornInput);
        console.log('Height: ',heightInput);
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name:<input value={name} onChange={e=>setName(e.target.value)} />
                </div>
                <br />
                <div>
                    Birthdate:<input type="date" value={born} onChange={e=>setBorn(e.target.value)} />
                </div>
                <br />
                <div>
                    Height:<input type="number" value={height} onChange={e=>setHeight(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default AppWithCustomHook;