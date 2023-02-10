import React, {useEffect, useState}from 'react'
import { useSelector } from 'react-redux'
const Drum = ({handleClick}) => {
    let sound = new Audio();
    sound.volume = 0.4;  
    const [buton, setButon] = useState(false)
    const {sounds} = useSelector(state=>state.drums)
    useEffect(()=>{
        document.addEventListener("keydown",detected,false)
    })
    const detected = (e)=>{
        const letter = e.key.toUpperCase()
        
        let pe = document.getElementById("booleano").textContent
        if(letter === "Q" && pe === "On"){
            if(buton){
                sound.src = sounds[0]
                 
                return sound.play()
            }
        }else if(letter === "W" && pe === "On"){
            if(buton){
                sound.src = sounds[1]
                return sound.play()
            }
        }else if(letter === "E" && pe === "On"){
            if(buton){
                sound.src = sounds[2]
                return sound.play()
            }
        }else if(letter === "A" && pe === "On"){
            if(buton){
                sound.src = sounds[3]
                return sound.play()
            }
        }else if(letter === "S" && pe === "On"){
            if(buton){
                sound.src = sounds[4]
                return sound.play()
            }
        }else if(letter === "D" && pe === "On"){
            if(buton){
                sound.src = sounds[5]
                return sound.play()
            }
        }else if(letter === "Z" && pe === "On"){
            if(buton){
                sound.src = sounds[6]
                return sound.play()
            }
        }else if(letter === "X" && pe === "On"){
            if(buton){
                sound.src = sounds[7]
                
                return sound.play()
            }
        }else if(letter === "C" && pe === "On"){
            if(buton){
                sound.src = sounds[8]
                
                return sound.play()
            }
        }else{
            return null;
        }
    }
  return (
    <div className='Drum-pad' >
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>
                    <h2 className='text-center'>Drum Machine</h2>
                </div>
                <div className='drum-main'>
                <div className='drum-machine'>
                    <div className='row'>
                        <div className='col' id='Q' onClick={()=>{handleClick(0,buton)}}>Q</div>
                        <div className='col' id='W' onClick={()=>{handleClick(1,buton)}}>W</div>
                        <div className='col' id='E' onClick={()=>{handleClick(2,buton)}}>E</div>
                    </div>
                    <div className='row'>
                        <div className='col' id='A' onClick={()=>{handleClick(3,buton)}}>A</div>
                        <div className='col' id='S' onClick={()=>{handleClick(4,buton)}}>S</div>
                        <div className='col' id='D' onClick={()=>{handleClick(5,buton)}}>D</div>
                    </div>
                    <div className='row'>
                        <div className='col' id='Z' onClick={()=>{handleClick(6,buton)}}>Z</div>
                        <div className='col' id='X' onClick={()=>{handleClick(7,buton)}}>X</div>
                        <div className='col' id='C' onClick={()=>{handleClick(8,buton)}}>C</div>
                    </div>
                </div>
                
                </div>
                <div className='socials'>
                    <div className='boton'>
                        <button className='btns' id="booleano" onClick={()=>{
                            if(buton === true){
                                setButon(false)
                            }else{
                                setButon(true)
                            }
                        }}>{(buton === true)?"On":"Off"}</button>
                        <div className='filtro'></div>
                    </div>
                    <span className='insta'>
                        <a href='https://www.instagram.com/fer_cp7/' rel="noreferrer" target="_blank"><i className='fa fa-instagram' style={{color: "#6f64e7", fontSize: "25px"}}></i></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Drum