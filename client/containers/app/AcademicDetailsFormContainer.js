import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { USERS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

// Import custom components
import CompAcademicDetailsForm from '../../components/dashboard/AcademicDetailsForm';


class AcademicDetailsFormContainer extends Component {

  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

    /**
   * Submit the form.
   *
   * @param {object} formProps
   */
     submitForm(formProps) {
      this.props.actions.submitForm(USERS, formProps);
    }

  render() {
    return <CompAcademicDetailsForm onSubmit={this.submitForm} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
});


// export default hot(module)(AcademicDetailsForm);
export default connect(null, mapDispatchToProps)(AcademicDetailsFormContainer);


