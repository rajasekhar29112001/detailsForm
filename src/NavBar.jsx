import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    const [display, setDisplay] = useState("details");
    const [arr, setArr] = useState([]);
    const [obj, setObj] = useState({ id: "", name: "", email: "", age: "", doj: "", gender: "", totalExperience: 0, experience: [{ company: "", role: "", years: "", stDate: "", enDate: "" }] });

    const [indexVal, setIndexVal] = useState(null);
    const [bool, setBool] = useState(false);

    const [searchObj, setSearchObj] = useState({ id: "", name: "", email: "", age: "", doj: "", gender: "", totalExperience: "" });
    const [filArr, setFilArr] = useState([]);

    function addExperience() {
        setObj({ ...obj, experience: [...obj.experience, { company: "", role: "", years: "", stDate: "", enDate: "" }] });
    }

    function deleteExperi(index) {
        const updateExper = obj.experience.filter((item, i) => i !== index);
        setObj({ ...obj, experience: updateExper });
        sumOfYears();
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
        console.log("filterData = ", filterData)
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
        setObj({ ...obj, experience: updatedExperience })
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
        } else {
            let updateData = [...arr, obj];
            console.log("updateData = ", updateData)
            setArr(updateData);
            setFilArr(updateData);
        }
        setObj({ id: "", name: "", email: "", age: "", doj: "", gender: "", totalExperience: 0, experience: [{ company: "", role: "", years: "", stDate: "", enDate: "" }] });
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
        setObj({ id: "", name: "", email: "", age: "", doj: "", gender: "", totalExperience: 0, experience: [{ company: "", role: "", years: "", stDate: "", enDate: "" }] });
    }

    return (
        <>

            <div className="head">
                <div><button className={display === 'details' ? 'hbtn hbtn_active' : 'hbtn'} onClick={() => setDisplay("details")}>Details</button></div>
                <div><button className={display === 'experience' ? 'hbtn hbtn_active' : 'hbtn'} onClick={() => setDisplay("experience")}>Experience</button></div>
            </div>


            <div className="btndiv">
                <button className="btn" type="button" onClick={!bool ? saveData : updateData}>{!bool ? 'Save' : 'Update'}</button>
            </div>

            {display === "details" && (
                <div className="container">
                    <h2>Personal Details</h2>
                    <form className="form">
                        <input type="number" value={obj.id} onChange={(e) => setObj({ ...obj, id: e.target.value })} placeholder=" Id" required />
                        <input type="text" value={obj.name} onChange={(e) => setObj({ ...obj, name: e.target.value })} placeholder=" Name" required />
                        <input type="email" value={obj.email} onChange={(e) => setObj({ ...obj, email: e.target.value })} placeholder=" Email" />
                        <input type="number" value={obj.age} onChange={(e) => setObj({ ...obj, age: e.target.value })} placeholder=" Age" required />
                        <input type="type" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} value={obj.doj} onChange={(e) => setObj({ ...obj, doj: e.target.value })} placeholder=" Date of Joining" />
                        <select value={obj.gender} onChange={(e) => setObj({ ...obj, gender: e.target.value })} required>
                            <option value="">Select Gender</option>
                            <option style={{ color: "black" }} value="male">Male</option>
                            <option style={{ color: "black" }} value="female">Female</option>
                        </select>

                    </form>
                </div>
            )}

            {display === "experience" && (
                <div className="prevContainer">
                    <span className="spanPre">Previous Company Details</span>
                    <span><AddIcon onClick={addExperience} style={{ fontSize: "30px", cursor: "pointer", marginLeft: "3px", verticalAlign: "top" }} /></span>
                    <div className="expDiv">
                        {obj.experience.map((exp, index) => {
                            const { company, role, years, stDate, enDate } = exp;
                            return (
                                <>
                                    { index === 0 ? null : <div className="line"></div>}
                                    <form key={index} className="experContainer">
                                        <DeleteIcon onClick={() => deleteExperi(index)} style={{ marginLeft: "250px", fontSize: "25px", marginTop: "9px" }} />
                                        <input type="text" value={company} onChange={(e) => experienceObj(index, "company", e.target.value)} placeholder="Company" />
                                        <input type="text" value={role} onChange={(e) => experienceObj(index, "role", e.target.value)} placeholder="Role" />
                                        <input type="number" value={years} onChange={(e) => experienceObj(index, "years", e.target.value)} placeholder="Years" />
                                        <input type="text" value={stDate} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={(e) => experienceObj(index, "stDate", e.target.value)} placeholder="Start Date" />
                                        <input type="text" value={enDate} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} onChange={(e) => experienceObj(index, "enDate", e.target.value)} placeholder="End Date" />
                                    </form>
                                </>
                            )    
                        })}
                    </div>

                </div>
            )}

            <div className="TableBox">
                <table className="table" style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}>
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
                        <tr>
                            <th><AccountCircleIcon /></th>
                            <th><input value={searchObj.id} onChange={(e) => searching("id", e)} /></th>
                            <th><input value={searchObj.name} onChange={(e) => searching("name", e)} /></th>
                            <th><input value={searchObj.email} onChange={(e) => searching("email", e)} /></th>
                            <th><input value={searchObj.age} onChange={(e) => searching("age", e)} /></th>
                            <th><input value={searchObj.doj} onChange={(e) => searching("doj", e)} /></th>
                            <th><input value={searchObj.gender} onChange={(e) => searching("gender", e)} /></th>
                            <th><input value={searchObj.totalExperience} onChange={(e) => searching("totalExperience", e)} /></th>
                            <th style={{textAlign:"center"}}><EditIcon /></th>
                            <th style={{textAlign:"center"}}><DeleteIcon /></th>
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
                                    <td >{obj.totalExperience}</td>
                                    <td style={{textAlign:"center"}}><button onClick={() => editData(i)}>Edit</button></td>
                                    <td style={{textAlign:"center"}}><button onClick={() => deleteData(i)}>Delete</button></td>
                                </tr>
                            )) : <tr><td colSpan={10} style={{textAlign:"center"}}>No Data</td></tr>}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default NavBar;
