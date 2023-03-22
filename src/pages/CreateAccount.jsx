import{useState} from 'react';
import { useBankContext } from "../utils/BankContext";
import Cardf from "../utils/BankContext";

const CreateAccount = () =>{
    const [show, setShow]           = useState(true);
    const [status, setStatus]       = useState('');
    const [name, setName]           = useState('');
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const {bank} = useBankContext();

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(()=> setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function validatepwd(field){
        if (!(field.length>=8)){
            setStatus('Error: Enter a password of at least 8 characters');
            setTimeout(()=> setStatus(''), 3000);
            return false;
        }
        return true;
    }   
    function handleCreate(){
        //console.log(name, email, password);
        if (!validate(name,  'name')) return;
        if (!validate(email,  'email')) return;
        if (!validatepwd(password,  'password')) return;
        bank.users.push({name, email, password, balance:100});
        alert(`Account successfully created!`);
        setShow(false);
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
    return(
        <Cardf
            bgcolor="info"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name}> Create Account</button>
                </>
            ):(
                <>
                <h5>Success!</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}> Add another account</button>
                </>
            )}
        />
    )
};

export default CreateAccount;