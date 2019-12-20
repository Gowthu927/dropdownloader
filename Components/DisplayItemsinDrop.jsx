import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class DisplayItemsinDrop extends React.Component{
    state={
        selectedValue:''
    }
    onDropchange=(e)=>{
        console.log(e.target.value);
    }
    dropDownHelper=()=>{
        console.log(this.props.list);
        if (this.props.list.length===0){
            return(
                <select onChange={this.onDropchange}>
                <option value="No items to display" >No items to display</option>
            </select>
            )
        }else{
            return(
                <select onChange={this.onDropchange}>
                    {this.props.list.map(obj=><option value={obj.item}>{obj.item}</option>)}
                </select>
            );
        }

        
    }

    render(){
        return(
            <div>
                <p>From display drop page</p>
                {/* <select onChange={this.onDropchange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select> */}
                {this.dropDownHelper()}

                <button><Link to='/'>to home</Link></button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return { list : state.ListItems};
}

export default connect(mapStateToProps)(DisplayItemsinDrop);