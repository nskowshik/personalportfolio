import React from 'react';
import { WORK_EXPERIANCE } from '../constants'
import { TextStyle } from '../components'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background: #41424157;
  height: 250px;
  margin: 10px;
  border-radius: 10px;
  padding: 20px 40px;
  &:hover{
    box-shadow: #7979791f 8px 8px;
    transition: transform 0.3s;
    transform: translateY(-10px);
    .companyName{
      text-shadow: 10px 15px 2px #ffffff42;
      opacity: 0.75;
    }
  }
  .companyName{
    font-size: 24px;
  }
`
const Careers = () => {
  return(
    <div className="mx40 my20">
      <TextStyle className="px20" size="32">Careers</TextStyle>
      <div className="fx jctr">
        {WORK_EXPERIANCE.map(el => {
          return(
            <CardWrapper className="fx2">
              <div className="fx">
                <div className="fx2 actr companyName">{el.companyName}</div>
                <img src={el?.logo?.url} width={el?.logo?.width} height={el?.logo?.height} />
              </div>
              <p>{el.startDate} - {el.endDate || el.isPresent && "Present"}</p>
            </CardWrapper>
          )
        })}
      </div>
    </div>
  )
}

export default Careers
