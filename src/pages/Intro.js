import React from 'react';
import { TextStyle } from '../components'
import { PROFILE_INFO } from '../constants'
import styled from 'styled-components';

const IntroWrapper = styled.div`
  min-height: 500px;
  padding: 0rem 8rem;
`

const Intro = () => {
  return(
    <IntroWrapper className="row">
      <div className="col-lg-6 col-sm-12 jctr actr">
        <div>
          <TextStyle size="26">Hello, it's me </TextStyle>
          <TextStyle size="42">{PROFILE_INFO.name}</TextStyle>
          <TextStyle size="18" color="#d0d0d0eb" className="underline">{PROFILE_INFO.about}</TextStyle>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 jctr actr">
        <img width="350px" height="300px" type="image/jpeg" src="https://drive.google.com/uc?export=view&id=1CyTS_MuBDsx4LV5sT-6OO3B-85yEP_1W"></img>
      </div>
    </IntroWrapper>
  )
}

export default Intro;
