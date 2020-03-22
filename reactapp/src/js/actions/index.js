
export function addBucket(payload) {
  return { type: "ADD_BUCKET", payload };
}
export function addTodo(payload) {
  return { type: "ADD_TODO", payload };
}
export function deleteBucket(payload) {
  return { type: "DELETE_BUCKET", payload };
}
export function deleteTodo(payload) {
  return { type: "DELETE_TODO", payload };
}
export function updateSeletedBucket(payload) {
  return { type: "CHANGE_SELECTED_BUCKET", payload };
}
export function updateAsCompleted(payload1,payload2) {
    return { type: "UPDATE_STATUS", payload1,payload2 };
}



  
