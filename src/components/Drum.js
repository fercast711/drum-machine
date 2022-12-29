import React, {useEffect, useState}from 'react'
import { useSelector } from 'react-redux'
const Drum = () => {
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
                        <div className='col' id='Q' onClick={()=>{
                               if(buton){
                                sound.src = sounds[0]
                                return sound.play()
                            } 
                        }}>Q</div>
                        <div className='col' id='W' onClick={()=>{
                            if(buton){
                                sound.src = sounds[1]
                                return sound.play()
                            }  
                        }}>W</div>
                        <div className='col' id='E' onClick={()=>{
                            if(buton){
                                sound.src = sounds[2]
                                return sound.play()
                            }  
                        }}>E</div>
                    </div>
                    <div className='row'>
                        <div className='col' id='A' onClick={()=>{
                            if(buton){
                                sound.src = sounds[3]
                                return sound.play()
                            }  
                        }}>A</div>
                        <div className='col' id='S' onClick={()=>{
                            if(buton){
                                sound.src = sounds[4]
                                return sound.play()
                            }  
                        }}>S</div>
                        <div className='col' id='D' onClick={()=>{
                            if(buton){
                                sound.src = sounds[5]
                                return sound.play()
                            }  
                        }}>D</div>
                    </div>
                    <div className='row'>
                        <div className='col' id='Z' onClick={()=>{
                            if(buton){
                                sound.src = sounds[6]
                                return sound.play()
                            }  
                        }}>Z</div>
                        <div className='col' id='X' onClick={()=>{
                            if(buton){
                                sound.src = sounds[7]
                                return sound.play()
                            }  
                        }}>X</div>
                        <div className='col' id='C' onClick={()=>{
                            if(buton){
                                sound.src = sounds[8]
                                return sound.play()
                            }  
                        }}>C</div>
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