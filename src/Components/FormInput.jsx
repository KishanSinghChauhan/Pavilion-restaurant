import React ,{Component}from 'react';
import { Control, LocalForm, Errors ,Field} from 'react-redux-form';
import { Button, Row, Col, Label } from 'reactstrap';
import {addFeedback} from '../redux/feedback/feedback-actions';
import {connect} from 'react-redux';
import PhoneInput from 'react-phone-number-input'; 
import 'react-phone-number-input/style.css';
import swal from 'sweetalert';
import './styles/FormInput.scss'

class FormInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
        phone: '',
    };
  }

  handleSubmit(values) {
    this.props.addFeedback(values.message, this.state.phone,values.name,values.email,values.service,values.beverages,values.restaurantClean,values.diningExperience);
    swal("!!!", "Thank you for completing the information", "success");

    this.props.history.push('/feedbacks')
  }
  render(){
    return (
      <div className="form-div">
        <h4>Aromatic Bar</h4>
        <p>We are committed to providing you with the best
          dining experience possible, so we welcome your comments.
          Please fill out this questionnaire. Thank you.
        </p>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="form-input">
        <Row className="form-group">
          <Col md={6} className="input-column">
            <Label htmlFor="message">Text Field</Label><span className="text-danger">*</span>
            <Control.textarea model=".message" id="message" name="message" className="form-control input-area"
              rows="1" 
            />
            <Label>Phone Field</Label><span className="text-danger">*</span>
            <PhoneInput className="Phone-Input"
              defaultCountry="IN"
              flagsImagePath='/path/to/images/flags.png'
              value={ this.state.phone }
              onChange={ phone => this.setState({ phone }) } 
            />
            <Label htmlFor="name">Name</Label><span className="text-danger">*</span>
            <Control.text model=".name" id="name" name="name"
              className="form-control"
            />
            <Label htmlFor="email">Email Field</Label><span className="text-danger">*</span>
            <Control.text model=".email" id="email" name="email"
              className="form-control" 
            />
          </Col>
          <Col md={6} className="button-column">
            <Label>Please rate the quality of the service you received from your host.</Label><span className="text-danger">*</span>
            <Field model=".service" className="field">
              <label>
                <input type="radio" value="Excellent" />
                <span className="ml-2">Excellent</span> 
              </label>
              <label>
                <input type="radio" value="Good" />
                <span className="ml-2">Good</span>
              </label>
              <label>
                <input type="radio" value="Fair" /> 
                <span className="ml-2">Fair</span>
              </label>
              <label>
                <input type="radio" value="Bad" /> 
                <span className="ml-2">Bad</span>
              </label>
            </Field>
            <Label>Please rate the quality of your beverage.</Label><span className="text-danger">*</span>
            <Field model=".beverages" className="field">
            <label>
                <input type="radio" value="Excellent" />
                <span className="ml-2">Excellent</span> 
              </label>
              <label>
                <input type="radio" value="Good" />
                <span className="ml-2">Good</span>
              </label>
              <label>
                <input type="radio" value="Fair" /> 
                <span className="ml-2">Fair</span>
              </label>
              <label>
                <input type="radio" value="Bad" /> 
                <span className="ml-2">Bad</span>
              </label>
            </Field>
            <Label>Was our restaurant clean?</Label><span className="text-danger">*</span>
            <Field model=".restaurantClean" className="field">
            <label>
                <input type="radio" value="Excellent" />
                <span className="ml-2">Excellent</span> 
              </label>
              <label>
                <input type="radio" value="Good" />
                <span className="ml-2">Good</span>
              </label>
              <label>
                <input type="radio" value="Fair" /> 
                <span className="ml-2">Fair</span>
              </label>
              <label>
                <input type="radio" value="Bad" /> 
                <span className="ml-2">Bad</span>
              </label>
            </Field>
            <Label>Please rate your overall dining experience.</Label><span className="text-danger">*</span>
            <Field model=".diningExperience" className="field">
            <label>
                <input type="radio" value="Excellent" />
                <span className="ml-2">Excellent</span> 
              </label>
              <label>
                <input type="radio" value="Good" />
                <span className="ml-2">Good</span>
              </label>
              <label>
                <input type="radio" value="Fair" /> 
                <span className="ml-2">Fair</span>
              </label>
              <label>
                <input type="radio" value="Bad" /> 
                <span className="ml-2">Bad</span>
              </label>
            </Field>
          </Col>
        </Row>      
        <Row className="form-group button-row">
            <Button type="submit" color="success" className="bttn">
              Submit
            </Button>
        </Row>
      </LocalForm>
      </div>
    );
  }
  
  
}
const mapDispatchToProps = dispatch =>({
  addFeedback: (message,phone,name,email,service,beverages,restaurantClean,diningExperience) => dispatch(addFeedback(message,phone,name,email,service,beverages,restaurantClean,diningExperience))
})
export default connect(null,mapDispatchToProps)(FormInput);