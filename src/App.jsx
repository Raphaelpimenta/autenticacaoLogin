import React, { Fragment } from 'react'
import RoutesApp from './routes/routes';
import { AuthProvider } from './contexts/autenticacao';

function App() {

  return (
    <>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </>
  )
}

export default App
