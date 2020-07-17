import React from 'react'
import { Card, Row, Col } from 'antd'

const News = ({ news, handleClick, index }) => (
  <Card onClick={() => handleClick(index)}>
    <Row>
      <Col span={9}>
        <img
          src={news.urlToImage || ''}
          alt={news.title}
          style={{ width: '100%', height: 'auto' }}
        />
      </Col>
      <Col span={15} style={{ padding: '5px' }}>
        <div>{news.content || ''}</div>
        <div>
          <b>Source: {news.source.name || ''}</b>
        </div>
      </Col>
    </Row>
  </Card>
)

export default News
