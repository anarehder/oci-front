import styled from 'styled-components';
import { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import MachineInfo from '../components/MachineInfo';

export default function ClientPage() {
    const [machines, setMachines] = useState([]);
    const data = [{'Cliente':'DEFAULT','Name':'CONTROLLER-OCI-PRIVATE','OCID': 'ocid1.instance.oc1.sa-saopaulo-1.antxeljrr34ngcycmcca6cbkk3ezjbivtznoltngetrcx6aejhvzlypmq2ja','Compartment': 'root','AD': 'SA-SAOPAULO-1-AD-1','Status': 'RUNNING','OS': 'Oracle Linux 7.9','Shape': 'VM.Standard.E4.Flex','OCPU': '2.0','MEMORY': '16.0','Armazenamento': '47','Custo_Atual_de_Maquina':'266.94','Custo_Atual_de_OS': '0','Custo_de_Disco': '10.01','MaxCPU': '87.7','MeanCPU':'57.77','MaxMEM':'39.7','MeanMEM': '36.27'}];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiService.getReshape();
                    console.log(response.data);
                    if (response.status === 200) {
                        setMachines(response.data);
                    }
            } catch (error) {
                console.log(error);
                alert("ocorreu um erro");
            }
        };
        fetchData();
    }, []);
    return (
        <PageContainer>
            <h1>
                PÁGINA DO CLIENTE - DADOS ONTEM! - TENANCY ACCERTE
            </h1>
            {machines && machines.length > 0 && 
                machines.map((machine, index) => (
                    <MachineInfo key={index} machine={machine} />
                ))
            }
            
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
