import React from 'react';
import Title from 'antd/lib/typography/Title';
import { Layout, Avatar } from 'antd';

const { Header } = Layout;

function Headers() {
    return (
        <>
            <Header style={{ padding: 10 }}>
                <Avatar style={{ float: 'right' }} src="./../user.png" />
                <Title style={{ color: 'white' }} level={3}>ANT Design</Title>
            </Header>
        </>
    )
}

export default Headers