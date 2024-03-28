import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import RadialBarComponent from '../components/RadialBar';

export default function ClientPage() {
    const data = [{'Cliente':'DEFAULT','Name':'CONTROLLER-OCI-PRIVATE','OCID': 'ocid1.instance.oc1.sa-saopaulo-1.antxeljrr34ngcycmcca6cbkk3ezjbivtznoltngetrcx6aejhvzlypmq2ja','Compartment': 'root','AD': 'SA-SAOPAULO-1-AD-1','Status': 'RUNNING','OS': 'Oracle Linux 7.9','Shape': 'VM.Standard.E4.Flex','OCPU': '2.0','MEMORY': '16.0','Armazenamento': '47','Custo_Atual_de_Maquina':'266.94','Custo_Atual_de_OS': '0','Custo_de_Disco': '10.01','MaxCPU': '87.7','MeanCPU':'57.77','MaxMEM':'39.7','MeanMEM': '36.27'}];

    return (
        <PageContainer>
            <h1>
                PÁGINA DO CLIENTE - DADOS ÚLTIMOS 30 DIAS ! - TENANCY ACCERTE
            </h1>
            <CompartmentInfo>
                <Info>
                <div>
                    <h2>Compartment</h2>
                    <h3> {data[0]?.Compartment} </h3>
                </div>
                <div>
                    <h2>Instance</h2>
                    <h3> {data[0]?.AD} </h3>
                </div>
                <div>
                    <h2>OCID</h2>
                    <h3> {data[0]?.OCID} </h3>
                </div>
                <div>
                    <h2>Status</h2>
                    <h3> {data[0]?.Status} </h3>
                </div>
                <div>
                    <h2>OS</h2>
                    <h3> {data[0]?.OS} </h3>
                </div>
                <div>
                    <h2>Armazenamento(GB)</h2>
                    <h3> {data[0]?.Armazenamento} </h3>
                </div>
            </Info> 
            <OCPU_MEM>
                <h1>OCPU: {data[0]?.OCPU}</h1>
                <h2>Sugestão newOCPU: XX</h2>
                <div>
                    <RadialBarComponent value = {data[0]?.MeanCPU} name = {'MeanCPU'} />
                    <RadialBarComponent value = {data[0]?.MaxCPU} name = {'MaxCPU'} />
                </div>
            </OCPU_MEM>
            <OCPU_MEM>
                <h1>MEMORY: {data[0]?.MEMORY} GB</h1>
                <h2>Sugestão newMEM: XX</h2>
                <div>
                    <RadialBarComponent value = {data[0]?.MeanMEM} name = {'MeanMEM'} />
                    <RadialBarComponent value = {data[0]?.MaxMEM} name = {'MaxMEM'} />
                </div>
            </OCPU_MEM>
            <Prices>
                <ShapeInfo>
                <h1>Custo Atual de Maquina(24x7): R$ {data[0]?.Custo_Atual_de_Maquina}</h1>
                <h2>Custo Atual de OS(24x7): R$ {data[0]?.Custo_Atual_de_OS}</h2>
                <h2>Custo de Disco: R$ {data[0]?.Custo_de_Disco}</h2>
                </ShapeInfo>
                <ShapeInfo>
                <h2>Ajuste / Tipo de Operacao</h2>
                <h1>Custo Estimado (Sem alteracao de shape): R$ XX.XX</h1>
                <h1>Recomendacao Accerte (Shape E5.Flex): R$ XX.XX</h1>
                <h2>Novo Custo de OS (24x7): R$ XX.XX</h2>
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
    gap: 20px;
    flex-wrap: wrap;
    border: 1px solid gray;
`

const Info = styled.div`
    justify-content: flex-start !important;
    div {
        flex-direction: column;
        gap: 10px;
        text-align: center;
        font-size: 19px;
        font-weight: 400;
    }
`

const OCPU_MEM = styled.div`
    flex-direction: column;
    justify-content: space-between !important;
    max-width: 30%;
    border: 1px solid gray;
    height: 275px;
    div {
        padding: 0 !important;
    }
`

const Prices = styled.div`
    flex-direction: column;
    max-width: 30%;
    gap: 10px;
    flex-wrap: wrap;
    height: 275px;
    border: 1px solid gray;
`

const ShapeInfo = styled.div`
    justify-content: flex-start !important;
    flex-wrap: wrap;
    gap: 10px;
    h2{
        width: 80%;
        font-size: 17px;
    }
    h1 {
        font-size: 18px;
    }
`

