import styled from 'styled-components';
import { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import MachineInfo from '../components/MachineInfo';
import { Link } from 'react-router-dom';

export default function ClientPage() {
    const [machines, setMachines] = useState([]);
    
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
                <Link to="/">
                    <button>
                        Voltar
                    </button>
                </Link>
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
    button {
        position: absolute;
        left: 10%;
    }
`
