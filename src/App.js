import React, { useState } from "react"
import data from "./data-nested.json"

export const CustomButton = ({ fileName, children }) => {
  const [enable, seEnable] = useState(true)
  return (
    <div>
      <div onClick={() => seEnable(!enable)}>
        {children ? (
          <button> {fileName} </button>
        ) : (
          <span style={{ color: "blue" }}>{fileName} </span>
        )}
      </div>
      {enable && <div> {children}</div>}
    </div>
  )
}

export const CreateButton = ({ data }) => {
  const fileName = data.fileName
  const children = data?.children

  return (
    <CustomButton fileName={fileName}>
      {children &&
        children.map((obj) => {
          return (
            <div style={{ marginLeft: "40px" }}>
              <CreateButton data={obj} />
            </div>
          )
        })}
    </CustomButton>
  )
}

export default function App() {
  return (
    <div>
      <CreateButton data={data} />
    </div>
  )
}
