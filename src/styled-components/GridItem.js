import styled from 'styled-components'

const GridItem = styled.div`
  padding: 1.2em;

  @media (max-width: 575.98px) {


    background: red;



  }

  @media (min-width: 576px) and (max-width: 767.98px) { background: red}



  @media (min-width: 768px) and (max-width: 991.98px) {  background: red }
  @media (min-width: 992px) and (max-width: 1199.98px) {  background: red }

  @media (min-width: 1200px) { ... }

`

export default GridItem
