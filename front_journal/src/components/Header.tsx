import React from 'react'

const Header: React.FC = () => {
  const headerStyle = {
    backgroundImage: "url('/journal_bg.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundColor: 'transparent'
  }
  return (
    <header className="py-4">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center " style={headerStyle}>
          <div className="m-lg-5"></div>
        </div>
      </div>
    </header>
  )
}

export default Header
