import { useState } from "react";
import tabsData from "../data/tabsData.json";


const KioskTabs = () => {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <div className='bg-white grid place-items-center py-[60px] lg:py-[120px]'>
    <div className="container">
      <h2 className='font-bold text-center text-[28px] leading-[1.25] antialiased sm:text-[36px] text-blue'>
        Specific kiosk modes for unique use cases
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap pt-[40px] sm:pt-[60px] w-full">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-[30px] rounded-b-sm font-semibold transition-colors p-[26px_0] text-[22px] leading-[24px] border  ${
              activeTab === tab.id
                ? "bg-blue text-white"
                : "bg-white text-blue/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white-tab p-10">
      {tabsData.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="grid gap-10 grid-cols-12">
                <div className="col-span-6">
                  <h3 className="text-blue font-bold text-[20px] leading-[26px] antialiased pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px]">{tab.title}</h3>
                  <ul className="list-none space-y-2">
                    {tab.content.map((point, index) => (
                      <li className="flex justify-start items-center" key={index}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="14.393" height="10.111"><path fill="none" stroke="#60c458" stroke-width="2" d="M.697 4.107 5.45 8.718l8.247-8" data-name="tick - icon"></path></svg></div>
                        <div><p className="text-base sm:text-[18px] font-normal sm:leading-[28px] text-text-gray pl-[25px] sm:pl-[30px]">{point}</p></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-6">
                  <div className=" max-sm:h-[210px] max-w-[308px] max-sm:mt-[15px] mb-[20px] lg:mb-0 sm:max-w-[460px]">
                    <img className="w-full h-full rounded-[10px]" src={tab.image} alt={tab.label} />
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
    </div>
  );
}

export default KioskTabs;

