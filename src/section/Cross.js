import React from 'react'

const Cross = ({ onClick, className, style }) => {
  return (
    <svg className={className} style={style} onClick={onClick && onClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
      <rect x="0.5" y="0.5" width="29" height="29" rx="4.5" fill="white" />
      <rect x="0.5" y="0.5" width="29" height="29" rx="4.5" stroke="#E37729" />
      <path d="M8.3846 8.3846C8.50635 8.26268 8.65095 8.16596 8.81011 8.09996C8.96927 8.03397 9.13988 8 9.31219 8C9.48449 8 9.6551 8.03397 9.81427 8.09996C9.97343 8.16596 10.118 8.26268 10.2398 8.3846L15.0002 13.1433L19.7606 8.3846C19.8824 8.26279 20.027 8.16617 20.1862 8.10024C20.3454 8.03432 20.5159 8.00039 20.6882 8.00039C20.8605 8.00039 21.031 8.03432 21.1902 8.10024C21.3494 8.16617 21.494 8.26279 21.6158 8.3846C21.7376 8.50642 21.8342 8.65103 21.9001 8.81018C21.9661 8.96934 22 9.13992 22 9.31219C22 9.48445 21.9661 9.65504 21.9001 9.81419C21.8342 9.97335 21.7376 10.118 21.6158 10.2398L16.8571 15.0002L21.6158 19.7606C21.8618 20.0066 22 20.3403 22 20.6882C22 21.0361 21.8618 21.3698 21.6158 21.6158C21.3698 21.8618 21.0361 22 20.6882 22C20.3403 22 20.0066 21.8618 19.7606 21.6158L15.0002 16.8571L10.2398 21.6158C9.99376 21.8618 9.6601 22 9.31219 22C8.96428 22 8.63061 21.8618 8.3846 21.6158C8.13859 21.3698 8.00039 21.0361 8.00039 20.6882C8.00039 20.3403 8.13859 20.0066 8.3846 19.7606L13.1433 15.0002L8.3846 10.2398C8.26268 10.118 8.16596 9.97343 8.09996 9.81427C8.03397 9.6551 8 9.48449 8 9.31219C8 9.13988 8.03397 8.96927 8.09996 8.81011C8.16596 8.65095 8.26268 8.50635 8.3846 8.3846Z" fill="#E37729" />
    </svg>
  )
}

export default Cross