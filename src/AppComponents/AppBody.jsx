import Portfolio2022 from "../Portfolios/2022/Portfolio2022";
import Portfolio2023B from "../Portfolios/2023-2/Portfolio2023B";
import Portfolio2023 from "../Portfolios/2023/Portfolio2023";
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
      case '2023/2':
        return <Portfolio2023B />    
      default:
        return <Portfolio2023B />
    }
  }

  return (
    <div className="bodyDiv">
      {teste()}
    </div>
  )
}

export default AppBody;