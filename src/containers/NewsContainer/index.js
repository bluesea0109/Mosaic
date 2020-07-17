import React, { useState, useEffect, useCallback } from 'react'
import { Layout, Input, Pagination, Row, Col, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { News, Article } from 'components'
import {
  getNews,
  selectNews,
  selectPage,
  selectTotal,
  selectLoading,
} from 'store/news'

const { Sider, Content } = Layout
const NewsContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const stableDispatch = useCallback(dispatch, [])
  const news = useSelector(selectNews)
  const page = useSelector(selectPage)
  const total = useSelector(selectTotal)
  const loading = useSelector(selectLoading)
  const handleArticle = (index) => {
    setSelectedIndex(index)
  }
  const handleSearch = (value) => {
    setSearch(value)
    setSelectedIndex(0)
    dispatch(getNews({ search: value, page: 1 }))
  }
  const handleChange = (page) => {
    setSelectedIndex(0)
    dispatch(getNews({ search, page }))
  }

  useEffect(() => {
    stableDispatch(getNews({ search, page: 1 }))
  }, [stableDispatch, search])

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
        width={450}
      >
        <Spin spinning={loading}>
          <Row
            justify='space-between'
            style={{ padding: '10px' }}
            gutter={[0, 20]}
          >
            <Col span={24}>
              <Row gutter={[0, 10]}>
                {news.length &&
                  news.map((item, index) => (
                    <Col key={index}>
                      <News
                        news={item}
                        handleClick={handleArticle}
                        index={index}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col span={24}>
              <Row justify='center'>
                {total && (
                  <Pagination
                    current={page}
                    onChange={handleChange}
                    total={total}
                    showSizeChanger={false}
                  />
                )}
              </Row>
            </Col>
          </Row>
        </Spin>
      </Sider>
      <Layout>
        <Content style={{ height: '100vh' }}>
          <Row
            justify='end'
            align='middle'
            style={{ height: '60px', paddingRight: '10px' }}
          >
            <Col span={8} style={{ width: 'auto', height: 'auto' }}>
              <Input.Search onSearch={handleSearch} enterButton />
            </Col>
          </Row>
          {news.length && <Article news={news[selectedIndex]} />}
        </Content>
      </Layout>
    </Layout>
  )
}

export default NewsContainer
