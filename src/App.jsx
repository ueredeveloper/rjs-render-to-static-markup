import React, { useEffect, useState } from 'react'
import './App.css';
import ReactDOMServer from 'react-dom/server';

export default function App() {

  const [user, setUser] = useState({
    name: 'Jorge',
    year: 14
  })
  const User = () => {
    return (
      <div>
        <p>Nome: {user.name}</p>
        <p>Idade: {user.year}</p>
      </div>
    )
  }

  useEffect(() => {
    var a = ReactDOMServer.renderToStaticMarkup(
      <User />
    );

    console.log(a);
  }, [])
  return (
    <main>
      React Render To Static Markup
      <User/>
    </main>
  )
}
