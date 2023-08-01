import "./style/AppHeader.css"

function AppHeader(props) {
  const {setPortfolio} = props

  return (
    <header>
      <p>Portfolios Anteriores</p>
      <button onClick={()=>setPortfolio('2023/2')}>2023/2</button>
      <button onClick={()=>setPortfolio('mobile')}>Mobile</button>
      <button onClick={()=>setPortfolio('2023')}>2023</button>
      <button onClick={()=>setPortfolio('2022')}>2022</button>
    </header>
  )
}

export default AppHeader;