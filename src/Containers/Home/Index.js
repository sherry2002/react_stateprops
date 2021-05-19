
import { Component } from 'react';
// import './style.css';
import {connect} from 'react-redux';
import {set_data} from '../../Store/Action/Index'
import React from 'react';

class Home extends Component {
  //  static getDerivedStateFromProps(props,state){
  //   console.log(props) 
  //   return{

  //    }
  //  }
    render() {
   let user = {name : "umairr" , email:"um@gmail.pk"}
     console.log("users==",this.props.users)
  return (
    <div>
     <h1> home</h1> 
     <button onClick={()=> this.props.set_data(user)}>SETDATA</button>
    </div>
  );
}

}
const mapStateToProps=(state)=>({
    users: state.users
})

const mapDispachToProps=(dispach)=>({
  set_data : (data) => dispach(set_data(data))
})

export default connect(mapStateToProps,mapDispachToProps)(Home);

