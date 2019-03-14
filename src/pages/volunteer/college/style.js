import styled from 'styled-components';
import { Radio, Table } from 'antd';

export const PageViewWrap = styled.section`
    width: 1200px;
    margin: 0 auto;
`
export const Table1 = styled(Table)`
    .ant-table-thead{
        >tr{
            >th{
                background-color: #1fb5ab;
                color: #FFF;
                border-right: none !important;
            }
        }
    }
`
export const RadioButtom = styled(Radio.Button)`
    width: 80px;
    text-align: center;
    border-color: #1fb5ab!important;
    &:before{
        background-color: #1fb5ab!important;
    }
`

export const CollegeLabel = styled.div`
    padding: 4px 0;
    span{
        padding: 0 5px;
        line-height: 1.4em;
        margin-right: 5px;
        border-radius: 2px;
        font-size: 10px;
        background-color: #f9a21d;
        color: #fff;
    }
`

export const CollegeType = styled.div`
    padding: 4px 0;
    span{
        padding: 0 5px;
        line-height: 1.4em;
        font-size: 12px;
        color: #999;
    }
`