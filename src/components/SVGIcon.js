import styled from 'styled-components';

const SVGIcon = styled.div`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  background-repeat: no-repeat;
  .social_svg{
    svg{
      fill : ${props => props.color || 'white'};
    }
    path{
      fill : ${props => props.color || 'white'};
    }
  }
`

export default SVGIcon;
