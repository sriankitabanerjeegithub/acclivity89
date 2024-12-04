
import React from 'react'

import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({ 
  accounts= [],totalBanks,totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
    <div className="total-balance-chart" style={{flex:"display",justifyContent:"center"}}>
     <DoughnutChart accounts={accounts}/>
    </div>
    <div className="flex flex-col gap-10">
    <h2 className="header-2">
        Bank Accounts: { totalBanks } 
    </h2>
    <div className="flex flex-col gap-2">
      <p className="total-balance-label">
        Total Current Balance
      </p>
      <div className="total-balance-amount flex-center gap-2">
        
      < AnimatedCounter amount={totalCurrentBalance} />
        
    </div>
    </div>
    </div>
    </section>
  )
}

export default TotalBalanceBox
