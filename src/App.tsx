import React, { useState } from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import ContentColumn1 from './components/ContentColumn1';
import { createContext, useContext } from 'react';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AppUseContext from './ContextAPI/AppUseContext';

interface ClassStudent {
  id: string;
  classStudentId: string;
  classStudentName: string;
  createdAt?: string;
  updatedAt?: string;
}

const App: React.FC = () => {
  // const [content, setContent] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);

  // const loadContent = (content: string) => {
  //   setContent(`Content for ${content}`);
  //   setShowForm(true);
  // };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="main">
        <Header />
        <NavigationBar />
        <div id="container">
          <ContentColumn1 />
        </div>

        {/* <FormContainer showForm={showForm} setShowForm={setShowForm} /> */}
        <Footer />
      </div> </>
  )
};
export default App;
