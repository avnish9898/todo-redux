import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './style.css'
import {connect} from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
     
      display: 'flex',
      alignItems: 'center',
     
    },
    input: {
     
      flex: 1,
      width:"50%",
      margin:"2px auto"
    },
    iconButton: {
      padding: 10,
    },
    
  }));
  
function Todo(props){
   
    const classes = useStyles();
    const [currText,setCurrText]=useState("")
    
    return(
      <div className="container">
        <div className="title">TODO </div>
        <div className="add_task">
             <TextField id="standard-basic" value={currText} className={classes.input} onChange={(e)=>{setCurrText(e.target.value)}} label="add item" />
            <IconButton onClick={()=>{
                let obj={
                  id:props.taskList.length,
                  text:currText
                }
                
  
                props.addItem(obj)
                setCurrText("")
            }
            } 
                type="button" className={classes.iconButton}  >
                <AddIcon />
            </IconButton>
            </div>
            <ul >
            {props.taskList.map((task)=>{
                return (
                <span>
                    <li><div style={{display:"inline-block",width:"80%"}}>{task.text}</div><IconButton onClick={()=>{props.deleteItem(task.id)}}><DeleteIcon/></IconButton>
</li>
                </span>)
            })
        }
        </ul>
            </div>
    )
}
const mapStateToProps=store=>{
        return store
}
const mapDispatchtoProps=dispatch=>{

    return{
        
        addItem:(val)=>{
            dispatch({
                type:"add_list",
                payload:val
            })
        },
        deleteItem:(id)=>{
          dispatch({
            type:"delete_list",
            payload:id
          })
        }
    }
     
}
export default connect(mapStateToProps, mapDispatchtoProps)(Todo)