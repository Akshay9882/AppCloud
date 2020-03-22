
import React from "react";
import { connect } from "react-redux";
import { deleteBucket } from "../actions/index"
import { updateSeletedBucket } from "../actions/index"

const mapstatetoBucket = state => {
   return { buckets: state.buckets };
};

function ConnectedBucketList ({ buckets, dispatch  }) {
  return(<ul>
    {buckets.map(el => (
      el.bucketsCollection.map(inner => (
        <li key={inner.bucketTitle} >{inner.bucketTitle}
        <button style={{ marginLeft: '20px' }}  onClick={() =>  dispatch(deleteBucket(inner.bucketId)) }>Delete</button>
        <button style={{ marginLeft: '5px'  }}  onClick={() =>  dispatch(updateSeletedBucket(inner.bucketId)) }>View Todos</button></li>
      ))
    ))}
  </ul>)
};


const BucketList = connect(mapstatetoBucket)(ConnectedBucketList);



export default BucketList;