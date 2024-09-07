import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import React from 'react';
const Home = () => {
  const loggedIn ={ firstName: 'Anand',lastName:'Sharma',email:"contact@samstery.pro"};
  return (
    <section className="Home">
      <div className="home-content" style={{display:"flex",flexDirection:"row"}}>
        <header className="home-header">
          <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your account and 
        transactions efficiently."/>
       
       <TotalBalanceBox
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1250.35}
       />
        </header>
        
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50}, {currentBalance:123.50}]}/>
      </div>
      RECENT TRANSACTION
     </section> 
  )
}
export default Home
