const Navbar =() =>{
    return(
        <>
        <div className="w-[1322px] h-[91px] ml-[59px] flex">
            <div className="w-[187px] h-[58px] mt-[17px] ml-[136px]">
                <h3 className="w-[152px] h-8 mt-[17px] font-bold text-2xl leading-8 text-white">BrandName</h3>
            </div>
            
            <div className="w-[815px] [h-58px] mt-4 ml-[100px] items-center flex justify-between">
                <div className="w-[275px] h-6 mt-[17px]">
                    <ul className="items-center flex gap-[21px] text-[#FFFFFF]">
                        <li className="w-[43px] h-[24px]  font-bold text-[14px] leading-6 tracking-tight text-[#FFFFFF]">Home</li>
                        <li className="w-[59px] h-[24px]  font-bold text-[14px] leading-6 tracking-tight text-[#FFFFFF]">Product</li>
                        <li className="w-[52px] h-[24px]  font-bold text-[14px] leading-6 tracking-tight text-[#FFFFFF]">Pricing</li>
                        <li className="w-[58px] h-[24px]  font-bold text-[14px] leading-6 tracking-tight text-[#FFFFFF]">Contact</li>

                    </ul>
                </div>
                <div className="w-[189] h-[52] mt-3 gap-[45px] flex items-center">
                    <div>
                        <button className="w-[41px] h-[22px] font-bold text-sm text-white">Login</button>
                    </div>
                    <div className="w-[110px] h-[52px] rounded-[5px] py-[15] px-[25px] gap-[16px]">
                        <button className="w-[60px] h-[15px font-bold] text-[14px] leading-6 tracking-tight bg-[#23A6F0] text-[#FFFFFF]">JOIN US</button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        

    );
}
export default Navbar;