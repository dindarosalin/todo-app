import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        className='todo-input'
      />
      <button className='todo-button' type='submit'>
        submit
      </button>
      <div className='select'>
        <select name="todos" id="todos" className='filter-todo'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
