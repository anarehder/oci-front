import styled from 'styled-components';

export default function ClientPage() {

    return (
        <PageContainer>
            PÁGINA DO CLIENTE - DADOS ÚLTIMOS 30 DIAS !
            <CompartmentInfo>
                <Info>
                <h2>COMPARTMENTS</h2>
                <h2>Instance</h2>
                <h2>OCID</h2>
                <h2>Compartment</h2>
                <h2>AD</h2>
                <h2>Status</h2>
                <h2>OS</h2>
                <h2>Armazenamento(GB)</h2>
            </Info>
            <OCPU_MEM>
                <h1>OCPU</h1>
                <h2>OCPU, MaxCPU(%), MeanCPU(%)</h2>
                <h2>newOCPU</h2>
            </OCPU_MEM>
            <OCPU_MEM>
                <h1>MEMORY</h1>
                <h2>MEMORY(GB), MaxMEM(%), MeanMEM(%)</h2>
                <h2>newMEM</h2>
            </OCPU_MEM>
            <Prices>
                <ShapeInfo>
                <h2>Custo Atual de Maquina(24x7)</h2>
                <h2>Custo Atual de OS(24x7)</h2>
                <h2>Custo de Disco</h2>
                </ShapeInfo>
                <ShapeInfo>
                <h2>Ajuste</h2>
                <h2>Tipo de Operacao</h2>
                <h2>Custo Estimado (Sem alteracao de shape)</h2>
                <h2>Recomendacao Accerte (Shape E5.Flex)</h2>
                <h2>Novo Custo de OS (24x7)</h2>
                </ShapeInfo>
            </Prices>
            </CompartmentInfo>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    min-height: 100vh;
    background-color: black;
    color: white;
    flex-direction: column;
    justify-content: flex-start !important;
    gap: 50px;
`

const CompartmentInfo = styled.div`
    justify-content: flex-start !important;
    gap: 10px;
    flex-wrap: wrap;
`

const Info = styled.div`
    justify-content: flex-start !important;
    gap: 40px;
`

const OCPU_MEM = styled.div`
    background-color: gray;
    flex-direction: column;
    justify-content: flex-start !important;
    gap: 40px;
    max-width: 30%;
    height: 250px;
`

const Prices = styled.div`
    background-color: green;
    flex-direction: column;
    max-width: 30%;
    gap: 10px;
    flex-wrap: wrap;
    height: 250px;
`

const ShapeInfo = styled.div`
    justify-content: flex-start !important;
    flex-wrap: wrap;
    gap: 10px;
    border: 1px solid black;
`

