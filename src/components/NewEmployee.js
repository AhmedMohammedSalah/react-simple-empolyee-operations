import React, { useState } from 'react'

const NewEmployee = (props) => {
  const [name,setName]=useState("");
  const [job,setJob]=useState("devolper");
  const handleNameChange=(e)=>{
    setName(e.target.value);
  }  
  const handleJobChange=(e)=>{
    setJob(e.target.value);
  }
  const addNewEmp=(e)=>{
    if (!name){
      alert("add name !");
      return;

    }
    e.preventDefault();
    const emp={
      id:new Date().getTime(),
      name,
      job,
      active:true
    }
    props.addNewEmpolyee(emp);
    setName("");
    setJob("developer");
  }
  return (
    <div className="employee__new card">

      <h2> Add new Employee</h2>
      <form>
        <div>
          <label htmlFor="name" > Name</label>
          <input id="name" placeholder="new employee" onChange={handleNameChange}value={name}/>
        </div>

        <div>
          <label htmlFor="job" > Job</label>
          <select value={job} id="job"onChange={handleJobChange}>
            <option value={"developer"}> Developer </option>
            <option value={"designer"}> Designer </option>
          </select>
        </div>

        <div>
          <button type="submit" className="btn btn-primary"onClick={addNewEmp} >
            SUBMIT
          </button>
        </div>

      </form>
    </div>
  )
}

export default NewEmployee