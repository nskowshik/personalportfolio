import React from 'react';
import { WORK_EXPERIANCE } from '../constants'
import { TextStyle } from '../components'

const Careers = () => {
  return(
    <div className="mx40 my20">
      <TextStyle className="px20" size="32">Careers</TextStyle>
      <div className="fx jctr">
        {WORK_EXPERIANCE.map(el => {
          return(
            <div className="fx2">
              <div className="fx">
                <div className="fx2 actr companyName">{el.companyName}</div>
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
