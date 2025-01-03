import Image from "next/image";



const login: React.FC = () => {

  
 
    return (
      <div>
        
      <section style={{width:"380px",height:"489px", top:"6px",left:"490px",position:"sticky"}}>
        
        <div
        style={{width:"324px",height:"128px", top:"28px",left:"28px",position:"relative"}}>
          <Image alt="image"
          width={324} height={17}
          src="/nike3.png"
          />

          <h1
          style={{width:"186.5px",height:"57px", top:"16px",left:"68.84px",lineHeight:"26px",fontSize:"18px",
          position:"relative",textAlign:"center",fontWeight:"700"}}>
              YOUR ACCOUNT FOR EVERYTHING NIKE
          </h1>

        </div>

        <div
         style={{width:"324px",height:"160px", top:"30px",left:"28px",position:"relative"}}>

        <input
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"5px",borderRadius:"3px",position:"relative"}}
         placeholder="  Email address"
        />
         <input
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"25px",borderRadius:"3px",position:"relative"}}
         placeholder="  Password"
        />    

        </div>

        <div className="flex"
        style={{width:"162px",height:"20px", top:"2px",position:"relative"}}>
           <input
         style={{borderWidth:"1px",left:"25px",borderColor:"#BCBCBC",width:"20px",height:"20px",borderRadius:"3px",position:"relative"}}
         type="checkbox" 
        />
        <p className="text-nowrap text-gray-400"
        style={{width:"99.61px",height:"14px", top:"4.3px",left:"34px",
        position:"relative",fontSize:"12px",lineHeight:"14px"}}
        >Keep me signed in</p> 

        <p className="text-nowrap text-gray-400"
        style={{width:"139.61px",height:"14px", top:"4.3px",left:"100.59px",textAlign:"right",
        position:"relative",fontSize:"12px",lineHeight:"13.8px"}}
        >Forgotten your password?</p> 


        </div>

        <div
        style={{width:"324px",height:"59px", top:"22px",left:"28px",position:"relative"}}>
          <p
          style={{width:"279.31px",height:"30px", top:"4px",left:"4px",textAlign:"center",
            position:"relative",fontSize:"12px",lineHeight:"16px"}}>
          By logging in you agree to Nikes Privacy Policy and Terms of Use.
          </p>

        </div>

        <div className="bg-black text-white"
        style={{width:"324px",height:"40px", top:"25px",left:"25px",borderRadius:"1px",borderWidth:"1px",position:"relative"}}>

          <button
          style={{width:"41.04px",height:"18px", top:"5.5px",left:"141.58px",textAlign:"center",
            position:"relative",fontSize:"11px",lineHeight:"17px"}}
          >SIGN IN</button>
        </div>

        <div 
        style={{width:"324px",height:"24px", top:"40px",position:"relative"}}>

          <p className="flex text-nowrap"
          style={{width:"129.61px",height:"14px", top:"5.5px",left:"120.58px",textAlign:"center",
            position:"relative",fontSize:"12px",lineHeight:"14px"}}
          >Not a Member?<button onClick={() => window.location.href = "/joinus"}  className="underline pr-1">Join Us.</button>.</p>
        </div>


      </section>
        
  
      </div>
  
      
      
    );
  };
  
  export default login;
  