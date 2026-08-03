const endpointTodos=import.meta.env.VITE_API_BASE_URL +'/todos'
const loadTodos=async ()=>{console.log(endpointTodos)}
export {loadTodos}
