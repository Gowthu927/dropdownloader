import React from 'react';
import {Link} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {AddItemtoDropAction} from '../Actions/AddItemtoDropAction';

class AddItemtoDrop extends React.Component{

    addItem=(form)=>{   
        return(<div>
            <p>{form.title}</p>
            <input type='text' {...form.input} />
            <p>{form.meta.touched ? form.meta.error : ''}</p>
        </div>);
    }
    mysubmit=(val)=>{
        this.props.AddItemtoDropAction(val)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.mysubmit)}>
                    <Field title='Item' name='item' component={this.addItem} />
                    <button type="submit">Submit</button>
                </form>
                <button><Link to='/items'>to home</Link></button>
            </div>
        );
    }
}

const validate=(form)=>{
    let error={};
    if(!form.item){
        error.item='enter the item'
    }
    return error;

}

export default reduxForm({
    validate,
    form:'formdata'
})(connect(null,{AddItemtoDropAction})(AddItemtoDrop));