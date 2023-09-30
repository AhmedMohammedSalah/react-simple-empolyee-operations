import { useState } from "react"
import Employee from "./Employee"
import NewEmployee from "./NewEmployee"

const Employees = () => {
  const initData =[
    {id:1,name:'Ali Mohamed',job:'designer',active:true},
    {id:2,name:'Ali Ahmed',job:'developer',active:false},
    {id:3,name:'Salma Ali',job:'developer',active:false},
    {id:4,name:'Ahmed Jamal',job:'designer',active:true},
  ]
  const [data,setData]=useState(initData);
 
  const handleNewEmpolyee=(data)=>{
    setData((state)=>{
      const newData=[data ,...state];
      return newData
    });
  }
  const [show ,setShow]=useState(true);
  const handleShowState=()=>{
    show?setShow(false):setShow(true);
    console.log(show);
  };
  return (
    <div className="employees">
      {show && <NewEmployee addNewEmpolyee={handleNewEmpolyee} />}

      <div className="center">
        {show?<button className="btn"onClick={handleShowState}> Toogle Form</button>:<button className="btn"onClick={handleShowState}> Add new Empolyee</button>}
      </div>
      {/* <button className="btn" onClick={editname}>edit</button> */}
      <div className="employees__list card">
      {data.map(employee =>(
        <Employee data={employee}/>
      ))}
        
      </div>
    </div>
  )
}

export default Employees
