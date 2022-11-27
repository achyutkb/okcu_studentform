import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// Import custom components
import renderText from '../common/form/renderText';

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

const academicDetails = (props) => {
  const { handleSubmit, onSubmit, classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="Academic Details Form" />
        <CardContent>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Field type="text" name="first_name" component={renderText} label="First Name" />
            <br />
            <Field type="text" name="last_name" component={renderText} label="Last Name" />
            <br />
            <Field type="text" name="email" component={renderText} label="Email" />
            <br />
            <Field type="text" name="BID" component={renderText} label="BID" />
            <br />
            <Field type="date" name="catalogYear" component={renderText} label="Catalog Year" />
            <br />
            <Field type="int" name="addOnly" component={renderText} label="Add Only" /> {/* need to add checkbox here*/}
            <br />
            <Field type="text" name="school_name" component={renderText} label="School Name" />
            <br />
            <Field type="text" name="major" component={renderText} label="Major" />
            <br />
            <Field type="text" name="minor" component={renderText} label="Minor" />
            <br />
            <Field type="text" name="advisor" component={renderText} label="Advisor Name" />
            <br />  
            <Field type="text" name="dean" component={renderText} label="Dean Name" />
            <br /> 
            <Field type="text" name="signature" component={renderText} label="Student Signature" />
            <br />  
            <Field type="date" name="date" component={renderText} label="Date" />
            <br /> 
                  
            
            <br />

            <br />
            <div className={classes.btnDiv}>
              <Button className={classes.btn} type="submit" variant="contained" color="primary">
                Add Academic Details
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const validateAcademicDetails = (values) => {
  const errors = {};

  const requiredFields = ['first_name', 'last_name','email','BID', 'catalogYear', 'addOnly', 'school_name','major', 'minor','advisor','dean','signature'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '(Invalid email address.)';
  }
  return errors;
};

academicDetails.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'academicDetails', // a unique identifier for this form
  validate: validateAcademicDetails, // ←Callback function for client-side validation
})(withStyles(styles)(academicDetails));
