
import './App.css'
import {Comments} from "./components/comments/Comments.tsx";
import {Todos} from "./components/todos/Todos.tsx";
import {Posts} from "./components/posts/Posts.tsx";

function App() {
  return (
    <div>
        <div>
            <Todos/>
        </div>
        <div>
            <Comments/>
        </div>
        <div><Posts/></div>



    </div>
  )
}

export default App
