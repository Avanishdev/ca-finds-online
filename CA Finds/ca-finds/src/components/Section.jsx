import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCallback } from "react";
import data from '../../CA.json'

const Section = () => {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(()=>{
        axios.get('../data.json')
        .then((response) => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[])
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }
    const onRectangle1Click = useCallback(() => {
        // Please sync "Michael Jackson" to the project
        
        }, []);
    return (
    <>
        <section className="absolute top-[0px] left-[0px] bg-fs-search-button-text shadow-[0px_5.7142863273620605px_11.43px_rgba(0,_0,_0,_0.05)_inset] w-[1536px] h-[803px] overflow-hidden text-left text-46xl text-black font-poppins">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(74.71deg,_#feddee,_#fcf6fc_31.77%,_#c5eaed_64.58%,_#fdddfe)] [filter:blur(500px)] w-[1536px] h-[803px]" />
        <b className="absolute top-[255px] left-[calc(50%_-_640px)] leading-[80px] inline-block w-[670px]">
            <span>{`Find  `}</span>
            <span className="[background:linear-gradient(90.97deg,_#0076ce,_#9400d3)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
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
        <div className="flex absolute w-[670px] h=[73px]  ">
            <input className="w-[670px] h=[73px]  py-2.5 px-5 border-solid border border-[#FFF] rounded-xl shrink-0" type='search' placeholder="Search by name"/>
            <button className="cursor-pointer [border-none] py-2.5 px-5 bg-[#0076CE] w-[186px] h=[73px] shrink-0 text-white" onClick={onRectangle1Click} onChange={(e)=>searchItems(e.target.value)}>
            Search
            </button>
            
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
    </>
    )
}

export default Section