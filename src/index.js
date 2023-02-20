import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import ImageTilesDisplay from './components/ImageTilesDisplay/ImageTilesDisplay';
import Upload from './components/Upload/Upload';
import Editor from './components/Editor/Editor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/select-image' element={<ImageTilesDisplay />}/>
          <Route path='/upload-image' element={<Upload />}/>
          <Route path='/editor' element={<Editor />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
