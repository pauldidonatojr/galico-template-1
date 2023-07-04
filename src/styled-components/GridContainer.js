import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
        'header header'
        'ads article'
        'nav article'
        'nav footer';
    grid-template-rows: 80px 120px 1fr 70px;
    grid-template-columns: 20% 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    height: 100vh;
    margin: 0;

    @media all and (max-width: 575px) {
        grid-template-areas:
            'header'
            'article'
            'ads'
            'nav'
            'footer';
        grid-template-rows: 80px 1fr 70px 1fr 70px;
        grid-template-columns: 1fr;
    }
`

export default GridContainer
