

import Image from "next/image";


const hero2: React.FC = () => {

  




 
  return (
    <div>
    
    <section>
      <div className="main div">
        
        <div
        style={{width: "1344px",
          height: "977px",
          top: "3513.36px",
          left: "48px",
          position: "absolute", // Needed for `top` and `left` to work
        }}>
          <h1 style={{width:"111.48px",height:"27px", fontSize:"22px", lineHeight:"28px"}}
          >Dont Miss</h1>

          <Image
          alt="image"
          style={{width:"1344px",height:"700px"}}
          src="/boy6.png"/>

    <div className="flight"
        style={{width:"1008px",height:"177px", top:"748px",left:"168px",position:"absolute"}}>
        <h1 className="text-black text-nowrap"
        style={{width:"512px",height:"60px",left:"247.97px",position:"absolute",fontSize:"52px",lineHeight:"60px,",
          alignItems:"center" }}> FLIGHT ESSENTIALS</h1>
      <p style={{width:"531px", height:"24px",top:"84px",left:"239.05px",fontSize:"15px",lineHeight:"24px",position:"absolute"}}
      >Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        

        <button className="bg-black text-white"
      style={{width:"80.38px",height:"39px",top:"138px",left:"460.81px",position:"absolute",
      paddingTop:"7.5px", paddingRight:"21.88px", paddingBottom:"7.5px", paddingLeft:"21.5px", 
      fontSize:"15px",lineHeight:"24px",borderRadius:"30px"}}>Shop</button>
        </div>
        </div>
        
        


      </div>


    </section>


        <section>
          <div className="main div"
          style={{width:"1344px",height:"592px",top:"4574.36px",left:"48px",position:"absolute"}}>

          <h1
          style={{width:"157.61", height:"27px",fontSize:"23px",lineHeight:"28px"}}>The Essentials</h1>

          <div className="images flex">
            <Image alt="image" width={440} height={540}
            style={{left:"6px",position:"absolute"}}
            src="/home1.png"
            />
              <button className="bg-white"
            style={{position: "relative",borderRadius:"30px", top: "352.98px", left: "48px",width:"85.19px",height:"39px",
              paddingTop:"2.5px",paddingRight:"2.69px",paddingBottom:"3.5px",paddingLeft:"21.5"
            }}> Mens</button>

            <Image alt="image" width={440} height={540}
            style={{left:"458px",position:"absolute"}}
            src="/home2.png"
            />
            <button className="bg-white"
            style={{position: "absolute",borderRadius:"30px", top: "382.98px", left: "525px",width:"108.89px",height:"39px",
               paddingTop:"2.5px",paddingRight:"2.69px",paddingBottom:"3.5px",paddingLeft:"21.5"
            }}> Womens</button>

            <Image alt="image" width={440} height={540}
            style={{left:"910px",position:"absolute"}}
            src="/home3.png"
            />
            <button className="bg-white text-center"
            style={{position: "relative",borderRadius:"30px", top: "352.98px", left: "870px",width:"77.19px",height:"39px",
               paddingTop:"2.5px",paddingRight:"2.69px",paddingBottom:"3.5px",paddingLeft:"21.5"
            }}> Kids</button>

          </div>

          </div>
        </section>

<section>
  <div
    className="main flex text-center"
    style={{
      width: "880px",
      height: "192px",
      margin: "auto", // Centers the main div horizontally
      top: "1500.36px", // Use only if necessary
      position: "relative", // Sets proper context for child elements
    }}
  >
    <div style={{ width: "184px", height: "192px", position: "relative" }}>
      <h1>Icons</h1>
      <ul style={{ fontSize: "15px", lineHeight: "24px" }}>
        <li>Air Force 1</li>
        <li>Air Max 95</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
      </ul>
    </div>

    <div style={{ width: "184px", height: "192px", position: "relative", marginLeft: "48px" }}>
      <h1>Shoes</h1>
      <ul style={{ fontSize: "15px", lineHeight: "24px" }}>
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>

    <div style={{ width: "184px", height: "192px", position: "relative", marginLeft: "48px" }}>
      <h1>Clothing</h1>
      <ul style={{ fontSize: "15px", lineHeight: "24px" }}>
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>

    <div style={{ width: "184px", height: "192px", position: "relative", marginLeft: "48px" }}>
      <h1>Kids</h1>
      <ul style={{ fontSize: "15px", lineHeight: "24px" }}>
        <li>Infants & Toddler Shoes</li>
        <li>Kids Shoes</li>
        <li>Kids Jordan Shoes</li>
        <li>Kids Basketball Shoes</li>
      </ul>
    </div>
  </div>
</section>





</div>

      
    
  );
};

export default hero2;
