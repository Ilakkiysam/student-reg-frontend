import { render } from '@testing-library/react';
import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-box"> Student Registration List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr className ="table-head">

                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Course Name</th>
                            <th>Course Id</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td> {user.id} </td>
                                        <td> {user.firstname} </td>
                                        <td> {user.lastname} </td>
                                        <td> {user.emailId} </td>
                                        <td> {user.courseName} </td>
                                        <td> {user.courseId} </td>


                                    </tr>
                            )
                        }




                    </tbody>





                </table>

            </div>

        )
    }
}

export default UserComponent