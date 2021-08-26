import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_sliceGrouper from "@amcharts/amcharts4/plugins/sliceGrouper";
import dataModuleLogs from '../data/userModuleLogs.json';

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

function getModulValue(modulId, data) {
    return data.filter(item => item.module_id === modulId).length;
}

function countFreq(chartData) {
    const output = [];
    const AllModulesName = getDistinctModule(chartData);
    AllModulesName.map((module) => (
        output.push({ 'module_name': module.data.module_name, 'usage': getModulValue(module.data.module_id, chartData) })
    ));
    return output;
}

function PieChart() {
    const data = dataModuleLogs.data.user_module_logs;
    am4core.options.autoDispose = true;
    am4core.useTheme(am4themes_animated);
    useEffect(() => {
        let chart = am4core.create("piechart", am4charts.PieChart);
        chart.data = countFreq(data);

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "usage";
        pieSeries.dataFields.category = "module_name";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        let grouper = pieSeries.plugins.push(new am4plugins_sliceGrouper.SliceGrouper());
        grouper.threshold = 2.5;
        grouper.groupName = "Other";
        grouper.clickBehavior = "zoom";
    });


    return (
        <>
            <div id="piechart" style={{ width: "100%", height: "300px" }}></div>
        </>
    );
}


export default PieChart
