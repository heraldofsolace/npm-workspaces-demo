import React from 'react'

export interface HeaderText {
  text: string
}
export const Header = ({ text }: HeaderText) => {
  return <div className="text">{text}</div>
}