import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddStudent extends Component {
		constructor(props) {
		super(props);
		this.state = {status_code: 0, email:{ },name:{} };
    };

     handleClickOpen = () => {
		this.setState( {open:true} );
    };

    handleClose = () => {
		this.setState( {open:false} );
    };

    handleEmail = (event) => {
		this.setState({email:event.target.value});
	}

	handleName = (event) => {
		this.setState({name:event.target.value});
	}
	
    handleAdd = () => {
       this.props.addStudent(this.state.email,this.state.name);
       this.handleClose();
    }

    render()  {
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent>
				  <TextField autoFocus fullWidth label="Name" name="nameText"  onChange={this.handleName}/>
                  <TextField autoFocus fullWidth label="Email" name="emailText" onChange={this.handleEmail}/>
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>
          </div>
      );
    }
}

AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;