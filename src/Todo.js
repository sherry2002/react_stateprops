import react,{Component} from 'react';
import React from 'react';
//import reactDom from 'reactdom';
//import { useState } from 'react';
import Home from "./Containers/Home/Index";

class Todo extends Component{
    constructor(){
    super();
    this.state={
        todos:[{title:"ahmed", edit:false},{title:"ali", edit:false}],
        value:"",
    }

    }
    add_todo() {
        let obj = {title:this.state.value};
       
       this.setState({
           todos : [...this.state.todos,obj],
           value:"",
       })
    }

    deleteItem(index){
        this.state.todos.splice(index,1)
        this.setState({
            todos : this.state.todos,
            value:"",
        })
    }
    deleteAll(index){
        alert('are you sure to delete?')
        this.state.todos.splice(index)
        this.setState({
            todos : this.state.todos,
            value:"",
        })
    }
    editItem(index,value){
        this.state.todos[index].edit=true;

         
    this.setState({
            todos : this.state.todos,
           
        })


    }

    handleChange(e,index){
        this.state.todos[index].title=e.target.value;
        this.setState({
            todos : this.state.todos,
            
        })
    }
    updateItem=(index)=>{

         this.state.todos[index].edit=false; 
         this.setState({
            todos : this.state.todos,
            
        })
    }
    
    
    
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //      newItem:"",
    //      list: []  ,
    //     };
    // }

    // updateInput (key,value){
    //     this.setState({
    //         [key] : value
    //     });
    // }
    
    //     addItem(){
    //         const newItem={
    //             //key:id,
    //              id: 1+ Math.random(),
    //             value: this.state.newItem.slice(),
        
    //         };

        

    //         const list = [...this.state.list];
    //         list.push (newItem);

    //          this.setState({
    //              list,
    //              newItem:"",
    //          }); 
    //     }
    //     deleteItem(id){
    //         const list = [...this.state.list];
    //         const updateList = list.filter(item => item.id !==id);
    //         this.setState({this : updateList});
    //     }

    
render(){

  
    return( 
    <div className="app">
            <div>
            Add an item...
               <br/>
               <input 
               type="text"
               placeholder="type item here...."
                value={this.state.value}
               onChange={(e) => this.setState( {value:e.target.value}) }
               />                
                
                <button onClick={ ()=> this.add_todo() }>
                              Add Item
                             
                    </button>
                    <br/>
                    <ul>
                        {this.state.todos.map((val,i) =>{
                            return(
                                <li key ={i}>
                                { val.edit? <input value={val.title} type= "text" onChange={ (e)=>this.handleChange(e, i)}/> : val.title}
                                {val.edit?
                                <button onClick={() => this.updateItem(i)}>update</button> :
                                <button onClick={() => this.editItem(i,val.title)}>
                                 Edit
                                </button>
                                }
                                <button onClick={() => this.deleteItem(i)}>
                                 delete
                                </button>
                                </li>
                                
                                   
                            )
                        })}
                    </ul>
                     
                                   <button onClick={() => this.deleteAll()}>
                                   delete all
                                  </button>
                   
                   
                   
                  
                </div> 
                <br/>

                <Home/>

        </div>
    )

    }

} 
export default Todo;