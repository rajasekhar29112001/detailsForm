import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const NavBar = () => {

    const [display,setDisplay] = useState("details");
    console.log("display = ",display);

    const [obj,setObj] = useState({id:"",name:"",email:"",age:"",doj:"",gender:"",experience:[{company:"",role:"",years:"",stDate:"",enDate:""}]});
    const [arr,setArr] = useState([]);

    let {id,name,email,age,doj,gender} = obj;

    const [experiences,setExperObj] = useState({company:"",role:"",years:"",stDate:"",enDate:""})

    function saveData(){
        (id===""|| name===""|| email===""|| age===""|| doj===""|| gender==="") ? alert("please enter all fields"): filteredData() ;
        setObj({id:"",name:"",email:"",age:"",doj:"",gender:""})
    }

    function filteredData(){
       setArr([...arr,obj]);
    }
    console.log("Array = ",arr)

    return(
        <>
            <div className="head">
                <button className="hbtn" onClick={() => setDisplay("details")}>Details</button>
                <button className="hbtn" onClick={() => setDisplay("experience")}>Experience</button> 
            <div/>

                {display==="details" && ( 
                    <div className="container">
                        <h2>Personal Details</h2>
                        <form>
                            <label>Id: <input type="number" value={obj.id} onChange={(e) => setObj({ ...obj, id: e.target.value })} placeholder="enter id" required/></label>
                            <label>Name: <input type="text" value={obj.name} onChange={(e) => setObj({ ...obj, name: e.target.value })} placeholder="enter name" required/></label>
                            <label>Email: <input type="email" value={obj.email} onChange={(e) => setObj({ ...obj, email: e.target.value })} placeholder="enter mail" required/></label>
                            <label>Age: <input type="number" value={obj.age} onChange={(e) => setObj({ ...obj, age: e.target.value })} placeholder="enter age" required/></label>
                            <label>Data of Joining: <input type="date" value={obj.doj} onChange={(e) => setObj({ ...obj, doj: e.target.value })} placeholder="enter date of joining" required/></label>
                            <label>Gender:
                                <select value={obj.gender} onChange={(e) => setObj({ ...obj, gender: e.target.value })} required>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select></label>
                        </form>
                    </div> )}

                {display === "experience" &&  (
                    <div className="container">
                        <h2>Previous Company Details</h2>
                        <AddIcon style={{float:"right",marginRight:"20px",fontSize:"32px"}}/><br/><br/>
                            <form className="experContainer">
                                <div><label>Company: <input type="text" value={experiences.company} onChange={(e) => setExperObj({ ...experiences, company: e.target.value })} placeholder="enter company name" /></label></div> 
                                <div><label>Role: <input type="text" value={experiences.role} onChange={(e) => setExperObj({ ...experiences, role: e.target.value })} placeholder="enter role" /></label></div>
                                <div><label>Years: <input type="number" value={experiences.years} onChange={(e) => setExperObj({ ...experiences, years: e.target.value })} placeholder="enter years in numbers" /></label></div>  
                                <div><label>Start Date: <input type="date" value={experiences.stDate} onChange={(e) => setExperObj({ ...experiences, stDate: e.target.value })} placeholder="enter start Date" /></label></div> 
                                <div><label>End Date: <input type="date" value={experiences.enDate} onChange={(e) => setExperObj({ ...experiences, enDate: e.target.value })} placeholder="enter end Date" /></label></div> 
                            </form>
                    </div> )}

                {display==="experience" && (
                     <div style={{marginLeft:"65%",marginTop:"20px"}}><button className="btn" type="button" onClick={saveData}>Save</button></div>
                )}
            </div>
            
                <div className="TableBox">
                   
                    <table border={1} style={{borderCollapse:"collapse",width:"100%",textAlign:"center"}} >
                        <thead>
                            <tr>
                                <th>S.No</th>   
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>DoJ</th>
                                <th>Gender</th>
                                <th>Years</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arr.map((obj,i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{obj.id}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.age}</td>
                                        <td>{obj.doj}</td>
                                        <td>{obj.gender}</td>
                                        <td>{i}</td>
                                        <td><button>Edit</button></td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                ))
                            }  
                        </tbody>
                    </table>
                </div>
            
        </>
    );
}

export default NavBar;