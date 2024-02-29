import React from "react";
 
const Workmodal = ({ isOpen, onClose, comp, children }) => {
    if (!isOpen) return null;
    
    let height=150;
    console.log(comp) 
    if(comp==='NTT' || comp==="FIS" ){
      height = 225;
    }

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: height,
                    width: 500,
                    margin: "auto",
                    padding: "1%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                    color: 'black'
                }}
            >
                {children}
                
            </div>
            
        </div>
    );
};
 
export default Workmodal;