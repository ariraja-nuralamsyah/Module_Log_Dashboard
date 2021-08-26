import React from 'react'
import dataModuleLogs from '../data/userModuleLogs.json';
import { Table } from 'antd';

function getModulValue(modulId, data) {
    return data.filter(item => item.module_id === modulId).length;
}

function getDistinctModule(chartData) {
    const result = [];
    const map = new Map();
    for (const item of chartData) {
        if (!map.has(item.module_id)) {
            map.set(item.module_id, true);
            result.push({
                data : item
            });
        }
    }
    return result;
}

function countFreq(chartData) {
    const output = [];
    const AllModulesName = getDistinctModule(chartData);
    AllModulesName.map((module) => (
        output.push({ 'data': module.data, 'visit': getModulValue(module.data.module_id, chartData) })
    ));
    return output;
}

function getTopTenModule(dataModule) {
    const output = [];
    const sortData = dataModule.sort(function (a, b) { return a.visit < b.visit ? 1 : -1; }).slice(0, 10);
    sortData.map((module, index) => (
        output.push({ 'no': index + 1, 'module_id': module.data.module_id, 'module_name': module.data.module_name, 'visit': module.visit })
    ));
    return output;
}

function TableModuleLogs() {
    const data = dataModuleLogs.data.user_module_logs;
    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Module ID',
            dataIndex: 'module_id',
            key: 'module_id',
        },
        {
            title: 'Module Name',
            dataIndex: 'module_name',
            key: 'module_name'
        },
        {
            title: 'Visit',
            dataIndex: 'visit',
            key: 'visit'
        },
    ]
    return (
        <div>
            <Table
                columns={columns}
                dataSource={getTopTenModule(countFreq(data))}
                bordered title={() => <h1 align='center'>Tabel Data Quality</h1>}
                sticky
            />
        </div>
    )
}

export default TableModuleLogs
