import React, { ReactNode, useEffect } from 'react'
import './table.css'

export interface TableProps {
  headers: String[]
  rows: {}[]
}

const TableComponent = (props: TableProps) => {
  return (
    <div className="table-container">
      <div className="table-header">
        {
          props.headers.map((header) => {
            return <div className="table-header-cell">{header}</div>
          })
        }
      </div>
      {
        props.rows.map((row, index) => {
          return (
            <div key={`row-${index}`} className="table-row">
              {
                props.headers.map((header, headerIndex) => {
                  return (
                    <div className="table-row-cell" key={`row-${index}-cell-${index}`}>{Object.values(row)[headerIndex] as ReactNode}</div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default TableComponent
