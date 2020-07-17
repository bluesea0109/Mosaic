import React from 'react'
import { Card, Row, Col } from 'antd'
import moment from 'moment'

const Article = ({ news }) => (
  <Card bodyStyle={{ height: 'calc(100vh - 120px)' }} title={news.title}>
    <Row>
      <Col span={8}>
        <Row>
          <Col span={24}>
            <img
              src={news.urlToImage}
              alt={news.title}
              style={{ width: '100%', height: '100%' }}
            />
          </Col>
          <Col span={24}>
            <Row justify='center'>
              <a href={news.url}>
                {moment(news.publishedAt).format('YYYY-MM-DD hh:mm')}
              </a>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={16} style={{ paddingLeft: '20px' }}>
        <Row>
          <Col span={24}>
            <div>
              <b>Description: </b>
              <br />
              {news.description}
            </div>
          </Col>
          <Col span={24}>
            <b>{news.author && <div>Author: {news.author}</div>}</b>
          </Col>
          <Col span={24}>
            <b>{news.source.name && <div>From: {news.source.name}</div>}</b>
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
)

export default Article
