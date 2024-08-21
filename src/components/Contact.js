import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Page</h1>
      <form>
        <input
          className='border border-black'
          type='text'
          placeholder='name'
        ></input>
        <input
          className='border border-black'
          type='text'
          placeholder='message'
        ></input>
        <button className='border border-black'>submit</button>
      </form>
    </div>
  );
};

export default Contact;
