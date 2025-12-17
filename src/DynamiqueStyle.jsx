import { useState } from "react"
export default function DynamiqueStyle() {
    const[textTransform,setTextTransform]=useState('capitalize')
    return (
        <>
            <section >
                <h6>SCREEN</h6>
                <div   style={{
                    border:'tomato 1px solid',
                    textAlign:'center',
                    textTransform:textTransform,
                    //TODO
                    backgroundColor:'#c2e417b1',
                    fontSize: '12px',
                    color: '#1e3eceff',

                }}  >
                    <h1>abc abc</h1>
                </div>
            </section>
            <section>
                <h6>UPPERCASE / LOWERCASE</h6>
                <button 
                    onClick={
                        ()=>{
                          setTextTransform('uppercase')  
                        }
                    }
                >To UPPERCASE</button>
                <button
                onClick={
                        ()=>{
                          setTextTransform('lowercase')  
                        }
                    }
                >To lowercase</button>
            </section>
            <section>
                <h6>backgroundColor</h6>
                <button>#c2e417b1</button>
                <button>#1e3eceff</button>
                <button>red</button>
                <button>red</button>
                <button>red</button>
            </section>
            <section>
                <h1></h1>
            </section>
        </>
    )
};
