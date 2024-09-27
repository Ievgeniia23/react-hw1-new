
import './App.css'
import userData from './userData.json'
import friends from './friends.json'
import transactions from'./transactions.json'

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';




const App = () => {

  const onSayMyName = (friendName) => {
    console.log(friendName);
    
  }

  const onBtnClick = (event) => {
   console.log(event);
}
 const onBtnClick2 = (beerGlassCount) => {
   console.log(beerGlassCount);
 };

  return (
    <>
      <div>
        <button onClick={onBtnClick}>Click me with Event</button>

        <button onClick={() => onBtnClick2(555)}>Click me with some value</button>
      </div>

      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
       friends={friends}
       onSayMyName={onSayMyName}
      />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;





















// const App = () => {
//   return (
//     <>
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />
//           <FriendList friends={friends}
//           />
//     </>
//   );
// };



// export default App;
