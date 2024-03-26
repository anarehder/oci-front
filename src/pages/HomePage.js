import styled from 'styled-components';

export default function HomePage() {

    return (
        <PageContainer>
            MINHA HOME PAGE !
            <ClientInfo>
            <h2>
                TENANCY
            </h2>
            <h2>
                TÉRMINO DO CONTRATO
            </h2>
            <h2>
                MÁQUINAS ATIVAS
            </h2>
            <h2>
                CUSTO ATUAL
            </h2>
            </ClientInfo>
            
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

const ClientInfo = styled.div`
    background-color: blue;
    justify-content: flex-start !important;
    gap: 40px;
`