import React from 'react'
import {useRouter} from 'next/router'
import {Row, Col, Layout, PageHeader} from 'antd'
import ListCartProducts from '../../components/list'
import {LeftCircleFilled} from '@ant-design/icons'
const {Content} = Layout

const CardPayment = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <>
      <Content style={{padding: '30px 50px', background: '#FAFAF8'}}>
        <Row>
          <Col span={24}>
            <PageHeader
              className="site-page-header"
              onBack={() => handleGoBack()}
              backIcon={<LeftCircleFilled style={{fontSize: '30px'}} />}
              subTitle="Volver"
            />
          </Col>
        </Row>
        <Row gutter={[130, 0]}>
          <Col span={12}>
            <div className="list-products">
              <ListCartProducts />
            </div>
          </Col>
          <Col span={12}>
            <div className="payment-card">col-6 col-pull-18</div>
          </Col>
        </Row>
      </Content>

      <style jsx>
        {`
          .list-products {
            background-color: green;
            padding: 30px 15px;
            border-radius: 16px;
            background: #ffffff;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
          }

          .payment-card {
            background-color: orange;
          }
        `}
      </style>
    </>
  )
}

export default CardPayment
