import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ClearIcon from '@mui/icons-material/Clear';

const NavBar = () => {
    const [display, setDisplay] = useState("details");
    const [arr, setArr] = useState([
        {
            "id": "100",
            "name": "raja",
            "email": "raja@gmail.com",
            "age": "23",
            "doj": "2025-02-19",
            "gender": "male",
            "totalExperience": 5,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "3",
                    "stDate": "2025-02-02",
                    "enDate": "2025-02-05"
                },
                {
                    "company": "ibm",
                    "role": "se",
                    "years": "2",
                    "stDate": "2025-02-04",
                    "enDate": "2025-02-10"
                }
            ]
        },
        {
            "id": "200",
            "name": "venu",
            "email": "venu@gmail.com",
            "age": "21",
            "doj": "2025-02-19",
            "gender": "male",
            "totalExperience": 7,
            "experience": [
                {
                    "company": "lima",
                    "role": "sa",
                    "years": "3",
                    "stDate": "2025-02-13",
                    "enDate": "2025-03-06"
                },
                {
                    "company": "ibm",
                    "role": "as",
                    "years": "4",
                    "stDate": "2025-02-12",
                    "enDate": "2025-02-19"
                }
            ]
        },
        {
            "id": "300",
            "name": "candy",
            "email": "candy@gmail.com",
            "age": "65",
            "doj": "2025-02-04",
            "gender": "female",
            "totalExperience": 6,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "6",
                    "stDate": "2025-01-30",
                    "enDate": "2025-02-18"
                }
            ]
        },
        {
            "id": "400",
            "name": "sandy",
            "email": "sandy@gmail.com",
            "age": "38",
            "doj": "2025-01-28",
            "gender": "female",
            "totalExperience": 4,
            "experience": [
                {
                    "company": "lima",
                    "role": "sf",
                    "years": "4",
                    "stDate": "2025-02-05",
                    "enDate": "2025-02-26"
                }
            ]
        },
        {
            "id": "500",
            "name": "bob",
            "email": "bob@gmail.com",
            "age": "36",
            "doj": "2025-02-09",
            "gender": "male",
            "totalExperience": 8,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "8",
                    "stDate": "2025-02-13",
                    "enDate": "2025-02-25"
                }
            ]
        },
        {
            "id": "600",
            "name": "sekhar",
            "email": "sekhar@gmail.com",
            "age": "25",
            "doj": "2025-02-09",
            "gender": "male",
            "totalExperience": 0,
            "experience": [
                {
                    "company": "",
                    "role": "",
                    "years": "",
                    "stDate": "",
                    "enDate": ""
                }
            ]
        },
        {
            "id": "700",
            "name": "sam",
            "email": "sam@gmail",
            "age": "39",
            "doj": "2025-02-06",
            "gender": "female",
            "totalExperience": 1,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "1",
                    "stDate": "2025-01-29",
                    "enDate": "2025-02-19"
                }
            ]
        },
        {
            "id": "800",
            "name": "virat",
            "email": "virat@gmail.com",
            "age": "46",
            "doj": "2025-02-19",
            "gender": "male",
            "totalExperience": 26,
            "experience": [
                {
                    "company": "india",
                    "role": "bat",
                    "years": "14",
                    "stDate": "2025-02-05",
                    "enDate": "2025-02-12"
                },
                {
                    "company": "ranji",
                    "role": "keeper",
                    "years": "2",
                    "stDate": "2025-02-06",
                    "enDate": "2025-02-18"
                },
                {
                    "company": "ipl",
                    "role": "captain",
                    "years": "10",
                    "stDate": "2025-02-03",
                    "enDate": "2025-02-16"
                }
            ]
        }
    ]
    );
    const [obj, setObj] = useState({ id: "", name: "", email: "", age: "", doj: "", gender: "", totalExperience: 0, experience: [{ company: "", role: "", years: "", stDate: "", enDate: "" }] });

    const [indexVal, setIndexVal] = useState(null);
    const [bool, setBool] = useState(false);

    const [searchObj, setSearchObj] = useState({ id: "", name: "", email: "", age: "", doj: "", gender: "", totalExperience: "" });
    const [filArr, setFilArr] = useState([
        {
            "id": "100",
            "name": "raja",
            "email": "raja@gmail.com",
            "age": "23",
            "doj": "2025-02-19",
            "gender": "male",
            "totalExperience": 5,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "3",
                    "stDate": "2025-02-02",
                    "enDate": "2025-02-05"
                },
                {
                    "company": "ibm",
                    "role": "se",
                    "years": "2",
                    "stDate": "2025-02-04",
                    "enDate": "2025-02-10"
                }
            ]
        },
        {
            "id": "200",
            "name": "venu",
            "email": "venu@gmail.com",
            "age": "21",
            "doj": "2025-02-19",
            "gender": "male",
            "totalExperience": 7,
            "experience": [
                {
                    "company": "lima",
                    "role": "sa",
                    "years": "3",
                    "stDate": "2025-02-13",
                    "enDate": "2025-03-06"
                },
                {
                    "company": "ibm",
                    "role": "as",
                    "years": "4",
                    "stDate": "2025-02-12",
                    "enDate": "2025-02-19"
                }
            ]
        },
        {
            "id": "300",
            "name": "candy",
            "email": "candy@gmail.com",
            "age": "65",
            "doj": "2025-02-04",
            "gender": "female",
            "totalExperience": 6,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "6",
                    "stDate": "2025-01-30",
                    "enDate": "2025-02-18"
                }
            ]
        },
        {
            "id": "400",
            "name": "sandy",
            "email": "sandy@gmail.com",
            "age": "38",
            "doj": "2025-01-28",
            "gender": "female",
            "totalExperience": 4,
            "experience": [
                {
                    "company": "lima",
                    "role": "sf",
                    "years": "4",
                    "stDate": "2025-02-05",
                    "enDate": "2025-02-26"
                }
            ]
        },
        {
            "id": "500",
            "name": "bob",
            "email": "bob@gmail.com",
            "age": "36",
            "doj": "2025-02-09",
            "gender": "male",
            "totalExperience": 8,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "8",
                    "stDate": "2025-02-13",
                    "enDate": "2025-02-25"
                }
            ]
        },
        {
            "id": "600",
            "name": "sekhar",
            "email": "sekhar@gmail.com",
            "age": "25",
            "doj": "2025-02-09",
            "gender": "male",
            "totalExperience": 0,
            "experience": [
                {
                    "company": "",
                    "role": "",
                    "years": "",
                    "stDate": "",
                    "enDate": ""
                }
            ]
        },
        {
            "id": "700",
            "name": "sam",
            "email": "sam@gmail",
            "age": "39",
            "doj": "2025-02-06",
            "gender": "female",
            "totalExperience": 1,
            "experience": [
                {
                    "company": "lima",
                    "role": "sd",
                    "years": "1",
                    "stDate": "2025-01-29",
                    "enDate": "2025-02-19"
                }
            ]
        },
        {
            "id": "800",
            "name": "virat",
            "email": "virat@gmail.com",
            "age": "46",
            "doj": "2025-02-19",
            "gender": "male",
            "totalExperience": 26,
            "experience": [
                {
                    "company": "india",
                    "role": "bat",
                    "years": "14",
                    "stDate": "2025-02-05",
                    "enDate": "2025-02-12"
                },
                {
                    "company": "ranji",
                    "role": "keeper",
                    "years": "2",
                    "stDate": "2025-02-06",
                    "enDate": "2025-02-18"
                },
                {
                    "company": "ipl",
                    "role": "captain",
                    "years": "10",
                    "stDate": "2025-02-03",
                    "enDate": "2025-02-16"
                }
            ]
        }
    ]
    
    );

    console.log("arr",arr)
    function addExperience() {
        setObj({ ...obj, experience: [...obj.experience, { company: "", role: "", years: "", stDate: "", enDate: "" }] });
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

    function deleteData(ind) {
        let updateArr = arr.filter((item, i) => i !== ind);
        setArr(updateArr);
        setFilArr(updateArr);
    }

    function searching(key, e) {
        let value = e.target.value;
        let updatedSearchObj = { ...searchObj, [key]: value };
        setSearchObj(updatedSearchObj);
        filteredData(updatedSearchObj);
    }

    function experienceObj(index, field, value) {
        const updatedExperience = [...obj.experience]
        updatedExperience[index][field] = value
        setObj({ ...obj, experience: updatedExperience })
        sumOfYears({ ...obj, experience: updatedExperience });
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

    function deleteExperi(index) {
        const updateExper = obj.experience.filter((item, i) => i !== index);
        setObj({ ...obj, experience: updateExper });
        sumOfYears({ ...obj, experience: updateExper });
    }

    function sumOfYears(data) {
        let sum = data.experience.reduce((total, iVal) => total + Number(iVal.years), 0);
        setObj({ ...data, totalExperience: sum });
    }

    function sorting(val,sortVal){
        console.log("val = ",val)
        console.log("sortVal = ",sortVal)
        let sortedArr = [...arr];
      
        if(sortVal === 'ASC'){
            sortedArr.sort((a,b) => {
                if(typeof a[val] === 'number' &&  typeof b[val] === 'number'){
                    return a[val] - b[val];
                }
                return a[val] > b[val] ? 1 : -1;
            })         
        }
         if(sortVal === 'DSC'){
            sortedArr.sort((a,b) =>{
                if(typeof a[val] === 'number' && typeof b[val] === 'number'){
                    return b[val] - a[val];
                }
                return a[val] < b[val ] ? 1 : -1;
            })
        }
        setFilArr(sortedArr === 'normal' ? arr : sortedArr);
    }

    return (
        <>

            <nav className="navbar">
                <div className="toggle_btn_container">
                    <button className={display === 'details' ? 'toggel_btn toggel_btn_active' : 'toggel_btn'} onClick={() => setDisplay("details")}>Details</button>
                    <button className={display === 'experience' ? 'toggel_btn toggel_btn_active' : 'toggel_btn'} onClick={() => setDisplay("experience")}>Experience</button>
                </div>

                <button className="save_btn" type="button" onClick={!bool ? saveData : updateData}>{!bool ? 'Save' : 'Update'}</button>
            </nav>

            {display === "details" && (
                <div className="container">
                    <h2>Personal Details</h2>
                    <form className="form">
                        <input type="number" value={obj.id} onChange={(e) => setObj({ ...obj, id: e.target.value })} placeholder=" Id" required />
                        <input type="text" value={obj.name} onChange={(e) => setObj({ ...obj, name: e.target.value })} placeholder=" Name" required />
                        <input type="email" value={obj.email} onChange={(e) => setObj({ ...obj, email: e.target.value })} placeholder=" Email" />
                        <input type="number" value={obj.age} onChange={(e) => setObj({ ...obj, age: e.target.value })} placeholder=" Age" required />
                        <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} value={obj.doj} onChange={(e) => setObj({ ...obj, doj: e.target.value })} placeholder=" Date of Joining" />
                        {/* <input type="date" value={obj.doj} onChange={(e) => setObj({ ...obj, doj: e.target.value })} placeholder=" Date of Joining" /> */}
                        <select value={obj.gender} onChange={(e) => setObj({ ...obj, gender: e.target.value })} required>
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </form>
                </div>
            )}

            {display === "experience" && (
                <div className="prevContainer">
                    <div className="heading_bar">
                        <span className="spanPre">Previous Company Details</span>
                        <span style={{verticalAlign:"middle"}}><AddIcon onClick={addExperience} style={{ fontSize: "30px", cursor: "pointer", marginLeft: "3px" }} /></span>
                    </div>

                    <div className="expDiv">
                        {obj.experience.map((exp, index) => {
                            const { company, role, years, stDate, enDate } = exp;
                            return (
                                <>
                                    {index === 0 ? null : <div className="hr_line"></div>}
                                    <form key={index} className="experContainer">
                                        <DeleteIcon onClick={() => deleteExperi(index)} style={{ marginLeft: "267px", fontSize: "25px" }} />
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

            <div className="tableBox">
                <table className="table" >
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Id<span className="up_down_Ions"><ArrowDropUpSharpIcon className="icon_Up" onClick={() => sorting("id","ASC")}/><ArrowDropDownSharpIcon className="icon_Down" onClick={() => sorting("id","DSC")}/></span><ClearIcon className="Clear_Icon" onClick={() => sorting("id","noraml")}/></th>
                            <th>Name<span className="up_down_Ions"><ArrowDropUpSharpIcon className="icon_Up" onClick={() => sorting("name","ASC")}/><ArrowDropDownSharpIcon className="icon_Down" onClick={() => sorting("name","DSC")}/></span><ClearIcon className="Clear_Icon" onClick={() => sorting("id","normal")}/></th>
                            <th>Email<span className="up_down_Ions"><ArrowDropUpSharpIcon className="icon_Up" onClick={() => sorting("email","ASC")}/><ArrowDropDownSharpIcon className="icon_Down" onClick={() => sorting("email","DSC")}/></span><ClearIcon className="Clear_Icon" onClick={() => sorting("id","normal")}/></th>
                            <th>Age<span className="up_down_Ions"><ArrowDropUpSharpIcon className="icon_Up" onClick={() => sorting("age","ASC")}/><ArrowDropDownSharpIcon className="icon_Down" onClick={() => sorting("age","DSC")}/></span><ClearIcon className="Clear_Icon" onClick={() => sorting("id","normal")}/></th>
                            <th>DOJ<span className="up_down_Ions"><ArrowDropUpSharpIcon className="icon_Up" onClick={() => sorting("doj","ASC")}/><ArrowDropDownSharpIcon className="icon_Down" onClick={() => sorting("doj","DSC")}/></span><ClearIcon className="Clear_Icon" onClick={() => sorting("id","normal")}/></th>
                            <th>Gender<span className="up_down_Ions"><ArrowDropUpSharpIcon className="icon_Up" onClick={() => sorting("gender","ASC")}/><ArrowDropDownSharpIcon className="icon_Down" onClick={() => sorting("gender","DSC")}/></span><ClearIcon className="Clear_Icon" onClick={() => sorting("id","normal")}/></th>
                            <th>Service<span className="up_down_Ions"><ArrowDropUpSharpIcon className="icon_Up" onClick={() => sorting("totalExperience","ASC")}/><ArrowDropDownSharpIcon className="icon_Down" onClick={() => sorting("totalExperience","DSC")}/></span><ClearIcon className="Clear_Icon" onClick={() => sorting("id","normal")}/></th>
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
                            <th style={{ textAlign: "center" }}><EditIcon /></th>
                            <th style={{ textAlign: "center" }}><DeleteIcon /></th>
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
                                    <td><button onClick={() => editData(i)}>Edit</button></td>
                                    <td><button onClick={() => deleteData(i)}>Delete</button></td>
                                </tr>
                            )) : <tr><td colSpan={10} style={{ textAlign: "center" }}>No Data</td></tr>}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default NavBar;
