import { useBankContext } from "../utils/BankContext";
import { Table } from "reactstrap";

const AllData = () =>{

const {bank} = useBankContext();
//console.log(bank);

    return(
        /*
        <div>
            {JSON.stringify(bank, null, 2)}
        </div>
        */
        
        <Table striped>
        <thead>
            <tr>
            <th>
                #
            </th>
            <th>
                Name
            </th>
            <th>
                Email
            </th>
            <th>
                Password
            </th>
            </tr>
        </thead>

        <tbody>
            {
            bank.users.map(
                (user, index) => {
                    return(
                        <tr>
                        <th scope="row">
                            {index+1}
                        </th>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            {user.password}
                        </td>
                    </tr>

                    )
                }
            )

            }
 
        </tbody>
        </Table>
    )
};

export default AllData;