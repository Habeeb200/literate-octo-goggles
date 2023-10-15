import React, { useEffect, useState } from 'react'

function Names() {
    // const data = [
    //     { id: 1, name: "John Doe" },
    //     { id: 2, name: "Victor Wayne" },
    //     { id: 3, name: "Jane Doe" },
    // ];
    // const alertName = ()=>{
    //     alert("You have clicked a link")
    // }
    // const[name, setName] = useState("Habeeb")
    // const changeName = ()=>{
    //     setName("Ajayi")
    // }
    // const[profile, setProfile] = useState({
    //     name: "John Doe",
    //     job: "Web Developer",
    //     company: "Microsoft"
    // })  
    // const updateprofile = ()=>{
    //     setProfile({...profile, job: "Mobile App Developer"})
    // }  
     let [number, setNumber] = useState(0)
     let [num, setNumbe] = useState(10)
     const increase = ()=>{
        setNumber(number +1)
     }
     const decrease = ()=>{
        if(num == 0){
            setNumbe(0)
        }else{
            setNumbe(num-1)
        }
     }
     const reset = ()=>{
        setNumber(0)
     }
     useEffect(()=>{
        console.log("Triggered")
     },[num])
  return (
    // <div className="users">
    // {data.map((user) => {
    //     return(
    //         <div className="user">{user.name}</div>

    //     )
    // })}
    // </div>
    // <a href='Facebook.com' onClick={alertName}>Click Me</a>
    // <div>
    //     <h3>{name}</h3>
    //     <button onMouseOver={changeName}>Change Name</button>
    // </div>
    // <div>
    //    <h3>{profile.name}</h3> 
    //    <h4>{profile.job}</h4>
    //    <h5>{profile.company}</h5>
    //    <button onClick={updateprofile}>Update Profile</button>
    // </div>
    <div>
        <h1>{number}</h1>
        <h1>{num}</h1>
        <button onClick={increase}>Increement</button>
        <button onClick={decrease}>Decreement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Names
