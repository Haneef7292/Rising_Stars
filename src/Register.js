import axios from "axios";
import React, { useState } from "react";


const Myregister = ()=>{

  const [name, pickName]=useState("");
  const [email, pickEmail]=useState("");
  const [address, pickAddress]=useState("");
  const [mobile, pickMobile]=useState("");
  const [address1, pickAddress1]=useState("");
  const [address2, pickAddress2]=useState("");
  const [city, pickCity]=useState("");
  const [postcode, pickPostcode]=useState("");
  const [msg, updatemsg]=useState("");

  const save= ()=>{
    var url="";
    var registerinfo={
      "name":name,
      "email":email,
      "address":address,
      "mobile":mobile,
      "address1":address1,
      "address2":address2,
      "city":city,
      "postcode":postcode,
    };
    axios.post(url, registerinfo)
    .then(response=>{
      updatemsg(name + "Register Successfully");
      pickName("");
      pickEmail("");
      pickAddress("");
      pickMobile("");
      pickAddress1("");
      pickAddress2("");
      pickCity("");
      pickPostcode("");
    })
  }
 return(
     <div className="parent">
         <div className="Rectangle-2">
             <img src="star.png" alt="star"/>
                <p className="Rising-Stars2">
                       Rising Stars
                 </p>
                 <img src="parent.png" className="schol" alt="school"/>
         </div>
            <span className="Parent-Registration">
               Parent Registration
            </span>
            <p className="Enter-your-details-to-register">
                  Enter your details to register
            </p>
           <p>{msg}</p>
            <div className="text-field">
			        <input type="name" required="required"
              onChange={obj=>pickName(obj.target.value)} vlaue={name}/>
			         <label> Your Full Name</label>
            </div>
               <p className="Enter-parent-s-name-here">
                 Enter parent ’s name here
                </p>
            <div className="text-field">
			        <input type="email" required="required"
              onChange={obj=>pickEmail(obj.target.value)} value={email}/>
			         <label> Email</label>
            </div>
            <div className="text-field">
			        <input type="" required="required"
              onChange={obj=>pickMobile(obj.target.value)} value={mobile} />
			         <label> Contact Number*</label>
            </div>
            <div className="text-field">
			        <input type="text" required="required"
               onChange={obj=>pickAddress(obj.target.value)} value={address}/>
			         <label>Start Typing Your Address*</label>
            </div>
            <div className="text-field">
			        <input type="text" required="required"
               onChange={obj=>pickAddress1(obj.target.value)} value={address1}/>
			         <label> Address Line 1*</label>
            </div>
            <div className="text-field">
			        <input type="text" required="required"
               onChange={obj=>pickAddress2(obj.target.value)} value={address2}/>
			         <label> Address Line 2*</label>
            </div>
            <div className="text-field">
			        <input type="text" required="required"
               onChange={obj=>pickCity(obj.target.value)} value={city}/>
			         <label> City/Town</label>
            </div>
            <div className="text-field">
			        <input type="text" required="required"
               onChange={obj=>pickPostcode(obj.target.value)} value={postcode}/>
			         <label> Postcode</label>
            </div>
            <p className="I-would-like-to-receive-Rising-Stars-newsletter-and-other-communications">
                I would like to receive
               <span className="text-style-1">Rising Stars</span>
                 <span className="text-style-2"></span>
                      newsletter and other communications
                  </p>
                  <p className="Yes-please">
                   <input type="radio" className="rado"/> Yes, please
                  </p>
                  <p className="No-thanks">
                       <input type="radio" className="rado"/> No, thanks
                   </p>
                   <div className="Rectangle-17">
                     <span className="Register reg" onClick={save}>
                        Register
                          </span>
                   </div>
                   <p className="By-registering-you-are-agreed-to-our-Term-and-Conditions">
  By registering you are agreed to our
  <span className="text-style-1">Term and Conditions</span>
</p>
     </div>
 )
}
export default Myregister;