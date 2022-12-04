import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// Import custom components
import renderText from '../common/form/renderText';
import { Label } from '@material-ui/icons';
import {getLocalStorage} from '../../utils/storageUtil';
import { FULL_NAME, LOGIN_EMAIL } from '../../config/config';
import values from '@hapi/joi/lib/values';

const styles = {
  root: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  card: {
    padding: 20,
    overflow: 'auto',
  },
  cardHeader: {
    textAlign: 'center',
  },
  btnDiv: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 21,
  },
  ddl:{
    minWidth: 320,
    maxWidth: 400,
    padding: 5,
    overflow: 'auto',
    height: 'auto',
    margin: 'auto',
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: 400,
  }




};


const FormAction = (props) => {
  const { handleSubmit, onSubmit, classes } = props;
  const data= [
    {student_name: "michaellll", school_name: "Peter School", email:"email@123" }
  ];

  return (
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="STUDENT ACADEMIC CHANGE FORM" />
        <CardContent>
            <table>

            <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Student Name</th>
                                <th>Old School</th>
                                <th>New School</th>
                                <th>Student Email:</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                              data.map((values, key) => {
                              return (
                                <tr key={key}>
                                    <td>{values.name}</td>
                                   <td>{values.old_school}</td>
                                    <td>{values.newschool}</td>
                                    <td>{values.email}</td>
                                                                
                                    <td>
                                      <a href="#" class="btn border-shadow update">
                                        <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                                      </a>
                                      <a class="btn border-shadow delete">
                                        <span class="text-gradient"><i class="fas fa-times"></i></span>
                                      </a>
                                      </td>
                                  </tr>
                              )
                            
                          })
                          } 
                        </tbody>
                    </table>

            </table>
        </CardContent>
      </Card>
  );
};


FormAction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'FormAction', // a unique identifier for this form
  validate: validateAcademicDetails, // ←Callback function for client-side validation
})(withStyles(styles)(FormAction));
