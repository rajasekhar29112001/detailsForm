import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    const [display, setDisplay] = useState("details");
    const [arr, setArr] = useState([]);
    const [obj, setObj] = useState({ id: "",  name: "",  email: "",  age: "", doj: "", gender: "",  totalExperience: 0, experience: [{ company: "", role: "", years: "", stDate: "", enDate: "" }]});

    const [indexVal, setIndexVal] = useState(null);
    const [bool, setBool] = useState(false);

    const [searchObj, setSearchObj] = useState({ id: "", name: "", email: "", age: "", doj: "", gender: "", totalExperience: "" });
    const [filArr, setFilArr] = useState([]);

    function addExperience() {
        setObj({...obj, experience: [...obj.experience, { company: "", role: "", years: "", stDate: "", enDate: "" }]});
    }
    console.log("Obj = ",obj)

    function deleteExperience(index){
        let newObj = [...obj.experience]; 
    }

    function searching(key, e) {
        let value = e.target.value;
        let updatedSearchObj = { ...searchObj, [key]: value };
        setSearchObj(updatedSearchObj);
        filteredData(updatedSearchObj);
    }

    function filteredData(data) {
        const filterData = arr.filter(item => 
            item.id.includes(data.id) &&
            item.name.toLowerCase().includes(data.name.toLowerCase()) &&
            item.email.toLowerCase().includes(data.email.toLowerCase()) &&
            item.age.includes(data.age) &&
            item.doj.includes(data.doj) &&
            item.gender.toLowerCase().includes(data.gender.toLowerCase()) &&
            item.totalExperience.toString().includes(data.totalExperience)
        ); 
        console.log("filterData = ",filterData)
        setFilArr(filterData);
    }

    function experienceObj(index, field, value) {
        // setObj(obj => {
        //     const updatedExperience = obj.experience.map((exp, i) =>
        //         i === index ? { ...exp, [field]: value } : exp
        //     );
        //     return { ...obj, experience: updatedExperience };
        // });

        // sumOfYears();

        const updatedExperience = [...obj.experience]
        updatedExperience[index][field] = value
        setObj({...obj, experience : updatedExperience})
        sumOfYears();
    }

    function sumOfYears() {
        let sum = obj.experience.reduce((total, iVal) => total + Number(iVal.years), 0);
        setObj(obj => ({ ...obj, totalExperience: sum }));
    }

    function saveData() {
        (!obj.id || !obj.name || !obj.email || !obj.age || !obj.doj || !obj.gender) ? alert("Please enter all fields") : filterDupData();
    }

    function filterDupData() {
        if (arr.some(e => e.id === obj.id)) {
            alert("This ID is already recorded.");
        }else{
            let updateData = [...arr, obj];
            console.log("updateData = ",updateData)
            setArr(updateData);
            setFilArr(updateData);
        }
        setObj({id: "", name: "",email: "", age: "", doj: "",gender: "", totalExperience: 0, experience: [{ company: "", role: "", years: "", stDate: "", enDate: "" }]});
    }

    function deleteData(ind) {
        let updateArr = arr.filter((item, i) => i !== ind);
        setArr(updateArr);
        setFilArr(updateArr);
    }

    function editData(index) {
        setObj(arr[index]);
        setIndexVal(index);
        setBool(true);
        setDisplay("details");
    }

    function updateData() {
        let updatedArr = [...arr];
        updatedArr[indexVal] = obj;
        setArr(updatedArr);
        setFilArr(updatedArr);
        setBool(false);
        setObj({id: "", name: "",email: "", age: "", doj: "",gender: "", totalExperience: 0, experience: [{ company: "", role: "", years: "", stDate: "", enDate: "" }]});
    }

    return (
        <>
            <div className="head">
                <button className="hbtn" onClick={() => setDisplay("details")}>Details</button>
                <button className="hbtn" onClick={() => setDisplay("experience")}>Experience</button>
            </div>

            {display === "details" && (
                <div className="container">
                    <h2>Personal Details</h2>
                    <form>
                        <label>Id: <input type="number" value={obj.id} onChange={(e) => setObj({ ...obj, id: e.target.value })} placeholder="Enter Id" required /></label>
                        <label>Name: <input type="text" value={obj.name} onChange={(e) => setObj({ ...obj, name: e.target.value })} placeholder="Enter Name" required /></label>
                        <label>Email: <input type="email" value={obj.email} onChange={(e) => setObj({ ...obj, email: e.target.value })} placeholder="Enter Email"  /></label>
                        <label>Age: <input type="number" value={obj.age} onChange={(e) => setObj({ ...obj, age: e.target.value })} placeholder="Enter Age" required /></label>
                        <label>Date of Joining: <input type="date" value={obj.doj} onChange={(e) => setObj({ ...obj, doj: e.target.value })} required /></label>
                        <label>Gender:
                            <select value={obj.gender} onChange={(e) => setObj({ ...obj, gender: e.target.value })} required>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>
                    </form>
                </div>
            )}

            {display === "experience" && (
                <div className="container">
                    <h2>Previous Company Details</h2>
                    <AddIcon onClick={addExperience} style={{ float: "right", marginRight: "20px", fontSize: "32px", cursor: "pointer" }} /><br/><br/>
                    {obj.experience.map((exp, index) => (
                        <form key={index} className="experContainer">
                            <div><label>Company: <input type="text" value={exp.company} onChange={(e) => experienceObj(index, "company", e.target.value)} placeholder="Enter company"/></label></div>
                            <div><label>Role: <input type="text" value={exp.role} onChange={(e) => experienceObj(index, "role", e.target.value)} placeholder="Enter role"/></label></div>
                            <div><DeleteIcon onClick={deleteExperience({index})} style={{marginLeft:"230%",marginTop:"10px"}}/></div>
                            <div><label>Years: <input type="number" value={exp.years} onChange={(e) => experienceObj(index, "years", e.target.value)} placeholder="Enter years"/></label></div>
                            <div><label>Start Date: <input type="date" value={exp.stDate} onChange={(e) => experienceObj(index, "stDate", e.target.value)} /></label></div>
                            <div><label>End Date: <input type="date" value={exp.enDate} onChange={(e) => experienceObj(index, "enDate", e.target.value)} /></label></div>
                        </form>
                    ))}
                </div>
            )}

            {display === "experience" && (
                <div style={{ marginLeft: "65%", marginTop: "20px" }}>
                    <button className="btn" type="button" onClick={!bool ? saveData : updateData}>{!bool ? 'Save' : 'Update'}</button>
                </div>
            )}

            <div className="TableBox">
                <table style={{ borderCollapse: "collapse", width: "90%", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>DoJ</th>
                            <th>Gender</th>
                            <th>Experience</th>
                            <th>Changes</th>
                            <th>Remove</th>
                        </tr>
                        <tr style={{ padding: "5px" }}>
                            <th><AccountCircleIcon /></th>
                            <th><input value={searchObj.id} onChange={(e) => searching("id", e)} /></th>
                            <th><input value={searchObj.name} onChange={(e) => searching("name", e)} /></th>
                            <th><input value={searchObj.email} onChange={(e) => searching("email", e)} /></th>
                            <th><input value={searchObj.age} onChange={(e) => searching("age", e)} /></th>
                            <th><input value={searchObj.doj} onChange={(e) => searching("doj", e)} /></th>
                            <th><input value={searchObj.gender} onChange={(e) => searching("gender", e)} /></th>
                            <th><input value={searchObj.totalExperience} onChange={(e) => searching("totalExperience", e)} /></th>
                            <th><EditIcon /></th>
                            <th><DeleteIcon /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filArr.length > 0 ? 
                            filArr.map((obj, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.age}</td>
                                <td>{obj.doj}</td>
                                <td>{obj.gender}</td>
                                <td>{obj.totalExperience}</td>
                                <td><button onClick={() => editData(i)}>Edit</button></td>
                                <td><button onClick={() => deleteData(i)}>Delete</button></td>
                            </tr>
                        )) : <tr><td colSpan={10}>No Data</td></tr> }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default NavBar;
