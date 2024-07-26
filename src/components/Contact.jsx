import React, { useState } from "react";

const Contact = () => {
    const [form,setform]=useState({
        name:"",
        email:"",
        message:""
    })
    function changehandler(event){
        setform((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    const submit = (event) => {
        event.preventDefault();
        console.log(form);
        setform({
          name:"",
          email:"",
          message:""
      })
      };
  return (
    <div name="contact" className=" text-white w-full h-screen bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col h-full max-w-screen-lg mx-auto justify-center">
        <div>
          <p className="text-4xl font-bold">Contact me </p>
          <p className="text-xl my-6">
            Submit the form to get in touch with me{" "}
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <form action="" className=" flex flex-col items-center w-full" onSubmit={submit}>
            <input type="text" onChange={changehandler} value={form.name} name="name" placeholder="Enter your name" className=" w-[500px] p-2 bg-transparent focus:outline-none border border-blue-500 rounded-md shadow-md shadow-blue-600"/>
            <input type="text" onChange={changehandler} value={form.email} name="email" placeholder="Enter your Email" className=" w-[500px] my-5 p-2 bg-transparent focus:outline-none border border-blue-500 rounded-md shadow-md shadow-blue-600"/>
            <textarea name="message"  onChange={changehandler} value={form.message} rows="10" placeholder="Enter your message" className=" my-3 w-[500px] p-2 bg-transparent focus:outline-none border border-blue-500 rounded-md shadow-md shadow-blue-600"></textarea>
            <button  type="submit"  className="text-white  flex items-center text-md bg-gradient-to-r from-zinc-600 to-sky-500 px-3 py-2 rounded-lg ">Lets's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
