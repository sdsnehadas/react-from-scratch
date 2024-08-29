import {Component} from 'react';

class User extends Component {
    constructor (props){
        super(props);
    }

    componentDidMount(){
    }
    render(){

        return (<div>
            <h4>Name : {this.props.name}</h4>
            <h4>Name : {this.props.designation}</h4>
        </div>)
    }
}

export default User;