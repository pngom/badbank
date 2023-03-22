import Cardf from "../utils/BankContext";
import bankimg from '../utils/bank.png';

const Home = () =>{

    return(
        <Cardf
            txtcolor = "back"
            header = "BadBank Landing Page"
            title = "Welcome to BadBank where Bad is better than Good!"
            text = "We offer great banking services! Secured deposits with convenient access!"
            body = {(<input type="image" src={bankimg} className="img-fluid" alt="Responsive image" />)}
        />
    )
};

export default Home;