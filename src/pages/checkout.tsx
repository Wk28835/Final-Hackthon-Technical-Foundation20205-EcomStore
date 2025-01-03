
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const checkout: React.FC = () => {

  
 
    return (
      <div>
        
        <div className="parent_div flex"
        style={{width:"880px",height:"2376px",left:"289px",position:"relative"}}>

          <section
          style={{width:"440px",height:"2206px",top:"2px",position:"relative"}}>
            <h1
            style={{width:"379px",height:"24px",top:"70px",position:"relative",
              fontWeight:"500",fontSize:"21px",lineHeight:"24px" }}>
            How would you like to get your order?
            </h1>

            <p className="text-gray-500"
             style={{width:"437.61px",height:"192px",top:"80px",position:"relative",
              fontWeight:"400",fontSize:"15px",lineHeight:"24px" }}>
                  Customs regulation for India require a copy of the <br/>
                  recipient&#39;s KYC. The address on the KYC needs to match the shipping 
                  address. Our courier will contact you via SMS/email to obtain 
                  a copy of your KYC. The KYC will be stored securely and 
                  used solely for the purpose of clearing customs (including 
                  sharing it with customs officials) for all orders and returns. If 
                  your KYC does not match your shipping address, please click 
                  the link for more information. Learn More
            </p>

            <div className="gap-6 flex border-black"
            style={{width:"440px",height:"82px",top:"109px",borderRadius:"12px",borderWidth:"2px",position:"relative",
              paddingTop:"29px",paddingBottom:"29px",paddingLeft:"21px",paddingRight:"307px"}}>
                
                <ShoppingBag className="" width={21.85} height={19.02}
                style={{paddingTop:"1.23",paddingLeft:"1.11", position:"relative"}}
                
                />


                <button className="text-center"
                style={{width:"64px",height:"24px",position:"relative",
                  fontWeight:"500",fontSize:"15px",lineHeight:"24px"}}>Deliver It</button>             

            </div>

            <div 
             style={{width:"440px",height:"800px",top:"130px",position:"relative",
              paddingTop:"20px",paddingBottom:"8px",gap:"28px"}}>

              <p className="font-bold"
               style={{width:"300px",height:"24px",position:"relative",
                fontSize:"15px",lineHeight:"24px"}}>
                  Enter your name and address:
              </p>

              <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"25px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="First Name"
              />

          <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"45px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Last Name"
              />

        <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"65px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Adress Line 1"
              />
          <p className="text-gray-400"
          style={{width:"149px",height:"24px",top:"62px",left:"20px",position:"relative",
           fontWeight:"400",fontSize:"11px",lineHeight:"24px"}}>
              We do not ship to P.O. boxes
            </p>

        <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"65px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Address Line 2"
              />

        <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"85px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Address Line 3"
              />

      <input className="border placeholder:text-black"
              style={{width:"211.19px",height:"56px",top:"95px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Postal Code"
              /> 

          <input className="border placeholder:text-black"
              style={{width:"211.19px",height:"56px",top:"95px",left:"16.81px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Locality"
              /> 

          
              <select className="border placeholder:text-gray-600"
            style={{width:"211.19px",height:"56px",top:"105px",position:"relative", borderRadius:"4px",
              paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}>Pakistan
            <option>State/Territory</option>
            </select> 
              

          <input className="border placeholder:text-black"
              style={{width:"211.19px",height:"56px",top:"105px",left:"16.81px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="India"
              /> 
             
           <input type="checkbox"
           style={{width:"18px",height:"18px",top:"148px",left:"2.81px",position:"relative", borderRadius:"4px",
            }}>

            </input>
                      

            <p className=""
            style={{width:"225px",height:"24px",top:"120px",left:"32px",position:"relative",
              fontSize:"15px",fontWeight:"400",lineHeight:"24px"}}>
            Save this address to my profile
            </p>

            <input type="checkbox placeholder:text-black"
           style={{width:"18px",height:"18px",top:"148px",left:"2.81px",position:"relative", borderRadius:"4px",
            }}>

            </input>
                      

            <p className=""
            style={{width:"225px",height:"24px",top:"120px",left:"32px",position:"relative",
              fontSize:"15px",fontWeight:"400",lineHeight:"24px"}}>
            Make this my preferred address
            </p>

            
        </div>

          <div
          style={{width:"440px",height:"256px",top:"10px",position:"relative",
            paddingTop:"20px",paddingBottom:"8px",gap:"28px" }}>
        <h1 className="font-medium"
               style={{width:"300px",height:"24px",top:"10px",position:"relative",
                fontSize:"21px",lineHeight:"24px",color:"black"}}>
                 What&#39;s your contact information?
              </h1>

              <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"65px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Email"
              />

          <p className="text-gray-400"
          style={{width:"149px",height:"24px",top:"62px",left:"20px",position:"relative",
           fontWeight:"400",fontSize:"11px",lineHeight:"24px"}}>
              A confirmation email will be sent after checkout.
            </p> 

            <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"65px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Phone Number"
              />

            <p className="text-gray-400 text-nowrap"
          style={{width:"149px",height:"24px",top:"62px",left:"16px",position:"relative",
           fontWeight:"400",fontSize:"11px",lineHeight:"24px"}}>
             A carrier might contact you to confirm delivery.
            </p>

            <h1 className="font-medium"
               style={{width:"300px",height:"24px",top:"101px",position:"relative",
                fontSize:"21px",lineHeight:"24px",color:"black"}}>
                 What&#39;s your PAN?
              </h1> 

              <input className="border placeholder:text-black"
              style={{width:"440px",height:"56px",top:"125px",position:"relative", borderRadius:"4px",
                paddingTop:"16px",paddingBottom:"16px",paddingRight:"16px",paddingLeft:"16px"}}
            placeholder="Pan"
              />

              <p className="text-gray-400 text-nowrap"
          style={{width:"149px",height:"24px",top:"125px",left:"16px",position:"relative",
           fontWeight:"400",fontSize:"11px",lineHeight:"24px"}}>
             Enter your PAN to enable payment with UPI, Net Banking or local<br/> card methods
            </p>

            <input type="checkbox placeholder:text-black"
           style={{width:"18px",height:"18px",top:"168px",left:"2.81px",position:"relative", borderRadius:"4px",
            }}>

            </input>
                      

            <p className=""
            style={{width:"225px",height:"24px",top:"140px",left:"32px",position:"relative",
              fontSize:"15px",fontWeight:"400",lineHeight:"24px"}}>
            Save PAN details to Nike Profile
            </p>

            <input type="checkbox"
           style={{width:"18px",height:"18px",top:"183px",left:"2.81px",position:"relative", borderRadius:"4px",
            }}>

            </input>
                      

            <p className="text-gray-600"
            style={{width:"404.5px",height:"42px",top:"155px",left:"32px",position:"relative",
              fontSize:"12px",fontWeight:"400",lineHeight:"14px"}}>
            I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld<br/> is a trusted Nike partner.
            </p>

            <button className="bg-gray-100"
            style={{width:"440px",height:"60px",borderRadius:"30px",top:"270px",left:"1px",position:"relative",
              paddingTop:"16px",paddingBottom:"16px",paddingRight:"185.33px",paddingLeft:"185.33px"
              ,fontSize:"15px",fontWeight:"500",lineHeight:"28px",textAlign:"center"}}>
                  Continue
            </button>

            <div
            style={{width:"440px",height:"316px",top:"155px",left:"2px",position:"relative",}}>

      <h1 className="border"
              style={{width:"440px",height:"57px",top:"165px",position:"relative", borderBottom:"1px",
                paddingTop:"16px",paddingBottom:"32px",paddingLeft:"16px"}}
            
              >Delivery</h1>

    <h1 className="border text-gray-600"
              style={{width:"440px",height:"57px",top:"175px",position:"relative", borderBottom:"1px",
                paddingTop:"16px",paddingBottom:"32px",paddingLeft:"16px"}}
            
              >Shipping</h1> 

        <h1 className="border text-gray-600"
              style={{width:"440px",height:"57px",top:"185px",position:"relative", borderBottom:"1px",
                paddingTop:"16px",paddingBottom:"32px",paddingLeft:"16px"}}
            
              >Billing</h1>

            </div>

            <h1 className="border text-gray-600"
              style={{width:"440px",height:"57px",top:"195px",position:"relative", borderBottom:"1px",
                paddingTop:"16px",paddingBottom:"32px",paddingLeft:"12px"}}
            
              >Payment</h1>    



            </div>      

          </section>

          <section
          style={{width:"320px",height:"721px",left:"130px",position:"relative",top:"8px"}}>

            <h1 className="font-medium"
            style={{width:"160.37px",height:"26px",top:"67px",fontSize:"21px",lineHeight:"24px",
            position:"relative"}}>Order Summary</h1>

            <p className="text-gray-600"
            style={{width:"60px",height:"16px",left:"3px",position:"relative",fontSize:"15px",top:"80px",bottom:"9px",
            lineHeight:"16px"}}>
              SubTotal

            </p>

            <p className="text-gray-500 text-nowrap"
            style={{width:"60px",height:"16px",left:"250px",position:"relative",fontSize:"15px",top:"64px",bottom:"9px",
            lineHeight:"16px"}}>
              ₹ 20 890.00

            </p>


            <p className="text-gray-500"
            style={{width:"60px",height:"16px",left:"3px",position:"relative",fontSize:"15px",top:"90px",bottom:"9px",
            lineHeight:"16px"}}>
              Delivery/Shipping

            </p>

            <p className="text-gray-600 text-nowrap"
            style={{width:"60px",height:"16px",left:"300px",position:"relative",fontSize:"15px",top:"74px",bottom:"9px",
            lineHeight:"16px"}}>
              Free

            </p>

            <p 
            style={{width:"60px",height:"16px",left:"3px",position:"relative",fontSize:"15px",borderTop:"1px",
              top:"100px",bottom:"9px",
            lineHeight:"16px"}}>
              Total

            </p>

            <p className=" text-nowrap "
            style={{width:"60px",height:"16px",left:"250px",position:"relative",fontSize:"15px",borderTopWidth:"1px",
              borderBottomWidth:"1px",top:"84px",bottom:"9px",
            lineHeight:"16px"}}>
              ₹ 20 890.00

            </p>


            <p className="text-nowrap border-gray-600"
            style={{width:"60px",height:"16px",left:"3px",position:"relative",fontSize:"9px",top:"110px",bottom:"9px", lineHeight:"16px"}}>
              
              (The total reflects the price of your order, including all duties and taxes)
            </p>


            <div
            style={{width:"320px",height:"474px",left:"3px",top:"130px",position:"relative"}}>

              <h1 className="font-bold"
              style={{width:"249px",height:"24px",left:"3px",position:"relative",
                fontSize:"15px",lineHeight:"24px"}}>
                  Arrives Mon, 27 Mar - Wed, 12 Apr
              </h1>

              <Image className="top-2 relative"
               width={208} height={208} alt="image"
              src="/boy8.jpeg"/>

              <h1 className="font-normal"
               style={{width:"85.53px",height:"120px",top:"-203px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"24px"}}>

      Nike Dri-FIT ADV TechKnit Ultra Men&#39;s Short-Sleeve Running Top

              </h1>

              <p className="font-normal text-gray-400"
               style={{width:"85.53px",height:"120px",top:"-203px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"19.6px"}}>

                  Qty 1
              </p>

              <p className="font-normal text-gray-400"
               style={{width:"37px",height:"20px",top:"-304px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"19.6px"}}>

                  Size L              
                  </p>

              <p className="font-normal text-gray-400"
               style={{width:"66px",height:"20px",top:"-303px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"19.6px"}}>

                  ₹ 3 895.00    
              </p>


            <div
            style={{top:"-256px",position:"relative"}}>
            <Image 
              className=""
               width={208} height={208} alt="image"
              src="/shoe12.jpeg"/>
            </div>
              

              <h1 className="font-normal"
               style={{width:"85.53px",height:"120px",top:"-467px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"24px"}}>

          Nike Air Max 97 SE Men&#39;s Shoes

              </h1>

              <p className="font-normal text-gray-400"
               style={{width:"85.53px",height:"120px",top:"-510px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"19.6px"}}>

                  Qty 1
              </p>

              <p className="font-normal text-gray-400"
               style={{width:"37px",height:"20px",top:"-610px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"19.6px"}}>

                  Size L              
                  </p>

              <p className="font-normal text-gray-400"
               style={{width:"66px",height:"20px",top:"-610px",left:"220px",position:"relative",
                fontSize:"13px",lineHeight:"19.6px"}}>

                  ₹ 3 895.00    
              </p>

            </div>


          </section>

        </div>
        
  
      </div>
  

      
    );
  };
  
  export default checkout;
  