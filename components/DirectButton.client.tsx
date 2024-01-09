'use client'
import { Button } from '@nextui-org/react'
import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'

const DirectButton = ({ href, children }) => {
  const handleClick = () => {
    window.location.href = href
  }
  const { theme, setTheme, resolvedTheme } = useTheme()

  // 根據主題設定按鈕樣式
  const buttonStyle = {
    margin: '10px',
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '10px',
    background: theme === 'dark' ? 'white' : 'black', // 根據主題變化背景顏色
    color: theme === 'dark' ? 'black' : 'white', // 根據主題變化文字顏色
  }

  return (
    <Button onClick={handleClick} style={buttonStyle}>
      {children}
    </Button>
  )
}

export default DirectButton
