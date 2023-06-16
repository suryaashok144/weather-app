import axios from "axios"
import './wheather.css'
import React, { useState } from 'react';
let Wheather=()=>{
    const [city,setcity]=useState("");
    const [temparature,settemp]=useState("");
    const[img,setimg]=useState("")
   
    const changing=(e)=>{
        setcity(e.target.value);                                                                                                                                                                                                                                                                                               
    }
    
    const submitting=(e)=>{
        e.preventDefault();
        //console.log(city);
    var api="bfb0fce7a7b4053784ded0d2a31afc0a"
    let a=axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
    .then(val=>{//console.log(val.data)
    let ktemp=val.data.main.temp
    let ctemp=ktemp-273.15
        settemp("Temparature at"+" "+city+"\n"+Math.floor(ctemp)+"°C")
    let image=val.data.weather[0].icon
    setimg(image)
    //console.log(img)
    setcity("")
    
    }).catch(err=>console.error('errrrrr',err,))
    }

    
    return(
        <>
            <div className="body1">
                <h3>Today's Weather Report</h3>
                <form onSubmit={submitting}>
                    <input type="text" name="city" value={city}  placeholder="Enter city name" onChange={changing}/>
                    <input type="submit"  value="Get"/>
                </form>
                <div id="surya" style={{textAlign: "center",justifyContent:"center"}}>
                    {<img src="http://openweathermap.org/img/wn/${img}@2x.png" alt='imagee loading'/>}
                    <h1>{temparature}</h1>

                </div>
            </div>
        </>
        );

}
export default Wheather;