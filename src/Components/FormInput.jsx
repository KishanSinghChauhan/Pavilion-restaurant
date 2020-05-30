import React ,{Component}from 'react';
import { Control, LocalForm, Errors ,Field} from 'react-redux-form';
import { Button, Row, Col, Label } from 'reactstrap';
import {addFeedback} from '../redux/feedback/feedback-actions';
import {connect} from 'react-redux';
import PhoneInput from 'react-phone-number-input'; 
import 'react-phone-number-input/style.css';
import swal from 'sweetalert';


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
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
      <Row className="form-group">
          <Label htmlFor="message" md={2}>Text Field</Label>
          <Col md={10}>
              <Control.textarea model=".message" id="message" name="message"
                  rows="2"
                  className="form-control" />
          </Col>
      </Row>
      <Row>
        <Label>tel num</Label>
        <PhoneInput 
                defaultCountry="IN"
                flagsImagePath='/path/to/images/flags.png'
                value={ this.state.phone }
    onChange={ phone => this.setState({ phone }) }              />
   
      </Row>
      <Row className="form-group">
          <Label htmlFor="name" md={2}>Name</Label>
          <Col md={10}>
              <Control.text model=".name" id="name" name="name"
                  className="form-control"
                   />
          </Col>
      </Row>
      <Row className="form-group">
          <Label htmlFor="email" md={2}>Email Field</Label>
          <Col md={10}>
              <Control.text model=".email" id="email" name="email"
                  className="form-control" />
          </Col>
      </Row>
      <Row className="form-group">
      <Label>Please rate the quality of the service you received from your host.</Label>
      <Field model=".service" className="field">
      <label>
            <input type="radio" value="Excellent" />
            Excellent
          </label>
          <label>
            <input type="radio" value="Good" />
              Good
            </label>
            <label>
            <input type="radio" value="Fair" />
              Fair
            </label>
            <label>
            <input type="radio" value="Bad" />
              Bad
            </label>
        </Field>
      </Row>
      <Row className="form-group">
      <Label>Please rate the quality of your beverage.</Label>
      <Field model=".beverages" className="field">
          <label>
            <input type="radio" value="Excellent" />
            Excellent
          </label>
          <label>
            <input type="radio" value="Good" />
              Good
            </label>
            <label>
            <input type="radio" value="Fair" />
              Fair
            </label>
            <label>
            <input type="radio" value="Bad" />
              Bad
            </label>
            
        </Field>
      </Row>
      <Row className="form-group">
      <Label>Was our restaurant clean?</Label>
      <Field model=".restaurantClean" className="field">
      <label>
            <input type="radio" value="Excellent" />
            Excellent
          </label>
          <label>
            <input type="radio" value="Good" />
              Good
            </label>
            <label>
            <input type="radio" value="Fair" />
              Fair
            </label>
            <label>
            <input type="radio" value="Bad" />
              Bad
            </label>
        </Field>
      </Row>
      <Row className="form-group">
      <Label>Please rate your overall dining experience.</Label>
      <Field model=".diningExperience" className="field">
      <label>
            <input type="radio" value="Excellent" />
            Excellent
          </label>
          <label>
            <input type="radio" value="Good" />
              Good
            </label>
            <label>
            <input type="radio" value="Fair" />
              Fair
            </label>
            <label>
            <input type="radio" value="Bad" />
              Bad
            </label>
        </Field>
      </Row>
      
      <Row className="form-group">
          <Col md={{size:10, offset: 2}}>
          <Button type="submit" color="primary">
              Submit
              </Button>
              
          </Col>
      </Row>
  </LocalForm>
    );
  }
  
  
}
const mapDispatchToProps = dispatch =>({
  addFeedback: (message,phone,name,email,service,beverages,restaurantClean,diningExperience) => dispatch(addFeedback(message,phone,name,email,service,beverages,restaurantClean,diningExperience))
})
export default connect(null,mapDispatchToProps)(FormInput);