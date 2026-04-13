import frame5101 from "./frame-5101.svg";
import frame5102 from "./frame-5102.svg";

export const LogoCloud = (): JSX.Element => {
  return (
    <div className="w-[1430px] h-[338px] flex flex-col">
      <div className="ml-px h-24 w-[325px] self-center mt-[113px] flex flex-col items-center gap-[18px]">
        <div className="flex h-[52px] w-[173px] relative items-center gap-[30px]">
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#004839] text-4xl text-center tracking-[0] leading-[52px] whitespace-nowrap">
              Trusted By
            </div>
          </div>
        </div>
        <div className="flex h-[26px] w-[325px] relative items-center gap-[30px]">
          <div className="relative w-[325px] mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#004839] text-2xl text-center tracking-[0.72px] leading-[26px]">
            Customer - First Dealerships
          </div>
        </div>
      </div>
      <img
        className="ml-[39px] h-12 w-[1219px] self-center relative mt-[76px]"
        alt="Frame"
        src={frame5101}
      />
      <p className="ml-px h-[53px] w-[721px] self-center mt-[184px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-white text-[32px] text-center tracking-[0] leading-[52px] whitespace-nowrap">
        Integrates with Your Dealership Tools
      </p>
      <img
        className="ml-[125px] w-[1207px] h-12 relative mt-[79px]"
        alt="Frame"
        src={frame5102}
      />
    </div>
  );
};
