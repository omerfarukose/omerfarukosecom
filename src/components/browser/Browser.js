import React, {useState, useEffect} from 'react'
import './Browser.css'
import { ThreeCircle } from '../threeCircle/ThreeCircle'
import { TypeAnimation } from 'react-type-animation';


export const Browser = ( props ) => {

    let { handleClose } = props

    const [showIcon, setShowIcon] = useState(false)
    const [displaySecondText, setDisplaySecondText] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDisplaySecondText(true)
        }, 1500);
    }, [])

    return(
        <div className='browser-container'>
            <div className='browser-top-bar'>
                <ThreeCircle onCloseClick={handleClose} showIcon={showIcon} onSetShowIcon={setShowIcon}/>
                <div className='browser-top-bar-url'>
                    <img style={{height:"85%",marginRight:"14px"}} src='./images/globe.png' alt='#'/>
                    <div style={{flex:"1"}}>
                        omerfarukose.com
                    </div>
                    <img 
                        onClick={()=>{
                        }}
                        style={{height:"70%",marginRight:"14px",cursor:"pointer"}} src='./images/reset.png' alt='#'/>
                </div>
            </div>
            <div className='browser-content'>
                <div className='browser-header'>
                    <div style={{flex:"1",display:"flex",flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
                        <lord-icon
                            src="https://cdn.lordicon.com/nobciafz.json"
                            trigger="hover"
                            colors="primary:#ffffff,secondary:#08a88a"
                            style={{width:"150px",height:"150px",zIndex:0}}>
                        </lord-icon>
                        <div>
                        <TypeAnimation
                            sequence={[
                                "hi, I'm Omer",          
                            ]}
                            wrapper="div"
                            cursor={false}
                            repeat={false}
                            style={{ fontSize: '2em' ,color: "white"}}/>
                        </div>
                        <div style={{
                            height:"50px",
                        }}>
                            {
                                displaySecondText &&
                                <TypeAnimation
                                sequence={[
                                    "I'm a Mobile Develomer",
                                    700,
                                    "I'm a Mobile Developer",
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={false}
                                style={{ fontSize: '2em',color: "#06d6a0"}}/>
                            }
                        </div>
                    </div>
                    
                    <lord-icon
                        src="https://cdn.lordicon.com/wtfdpwey.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#08a88a"
                        style={{width:"50px",height:"50px",zIndex:0}}>
                    </lord-icon>
                </div>

                <div className='browser-personal-accounts'>
                    <div className='browser-personal-accounts-images'>
                        <a href='https://github.com/omerfarukose' target="blank" className='browser-personal-accounts-img-circle'>
                            <img className='browser-personal-accounts-img' src='./images/github.png'/>
                        </a>
                        <a href='https://www.linkedin.com/in/omerfarukose/' target="blank" className='browser-personal-accounts-img-circle'>
                            <img className='browser-personal-accounts-img' src='./images/linkedin.png'/>
                        </a>
                        <a href='mailto:omerfarukose@outlook.com' className='browser-personal-accounts-img-circle'>
                            <img className='browser-personal-accounts-img' src='./images/outlook.png'/>
                        </a>
                    </div>
                    <div className='browser-personal-accounts-text'>
                        <div 
                            style={{
                                fontSize: '2em',
                                color: "#06d6a0",
                                width:"50%",
                                display:"flex",
                                alignItems:"flex-end",
                                justifyContent:"flex-end",
                            }}>
                            <p>omerfarukose@ </p>
                        </div>
                        <TypeAnimation
                            sequence={[
                                " GitHub",
                                700,
                                " LinkedIn",
                                700,
                                " outlook.com",
                                700,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em',color: "#06d6a0"}}/>
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}