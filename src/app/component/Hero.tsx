import React from "react";
import Image from "next/image";
import pic from "@/app/Asset/pic.png";
import mir from "@/app/Asset/pic2.png";
import tie from "@/app/Asset/pic3.png";
const Hero=() =>{
 return(
<>
<div className="w-[1046px] h-[1028px] mt-[104px] ml-[197px] py-20 gap-20">
    <div className="w-[699px] h-[496px py-10 gap-10 flex flex-col justify-center items-center">
    <h5 className="font-bold text-[16px] leading-6 tracking-widest text-[#23A6F0]">Welcome</h5>
    <div className="w-[542px] h-[160px]">
            <h1 className="font-bold text-[58px] tracking-tight text-center text-white">Selling on the internet like a pro

            </h1>
            </div>
            <div className="w-[536px] h-[60px] items-center">
                <h4 className="font-normal text-xl leading-[30px] tracking-tight text-white items-center">We know how large objects will act, but things on a<br/> 
                small scale just do not act that way.</h4>
            </div>
            <div className="w-[365px] h-[52px] gap-[10px] flex-row gap=[10px]">
                <button className="w-[193px] h-[52px] py-[15px] px-10 gap-[10px] font-bold text-[14px] leadding-[22px] tracking-tight rounded-[5xl] text-center text-white bg-[#23A6F0]">Get Quote Now
                    
                </button>
                
                    <button className="w-[162px] h-[52px] rounded-[5px] py-[15px] px-10 gap-[10px] font-bold text-[14px] leading-[22px] tracking-tight] boeder border-[#23A6F0] hover:bg-blue-300  text-white text-center">Learn More</button>
                
                </div>
                <div className="flex w-[1046px] h-[292px] gap-[30px]">

                        <Image src={pic} alt="pic1"/>
                    
                    
                        <Image src={mir} alt="pic2"/>
                    
                    
                        <Image src={tie} alt="pic3"/>
                    
</div>
    </div>

</div>
</>



    
 );
}
export default Hero;