import React from "react";
import { useHistory } from "react-router";
import { Box, Button, Flex, Header } from "../styled";
import { useSelector } from "react-redux";


const View = () => {
  const history = useHistory();

  const employees = useSelector((state)=> state.employees);
  // const dispatch = useDispatch();
  // const handelDelete = (id) =>{
  //     dispatch(deleteUser({id: id}))
  // }

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        <Box>
        <table className='table'>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>BirthDate</th>
                        <th>JobTitle</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index)=>(
                        <tr key={index}>
                            <td>{employee.firstName}</td>
                            <td>{employee.surname}</td>
                            <td>{employee.email}</td>
                            <td>{employee.birthDate}</td>
                            <td>{employee.jobTitle}</td>
                            <td>{employee.status}</td>
                            <td>
                                {/* <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handelDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
