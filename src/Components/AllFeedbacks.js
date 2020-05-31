import React from 'react';
import {Table} from 'reactstrap';
import {connect} from 'react-redux';
import './styles/AllFeddbacks.scss';


const AllFeedback = ({currentFeedback}) =>{
    return(
        <Table bordered>
            <thead>
              <tr>
                <th>Form Name</th>
                <th>Text</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Name</th>
                <th>Quality Of Service</th>
                <th>Quality Of Beverages</th>
                <th>Restaurant Clean</th>
                <th>Dining Experience</th>
              </tr>
            </thead>
            {currentFeedback.map((feed) =>{
                return(
                    <tbody>
                        <tr>
                            <th scope="row">Aromatic Bar</th>
                            <td>{feed.message}</td>
                            <td>{feed.phone}</td>
                            <td>{feed.email}</td>
                            <td>{feed.name}</td>
                            <td>{feed.service}</td>
                            <td>{feed.beverages}</td>
                            <td>{feed.restaurantClean}</td>
                            <td>{feed.diningExperience}</td>
                        </tr>
                    </tbody>
                )
            })
        }
        
      </Table>
    )
}
const mapStateToProps = state =>({
    currentFeedback: state.feedback.currentFeedback
})

export default connect(mapStateToProps)(AllFeedback);