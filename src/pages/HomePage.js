import styled from 'styled-components';

export default function HomePage() {

    return (
        <PageContainer>
            MINHA HOME PAGE !
        </PageContainer>
    )
}

const PageContainer = styled.div`
    min-height: 100vh;
    background-color: black;
    color: white;
    flex-direction: column;
    justify-content: flex-start !important;
    gap: 50px;
`