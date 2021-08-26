import React from 'react';
import { Col, Row, Card } from "antd";
import {
  AppstoreOutlined,
  UsergroupDeleteOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import PieChart from '../Grafik/PieChart';
import Table from '../components/TableModuleLogs';

function DashboardView() {
  const CardContent = (props) => {
    return (
      <Card bordered={false} className="card-content">
        <Row gutter={16}>
          <Col className="icon">{props.icon}</Col>
          <Col>
            <p className="title">{props.title}</p>
            <p className="label">{props.label}</p>
          </Col>
        </Row>
      </Card>
    );
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={8} className="mb-16">
          <CardContent
            icon={<AppstoreOutlined />}
            title="Number of Widget"
          />
        </Col>
        <Col span={8} className="mb-16">
          <CardContent
            icon={<UsergroupDeleteOutlined />}
            title="Number of Users"
            label={52}
          />
        </Col>
        <Col span={8} className="mb-16">
          <CardContent
            icon={<FrownOutlined />}
            title="Number of Problems"
            label={0}
          />
        </Col>
        <Col span={24} className="mb-16">
          <Card bordered={false}>
            <p
              style={{
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Module Pie Chart
            </p>
            <PieChart />
          </Card>
        </Col>
        <Col span={24}>
          <Card bordered={false}>
            <p
              style={{
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Top 10 Modules
            </p>
            <Table />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default DashboardView;