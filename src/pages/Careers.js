import React from 'react';
import { WORK_EXPERIANCE } from '../constants'
import { TextStyle } from '../components'

const Careers = () => {
  return(
    <div className="w-full h-full flex flex-col justify-center items-center">
      <TextStyle className="px20" size="32">Careers</TextStyle>
      <div className="flex jctr">
        {WORK_EXPERIANCE.map(el => {
          return(
            <div className="flex2">
              <div className="flex">
                <div className="flex2 actr companyName">{el.companyName}</div>
                <img src={el?.logo?.url} width={el?.logo?.width} height={el?.logo?.height} />
              </div>
              <p>{el.startDate} - {el.endDate || el.isPresent && "Present"}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Careers
