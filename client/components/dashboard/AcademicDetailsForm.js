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
  },

  school_heading:{
    fontSize: 20,
    fontWeight:700
  },

  hr:{
    height: '2px'
  }
};

const AcademicDetailsForm = (props) => {
  const { handleSubmit, onSubmit, classes } = props;

  return (
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="STUDENT ACADEMIC CHANGE FORM" />
        <CardContent>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>


              <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <p class={classes.school_heading}>Student's Name:</p>
                    <p class={classes.school_heading}> {getLocalStorage(FULL_NAME)}</p>
                  </Grid>

                  <Grid item xs={6}>
                    <Field type="text" name="BID" component={renderText} label="Student Identification Number" />
                  </Grid>
                  
              </Grid>
              <br />

              <hr/>
              <br />
              <Grid container spacing={2}>

                  <Grid item xs={4}>
                    <p class={classes.school_heading}><u>New Information</u></p>
                  </Grid>
            
                  <Grid item xs={4}>
                    <p>Catalog Year</p>
                    <Field type="date" name="catalogYear" component={renderText} />
                  </Grid>

                  <Grid item xs={4}>
                  <Field type="checkbox" name="addOnly" component={renderText} label="Add Only" />
                  </Grid>
                  
                  <Grid item xs={3}>
                    <Field type="Text" name="school_name" component={renderText} label="New School" />
                  </Grid>

                  <Grid item xs={3}>
                    <Field type="Text" name="degree" component={renderText} label="Degree" />
                  </Grid>

                  <Grid item xs={3}>
                  <Field type="Text" name="major" component={renderText} label="Major" />
                  </Grid>

                  <Grid item xs={3}>
                  <Field type="Text" name="minor" component={renderText} label="Minor" />
                  </Grid>
                  
                  <Grid item xs={6}>
                  <Field type="Text" name="advisor_id" component={renderText} label="Advisor Name" />
                  </Grid>

                  <Grid item xs={6}>
                  <Field type="Text" name="advisor_signature" component={renderText} label="Signature" />
                  </Grid>

                  <Grid item xs={6}>
                  <Field type="Text" name="dean_id" component={renderText} label="Dean Of School" />
                  </Grid>

                  <Grid item xs={6}>
                  <Field type="Text" name="dean_signature" component={renderText} label="Signature" />
                  </Grid>
              </Grid>
                <br /><br />

                <hr></hr>
                <br />

              <Grid container spacing={2}>

                <Grid item xs={12}>
                <label class={classes.school_heading}><u>Old Information</u></label>
                </Grid>
                
                <Grid item xs={3}>
                  <Field type="Text" name="old_school_name" component={renderText} label="Previous School" />
                </Grid>

                <Grid item xs={3}>
                  <Field type="Text" name="old_degree" component={renderText} label="Degree" />
                </Grid>

                <Grid item xs={3}>
                <Field type="Text" name="old_major" component={renderText} label="Major" />
                </Grid>

                <Grid item xs={3}>
                <Field type="Text" name="old_minor" component={renderText} label="Minor" />
                </Grid>
                
                <Grid item xs={6}>
                <Field type="Text" name="old_advisor_id" component={renderText} label="Advisor Name" />
                </Grid>

                <Grid item xs={6}>
                <Field type="Text" name="old_advisor_signature" component={renderText} label="Signature" />
                </Grid>

                <Grid item xs={6}>
                <Field type="Text" name="old_dean_id" component={renderText} label="Dean Of School" />
                </Grid>

                <Grid item xs={6}>
                <Field type="Text" name="old_dean_signature" component={renderText} label="Signature" />
                </Grid>
            </Grid>

            <br />
            <hr></hr>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Field type="Text" name="student_signature" component={renderText} label="Student Signature" />
                </Grid>

                <Grid item xs={6}>
                <Field type="date" name="signed_date" component={renderText}  value={null} label="Signed Date" />
                </Grid>
      
            </Grid>

            <br />
            <div className={classes.btnDiv}>
              <Button className={classes.btn} type="submit" variant="contained" color="primary">
                Add Academic Details
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
  );
};

const validateAcademicDetails = (values) => {
  // const errors = {};

  // const requiredFields = ['first_name', 'last_name','email','BID', 'catalogYear', 'addOnly', 'school_name','major', 'minor','advisor','dean','signature'];
  // requiredFields.forEach((field) => {
  //   if (!values[field]) {
  //     errors[field] = '(The ' + field + ' field is required.)';
  //   }
  // });

  // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = '(Invalid email address.)';
  // }
  // return errors;
};

AcademicDetailsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'AcademicDetailsForm', // a unique identifier for this form
  validate: validateAcademicDetails, // ???Callback function for client-side validation
})(withStyles(styles)(AcademicDetailsForm));
