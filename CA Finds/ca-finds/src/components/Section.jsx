import React,{useState} from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar'
import SearchList from './SearchList'

const Section = () => {
    const [results, setResults] = useState([]);

    return (
    <>
        
        <section className="absolute top-[0px] left-[0px] bg-fs-search-button-text shadow-[0px_5.7142863273620605px_11.43px_rgba(0,_0,_0,_0.05)_inset] w-[1536px] h-[803px] overflow-hidden text-left text-46xl text-black font-poppins">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(74.71deg,_#feddee,_#fcf6fc_31.77%,_#c5eaed_64.58%,_#fdddfe)] [filter:blur(500px)] w-[1536px] h-[803px]" />
        <b className="absolute top-[255px] left-[calc(50%_-_640px)] leading-[80px] inline-block w-[670px]">
            <span>{`Find  `}</span>
            <span className="[background-image:linear-gradient(90.97deg,_#0076ce,_#9400d3)]  [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
            Partners
            </span>
            <span> (CAs) available online</span>
        </b>
        <div className="absolute top-[431px] left-[128px] text-xl leading-[30px] text-dimgray inline-block w-[676px] h-[55px] font-open-sans">
            <b>{`CONNECT `}</b>
            <span>
            with us where your services are listed and visible to a myriad of
            businesses seeking CA’s for compliance support
            </span>
        </div>
        {/* #BFBFBF */}
        <div className="absolute h-[100px] w-[50%] top-[60%] left-[8%] right-[0%] bottom-[0%] ">
           <SearchBar setResults={setResults}/>
            {results && results.length > 0 && <SearchList results={results} />}
            
        </div>
        <img
            className="absolute right-[0px] bottom-[0px] w-[1536px] h-[210px]"
            alt="cafinds.com"
            src="../images/vector-1.svg"
        />
        <div className="absolute top-[calc(50%_-_190.5px)] left-[866px] w-[629.74px] flex flex-row items-start justify-start gap-[16.79px]">
            <div className="flex-1 flex flex-row items-start justify-start pt-[83.96552276611328px] px-0 pb-0">
            <img
                className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
                alt="cafinds.com"
                src="../images/picture01.png"
            />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start">
            <img
                className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
                alt="cafinds.com"
                src="../images/picture02.png"
            />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-[41.98276138305664px] px-0 pb-0">
            <img
                className="rounded-[20.99px] w-[198.72px] h-[403.03px] object-cover"
                alt="cafinds.com"
                src="../images/picture03.png"
            />
            </div>
        </div>
        </section>
        <Navbar/>
    </>
    )
}

export default Section