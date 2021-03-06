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
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    return (
      <div className="form-div">
        <h4 style={{fontWeight:'600' , fontSize:'20px'}}>Aromatic Bar</h4>
        <p style={{fontSize:'15px',fontWeight:'500'}}>We are committed to providing you with the best
          dining experience possible, so we welcome your comments.
          Please fill out this questionnaire. Thank you.
        </p>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="form-input">
        <Row className="form-group">
          <Col md={6} className="input-column">

            <Label htmlFor="message">Text Field</Label><span className="text-danger">*</span>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", margin: 10, padding:'0 10px 0 10px', borderRight: "1px solid grey",fontSize:'12px', fontWeight:'500' }}>Hello</span>
              <Control.textarea model=".message" id="message" name="message" className="form-control input-area" style={{ paddingLeft: 64}}
                rows="1" 
                validators={{
                  required, maxLength: maxLength(101)
                }}
              />
            </div>
            <Errors
              className="text-danger error-input"
              model=".message"
              show="touched"
              messages={{
                  required: 'Required',
                  maxLength: 'Must be 100 characters or less'
              }}
            />
            <Label>Phone Field</Label><span className="text-danger">*</span>
            <PhoneInput className="Phone-Input"
              defaultCountry="IN"
              flagsImagePath='/path/to/images/flags.png'
              value={ this.state.phone }
              onChange={ phone => this.setState({ phone }) } 
            />
            <div>
            <Label htmlFor="name">Name</Label><span className="text-danger">*</span>
            <Control.text model=".name" id="name" name="name"
              className="form-control"
              validators={{
                required,  maxLength: maxLength(30)
              }}
            />
            <Errors
              className="text-danger"
              model=".name"
              show="touched"
              messages={{
                  required: 'Required',
                  maxLength: 'Must be 30 characters or less'
              }}
            />
            </div>
            <Label htmlFor="email">Email Field</Label><span className="text-danger">*</span>
            <Control.text model=".email" id="email" name="email" className="form-control"
              validators={{
                validEmail
              }}
            />
            <Errors
              className="text-danger"
              model=".email"
              show="touched"
              messages={{
                  validEmail:'Invalid email address'
              }}
            />
          </Col>
          <Col md={6} className="button-column">
            <Label>Please rate the quality of the service you received from your host.</Label><span className="text-danger">*</span>
            <Field model=".service" className="field" 
              validators={{
                required
              }}>
              <Errors
                className="text-danger error"
                model=".service"
                show="touched"
                messages={{
                    required: 'Required',
                
                }}
              />
              <label>
                <input type="radio"  value="Excellent" /> Excellent
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Good" /> Good
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Fair" /> Fair
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Bad" /> Bad
                <span></span>
              </label>
            </Field>
           
            <Label>Please rate the quality of your beverage.</Label><span className="text-danger">*</span>
            <Field model=".beverages" className="field" 
              validators={{
                required
              }}>
              <Errors
              className="text-danger error"
              model=".beverages"
              show="touched"
              messages={{
                  required: 'Required',
              
              }}
            />
            <label>
                <input type="radio"  value="Excellent" /> Excellent
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Good" /> Good
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Fair" /> Fair
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Bad" /> Bad
                <span></span>
              </label>
            </Field>
            
            <Label>Was our restaurant clean?</Label><span className="text-danger">*</span>
            <Field model=".restaurantClean" className="field" 
              validators={{
                required
              }}>
              <Errors
              className="text-danger error"
              model=".restaurantClean"
              show="touched"
              messages={{
                  required: 'Required',
              
              }}
            />
            <label>
                <input type="radio"  value="Excellent" /> Excellent
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Good" /> Good
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Fair" /> Fair
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Bad" /> Bad
                <span></span>
              </label>
            </Field>
            <Label>Please rate your overall dining experience.</Label><span className="text-danger">*</span>
            <Field model=".diningExperience" className="field"
              validators={{
                required
              }}>
              <Errors
              className="text-danger error"
              model=".diningExperience"
              show="touched"
              messages={{
                  required: 'Required',
              
              }}
            />
            <label>
                <input type="radio"  value="Excellent" /> Excellent
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Good" /> Good
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Fair" /> Fair
                <span></span>
              </label>
              <label>
                <input type="radio"  value="Bad" /> Bad
                <span></span>
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