import Portfolio2022 from "../Portfolios/2022/Portfolio2022";
import Portfolio2023 from "../Portfolios/2023/Portfolio2023";
import Portfolio2024 from "../Portfolios/2024/Portfolio2024";
import Portfolio2026 from "../Portfolios/2026/Portfolio2026";
import PortfolioMobile from "../Portfolios/mobile/PortfolioMobile";

import './style/AppBody.css'

function AppBody(props) {
  const {portfolio} = props

  const teste = () => {

    switch (portfolio) {
      case 'mobile':
        return <PortfolioMobile />
      case '2022':
        return <Portfolio2022 />
      case '2023':
        return <Portfolio2023 />   
      case '2024':
        return <Portfolio2024 />
      case '2026':
        return <Portfolio2026 />    
      default:
        return <Portfolio2026 />
    }
  }

  return (
    <div className="bodyDiv">
      {teste()}
    </div>
  )
}

export default AppBody;