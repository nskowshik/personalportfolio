import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  line-height: 1.5;
  font-size: ${props => `${props.size}px` || "20px" };
  color: ${props => props.color || "white" };
`;

const TextStyle = (props) => {
  const {children} = props
  return (
    <TextContainer {...props}>
      {children}
    </TextContainer>
  )
}

export default TextStyle;
