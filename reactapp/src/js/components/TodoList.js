
import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/index"
import { updateAsCompleted } from "../actions/index"

const mapstateTodoList = state => {
  return {
    buckets: state.buckets,
    selectedBucket: state.selectedBucket,
  };
};


function ConnectedTodoList({ buckets, selectedBucket, dispatch }) {
  return (

    <ul>
      {buckets.map(el => (
        el.bucketsCollection.map(outer => (
          (outer.bucketId === selectedBucket) ? (
            <h2>Existing Todos in bucket {outer.bucketTitle}</h2>) : (<h2></h2>)
        )
        )))}
      {
        buckets.map(el => (
          el.bucketsCollection.map(outer => (
            (outer.bucketId === selectedBucket) ? (
              outer.todosCollection.map(inner => (
<li key={inner.title} style={{textDecorationLine: inner.status?'':'line-through'}} onClick={() => dispatch(updateAsCompleted(inner.todid,inner.status))}>{inner.title}
                  <button style={{ marginLeft: '20px' }} onClick={() => dispatch(deleteTodo(inner.todid))}>Delete</button>
                </li>
              )
              )
            ) : (<h6></h6>)


          )
          )
        )
        )
      }
    </ul>)
};


const TodoList = connect(mapstateTodoList)(ConnectedTodoList);



export default TodoList;