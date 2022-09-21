import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');

  return (
  <>
    <h1>Contact Me</h1>
    <form>
      <label htmlFor='name'>
        Nome
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
    </form>
    <p></p>
  </>
  );
}

export default Contact;
