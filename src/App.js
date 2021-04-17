// import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/Friends/friends.json'
import transactions from './components/TransactionHistory/transactions.json';

const App =() =>{
    return <div>
        
        <Profile name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />       
       
        <Statistics title="Upload stats"  stats={statisticalData} />        
        {/* <Statistics stats={statisticalData} />; */}
        <FriendList friends={friends} />,
        <TransactionHistory items={transactions} />;
    </div>
}

export default App;