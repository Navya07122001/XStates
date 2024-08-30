import React, { useEffect,useState } from 'react'
import {fetchCountries,fetchStates,fetchCities} from '../data';
const StatesSearch = () => {
    const [countrydata,setCountrydata]=useState([]);
    const [selectedcountry,setSelectedcountry]=useState();
    const [statedata,setStatedata]=useState([]);
    const [citydata,setCitydata]=useState([]);
    const [selectedstate,setSelectedstate]=useState();
    const [selectedcity,setSelectedcity]=useState();
  useEffect(()=>{
    const getdata=async()=>{
    const data=await fetchCountries();
    setCountrydata(data);
    }
   getdata();
  },[])

  const handleChange=(e)=>{
    console.log(e.target.value)
    setSelectedcountry(e.target.value)
  }
  const handleChange2=(e)=>{
    console.log(e.target.value)
    setSelectedcity(e.target.value)
  }
  useEffect(()=>{
    const getdata=async()=>{
     const data=await fetchStates(selectedcountry);
     setStatedata(data);
    }
    getdata()
  },[selectedcountry])
   const handleChange1=(e)=>{
    console.log(e.target.value)
    setSelectedstate(e.target.value)
   }
   useEffect(()=>{
    const getdata=async()=>{
        const data=await fetchCities(selectedcountry,selectedstate);
        setCitydata(data);
       }
       getdata()
   },[selectedcountry,selectedstate])
  return (
    <div>
        <h1>Select Location</h1>
    <div style={{margin:'2rem'}}>
  <select  style={{width:'20rem',height:'2rem'}} onChange={handleChange}>
    <option value="volvo">Select a Country</option>
    {countrydata?.map((ele,index)=>{
        return (
        <option key={index}>{ele}</option>
        )
    })
    }
  </select>
  <select  style={{width:'13rem',height:'2rem'}} onChange={handleChange1} disabled={selectedcountry?false:true}>
    <option value="volvo">Select a State</option>
    {statedata?.map((ele,index)=>{
        return (
        <option key={index} >{ele}</option>
        )
    })
    }
  </select>

  <select  style={{width:'13rem',height:'2rem'}} onChange={handleChange2} disabled={selectedstate?false:true}>
    <option value="volvo">Select a City</option>
    {citydata?.map((ele,index)=>{
        return (
        <option key={index} >{ele}</option>
        )
    })
    }
  </select>
  { selectedcity &&
<div>
    You Selected <span style={{fontSize:'1.5rem',fontWeight:'500'}}>{selectedcountry}</span>,{selectedstate},{selectedcity}
</div>
}
    </div>
    </div>
  )
}

export default StatesSearch;