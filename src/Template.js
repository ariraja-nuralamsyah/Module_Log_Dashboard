import React from 'react';
import './Template.css';
import { Layout, Breadcrumb } from 'antd';
import Header from './components/Headers'
import Sidebar from './components/Sidebar'
import Footer from './components/Footers'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/DashboardView'
import DataQuality from './pages/DataQualityView'

const { Content } = Layout;

function Template() {
  return (
    <div className="Template">
          <Router>
            <Layout>
              <Header/>
              <Layout>
                <Sidebar />
                <Layout>
                  <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, width:'100%' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Switch>
                        <Route exact path='/'>
                          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                        </Route>
                        <Route path='/dataQuality'>
                          <Breadcrumb.Item>About Us</Breadcrumb.Item>
                          <Breadcrumb.Item>Data Quality</Breadcrumb.Item>
                        </Route>
                      </Switch>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
                    <Switch>
                      <Route exact path='/' component={Dashboard}/>
                      <Route path='/dataQuality' component={DataQuality}/>
                    </Switch>
                    </div>  
                  </Content>
                  <Footer />
                </Layout>
              </Layout>
            </Layout>
          </Router>
    </div>
  );
}

export default Template;
