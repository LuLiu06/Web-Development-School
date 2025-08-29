let todosArray=[];
let nextId=1;

const getAll=()=>todosArray;
const addOne=(task,completed,dueDate)=>{
    if(!task|| typeof completed !=="boolean" || !dueDate){
       return false; 
    }
    const newTodo = {
        id: nextId++, // 自动生成唯一 id
        task,
        completed,
        dueDate,
      };
    
      todosArray.push(newTodo);
      return newTodo;
};
const findById = (id) => {
    const numericId = Number(id);
    const todo = todosArray.find((item) => item.id === numericId);
    return todo || false;
  };



const updateOneById = (id, updatedData) => {
    const todo = findById(id);
    if (todo) {
      
      if (updatedData.task) todo.task = updatedData.task;
      if (typeof updatedData.completed === "boolean") todo.completed = updatedData.completed;
      if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
  
      return todo;
    }
    return false;
  };

  const deleteOneById = (id) => {
    const todo = findById(id);
    if (todo) {
      const initialLength = todosArray.length;
      todosArray = todosArray.filter((item) => item.id !== Number(id));
      return todosArray.length < initialLength; 
    }
    return false;
  };
  

  if (require.main === module) {
    console.log("==== Todos Library Testing ====");
  
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log("Added:", result);
  
    result = addOne("Finish React project", false, "2025-09-01");
    console.log("Added:", result);
  
    console.log("getAll:", getAll());
  
    console.log("findById(1):", findById(1));
  
    console.log("updateOneById:", updateOneById(1, { completed: true, task: "Buy groceries and milk" }));
    console.log("After update findById(1):", findById(1));
  
    console.log("deleteOneById(1):", deleteOneById(1));
    console.log("After delete findById(1):", findById(1));
  
    console.log("Final todosArray:", getAll());
  }
  
  const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
  };
  
  module.exports = ToDos;