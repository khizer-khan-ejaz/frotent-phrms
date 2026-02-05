import React from 'react'

const OurPrograms = () => {

    const ourPrograms = [
        {
            img : "/images/education.svg",
            title : "Education",
            desc : "lorem ipsum lorem ipsum lorem ipsum lorem ",
            textColor : "text-[#FB8070]",
            borderColor : "border-b-[#FB8070]",
        },
        {
            img : "/images/healthcare.svg",
            title : "Healthcare",
            desc : "lorem ipsum lorem ipsum lorem ipsum lorem ",
            textColor : "text-[#EFC774]",
            borderColor : "border-b-[#EFC774]",
        },
        {
            img : "/images/women-emp.svg",
            title : "Women Empowerment",
            desc : "lorem ipsum lorem ipsum lorem ipsum lorem ",
            textColor : "text-[#C1ACCC]",
            borderColor : "border-b-[#C1ACCC]",
        },
        {
            img : "/images/healthcare-1.svg",
            title : "Livelihood",
            desc : "lorem ipsum lorem ipsum lorem ipsum lorem ",
            textColor : "text-[#B3D3D2]",
            borderColor : "border-b-[#B3D3D2]",
        },
        {
            img : "/images/empowring-grassroots.svg",
            title : "Empowring Grassroots",
            desc : "lorem ipsum lorem ipsum lorem ipsum lorem ",
            textColor : "text-[#DFC0AF]",
            borderColor : "border-b-[#DFC0AF]",
        },
        {
            img : "/images/disaster-management.svg",
            title : "Disaster Response",
            desc : "lorem ipsum lorem ipsum lorem ipsum lorem ",
            textColor : "text-[#52C776]",
            borderColor : "border-b-[#52C776]",
        },
    ]

  return (
    <div className=' flex justify-center items-center w-full box-border'>


        <div className='flex flex-col justify-around items-center w-full  flex-wrap gap-[20px] box-border p-2'>

            <h1 className='font-bold text-gray-600 text-[3rem]'> Our Programs </h1>

            <div className='flex  justify-center items-center w-full flex-wrap gap-[20px] gap-y-[35px] box-border p-2  '>
            {
                ourPrograms.map((item , index)=>{
                    return <div 
                     key={index} className='shadow-md p-2 rounded-md cursor-pointer w-[40%] my-[20px] box-border flex justify-center items-center gap-[10px]'>
                        <div>
                        <img  className={` ${index === 0 && "scale-[1.2]"} ${index === 1 && "scale-[0.8]"} ${index === 5 && "scale-[0.8]"} h-[90px]`} src={item.img} alt={item.img} />
                        </div>
                        <div>
                        <h1 className={`text-[2rem] ${item.textColor}  font-bold border-b-[5px]  border-b-solid ${item.borderColor}   inline-block  `}> {item.title} </h1>
                        <p className='text-[12px] font-[400]'> {item.desc} </p>
                        </div>
                    </div>
                })
            }
            </div>
        </div>

    </div>
  )
}

export default OurPrograms
