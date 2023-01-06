import React, { ReactNode, useEffect } from 'react'
import './table.css'

export interface TableProps {
  headers: String[]
  rows: {}[]
}

const TableComponent = (props: TableProps) => {
  return (
    <div className="table-container">
      <table className="tg">
        <thead>
          <tr>
            {
              props.headers.map((header) => {
                return <th className="tg-0lax">{header}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            props.rows.map((row, index) => {
              return (
                <tr key={`row-${index}`}>
                  {
                    props.headers.map((header, headerIndex) => {
                      return (
                        <td className="tg-0lax" key={`row-${index}-cell-${index}`}>{Object.values(row)[headerIndex] as ReactNode}</td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
