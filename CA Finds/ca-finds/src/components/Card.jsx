// import Property1ActiveButtonHove from "./Property1ActiveButtonHove";
// import Property1OutlineButtonHov from "./Property1OutlineButtonHov";

const Card = () => {
  return (
    <>
      <div className="absolute top-[165px] left-[127px] w-[515px] h-[960px] text-left text-xl text-fs-search-text font-poppins">
        <b className="absolute top-[0.94%] left-[0%] text-16xl">
          Michael Jackson
        </b>
        <div className="absolute top-[78px] left-[0px] leading-[32px] inline-block w-[515px]">
          <p className="m-0">{`I am here to provide my expertise in accounting and finance, which includes financial statements, economics, and auditing, all to assist `}</p>
          <p className="m-0">you effectively</p>
        </div>
        <div className="absolute top-[238px] left-[0px] w-28 h-[30px] text-roc-primary">
          <div className="absolute top-[0px] left-[32px]">
            <b>{`4.8 `}</b>
            <span className="text-fs-search-text">(89)</span>
          </div>
          <img
            className="absolute top-[3px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/starfill3.svg"
          />
        </div>
        <div className="absolute top-[548px] left-[0px] w-[515px] h-[412px] text-16xl">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-fs-search-card-bg shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[515px] h-[412px]" />
          <b className="absolute w-[89.9%] top-[6.8%] left-[5.63%] inline-block">
            What people say?
          </b>
          <div className="absolute top-[97px] left-[29px] text-xl leading-[32px] inline-block w-[463px]">
            I cannot express enough gratitude for the support Micheal has provided
            in managing my personal finances. Their attention to detail and deep
            understanding of financial markets has ensured that my investments are
            in safe hands. I highly recommend their services to anyone seeking
            financial guidance.
          </div>
          <img
            className="absolute top-[380px] left-[215px] w-[86px] h-2.5"
            alt=""
            src="/group-35370.svg"
          />
        </div>
        <div className="absolute top-[300px] left-[0px] rounded-xl bg-fs-search-card-bg shadow-[2px_4px_15px_rgba(133,_133,_167,_0.25)] w-[515px] h-[216px]" />
        <div className="absolute top-[328px] left-[27px] leading-[32px] inline-block w-[300px]">
          Basic to complex tasks
        </div>
        <b className="absolute top-[326px] left-[305px] text-5xl inline-block text-right w-[187px]">
          ₹4,370
        </b>
        {/* <Property1ActiveButtonHove
          text="Request Proposal"
          property1ActiveButtonHoveBorderRadius="10px"
          property1ActiveButtonHovePosition="absolute"
          property1ActiveButtonHoveTop="447px"
          property1ActiveButtonHoveLeft="27px"
          property1ActiveButtonHoveWidth="220px"
          textFontFamily="Poppins"
        /> */}
        <div className="absolute top-[392px] left-[27px] w-[456px] h-8">
          <div className="absolute top-[0px] left-[34px] leading-[32px] inline-block w-[422px]">
            Delivers the job within 2 days
          </div>
          <img
            className="absolute top-[4px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/calendar2line.svg"
          />
        </div>
        {/* <Property1OutlineButtonHov
          text="Chat with me"
          property1OutlineButtonHovBorderRadius="10px"
          property1OutlineButtonHovPosition="absolute"
          property1OutlineButtonHovTop="447px"
          property1OutlineButtonHovLeft="272px"
          property1OutlineButtonHovWidth="220px"
          textFontFamily="Poppins"
        /> */}
      </div>
    </>
  );
};

export default Card;
