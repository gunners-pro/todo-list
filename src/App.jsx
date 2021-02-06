import React from 'react';
import Layout from './Layout';
import Global from './Styles/global';
import TodoProvider from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <Layout />
      <Global />
    </TodoProvider>
  );
}

export default App;
