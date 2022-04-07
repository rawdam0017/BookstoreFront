import React from "react";
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddBook />} />
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/books/:id' element={<BookDetail />} />

        </Routes>
      </main>
    </React.Fragment>
  )



}

export default App;
