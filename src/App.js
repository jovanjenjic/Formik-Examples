import React from 'react';
import './App.css';
import { Theme, ThemeProvider } from '@chakra-ui/core';
import EnrollmentForm from './components/EnrollementForm';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
