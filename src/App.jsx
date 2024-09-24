import Profile from "./components/Profile/Profile";
import FriendList from "./components/Friendlist/Friendlist";
import userData from "./userData.json";
import friends from "./friends.json";
import transaction from "./transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
