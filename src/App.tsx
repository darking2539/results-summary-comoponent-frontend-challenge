import { useState } from 'react'
import './App.css'
import ReactionSvg from '../src/assets/images/icon-reaction.svg';
import MemorySvg from '../src/assets/images/icon-memory.svg';
import VerbalSvg from '../src/assets/images/icon-verbal.svg';
import VisualSvg from '../src/assets/images/icon-visual.svg';

function App() {

  const data: any = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": ReactionSvg,
      "color": "text-lightRed",
      "bgColor": "rgba(255, 87, 87, 0.1)"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": MemorySvg,
      "color": "text-orangeyYellow",
      "bgColor": "rgba(255, 176, 31, 0.1)"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": VerbalSvg,
      "color": "text-greenTel",
      "bgColor": "rgba(0, 189, 145, 0.1)"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": VisualSvg,
      "color": "text-cobaltBlue",
      "bgColor": "rgba(17, 37, 212, 0.1)"
    }
  ]

  return (
    <div className="items-center justify-center relative bg-white rounded-2xl" style={{ "boxShadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
      <div className="flex flex-col sm:flex-row place-content-center">
        
        <div className="flex flex-col py-10 px-5 bg-lightRoyalBlue sm:rounded-2xl rounded-b-2xl sm:max-w-[20rem]">
          <div className='text-lightLavender text-[18px] text-border'>Your Result</div>
          <div className='flex justify-center my-5'>
            <div className='flex flex-col justify-center w-44 h-44 bg-cobaltBlue rounded-full'>
              <div className='text-paleBlue text-border text-[52px] font-bold'>76</div>
              <div className='text-lightLavender text-border text-[16px] font-bold'>of 100</div>
            </div>
          </div>
          <div className='text-paleBlue text-border text-[24px] font-bold mb-3'>Great</div>
          <div className='text-lightLavender text-border text-[16px] px-4'>Your scored higher than 65% of the people who have taken these tests.</div>
        </div>

        <div className="flex flex-col items-start py-10 px-5 bg-white rounded-2xl">
          <div className='text-darkGray text-border text-[18px] font-bold mb-5'>Summary</div>

          {data.map((item: any) => (
            <div className={`w-full sm:w-[250px] flex flex-row px-4 py-3 my-2 rounded-md justify-between`} style={{ backgroundColor: item.bgColor }}>
              <div className={`flex flex-row font-bold ${item?.color}`}>
                <img src={item.icon} />
                <div className='ml-2'>{item?.category}</div>
              </div>
              <div>{item?.score} / 100</div>
            </div>
          ))}

          <button className='w-full sm:w-[250px] flex flex-row px-4 py-3 mt-5 rounded-3xl justify-center bg-lightRoyalBlue text-white font-bold'>
            Continue
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
