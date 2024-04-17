import styled from 'styled-components';
import RadialBarComponent from './RadialBar';
import reshapeMEMService from '../services/reshapeMEMService';
import { useEffect, useState } from 'react';
import reshapeCPUService from '../services/reshapeCPUService';

export default function MachineInfo({machine}) {
    const [newMEM, setNewMEM] = useState("-");
    const [newOCPU, setNewOCPU] = useState("-");

    useEffect(()=>{
        if (machine.reshape !== "-"){
            const newMemory = reshapeMEMService.estimateReshapeMEMValues(machine.reshape, machine.MEMORY_GB, machine.MaxMEM, machine.MeanMEM);
            setNewMEM(newMemory.newMEM)
        }
        if (machine.reshape !== "-"){
            const new_OCPU = reshapeCPUService.estimateReshapeCPUValues(machine.reshape, machine.OCPU, machine.MaxCPU, machine.MeanCPU);
            setNewOCPU(new_OCPU.newOCPU)
        }
    },[machine.reshape, machine.MEMORY_GB, machine.MaxMEM, machine.MeanMEM, machine.OCPU, machine.MaxCPU, machine.MeanCPU])
    
    return (
        <>
        <CompartmentInfo>
            <Info>
                <div>
                    <h2>Compartment</h2>
                    <h3> {machine.Compartment} </h3>
                </div>
                <div>
                    <h2>Shape</h2>
                    <h3> {machine.Shape} </h3>
                </div>
                <div>
                    <h2>Instance</h2>
                    <h3> {machine.AD} </h3>
                </div>
                <div>
                    <h2>OCID</h2>
                    <h3> {machine.OCID} </h3>
                </div>
                <div>
                    <h2>Status</h2>
                    <h3> {machine.Status} </h3>
                </div>
                <div>
                    <h2>OS</h2>
                    <h3> {machine.OS} </h3>
                </div>
                <div>
                    <h2>Armazenamento(GB)</h2>
                    <h3> {machine.Armazenamento_GB} </h3>
                </div>
            </Info> 
            <OCPU_MEM>
                <h1>OCPU: {machine.OCPU}</h1>
                <h2>Sugestão newOCPU: {newOCPU} </h2>
                <div>
                    <RadialBarComponent value = {machine.MeanCPU} name = {'MeanCPU'} />
                    <RadialBarComponent value = {machine.MaxCPU} name = {'MaxCPU'} />
                </div>
            </OCPU_MEM>
            <OCPU_MEM>
                <h1>MEMORY: {machine.MEMORY_GB} GB</h1>
                <h2>Sugestão newMEM: {newMEM} GB </h2>
                <div>
                    <RadialBarComponent value = {machine.MeanMEM} name = {'MeanMEM'} />
                    <RadialBarComponent value = {machine.MaxMEM} name = {'MaxMEM'} />
                </div>
            </OCPU_MEM>
            <Prices>
                <ShapeInfo>
                    <h1>Custo Atual de Maquina(24x7): R$ {machine.Custo_Atual_de_Maquina_24x7}</h1>
                    <h2>Custo Atual de OS(24x7): R$ {machine.Custo_Atual_de_OS_24x7}</h2>
                    <h2>Custo de Disco: R$ {machine.Custo_de_Disco}</h2>
                </ShapeInfo>
                <ShapeInfo>
                    <h2>Ajuste / Tipo de Operacao</h2>
                    <h1>Custo Estimado (Sem alteracao de shape): R$ XX.XX</h1>
                    <h1>Recomendacao Accerte (Shape E5.Flex): R$ XX.XX</h1>
                    <h2>Novo Custo de OS (24x7): R$ XX.XX</h2>
                </ShapeInfo>
            </Prices>
        </CompartmentInfo>
    </>
    )
}


const CompartmentInfo = styled.div`
    gap: 15px;
    flex-wrap: wrap;
    border: 1px solid gray;
`

const Info = styled.div`
    justify-content: space-between !important;
    gap:5px;
    :nth-child(4){
        flex: 2;
    }
    div {
        flex: 1;
        justify-content: flex-start !important;
        min-height: 80px !important;
        padding: 0 !important;
        margin: 0 !important;
        flex-direction: column;
        gap: 15px;
        text-align: center;
        font-size: 19px;
        font-weight: 400;
        h3{
            word-break: break-all;
            margin: 0 !important;
        }
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
    gap: 5px;
    padding: 5px !important;
    h2{
        width: 80%;
        font-size: 17px;
    }
    h1 {
        font-size: 17px;
    }
`

