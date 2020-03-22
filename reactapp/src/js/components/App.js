import React from "react";
import BucketList from "./BucketList";
import TodoList from "./TodoList";
import BucketForm from "./AddBucketForm";
import TodoForm from "./AddTodoForm";

const App = () => (
  <>
    <table width="80%">
      <tbody>
        <tr>
          <td>
            <div>
              <h2>Add a new bucket</h2>
              <BucketForm />
            </div>
            <div>
              <h2>Existing Buckets</h2>
              <BucketList />
            </div>
          </td>
          <td>
            <div>
              <TodoList />
            </div>
            <div>
              <h2>Add a new Todo</h2>
              <TodoForm />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>


);

export default App