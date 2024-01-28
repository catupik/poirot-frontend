import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Purchase from "./Purchase";



function Account() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line
  const [userId, setUserId] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const MY_URL = 'https://poirot-m4bt.onrender.com'

  useEffect(() => {
    if (isAuthenticated) {
      setUserId(user.sub);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${MY_URL}/getmessages`);
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.log("Error!", err);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchPurchaseHistory = async () => {
      if (isAuthenticated) {
        try {
          const response = await fetch(`${MY_URL}/purchase-history/${user.sub}`);
          if (!response.ok) {
            throw new Error('Error fetching purchase history');
          }
          const data = await response.json();
          setPurchaseHistory(data);
        } catch (err) {
          console.error("Error fetching purchase history:", err);
        }
      }
    };

    fetchPurchaseHistory();
  }, [isAuthenticated, user]);


  const deletemessage = async (id) => {
    try {
      await fetch(`${MY_URL}/deletemessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("delete error", err);
    }
  };

  

  return (
    <div className="account-container">
      {isAuthenticated && (
        <div className="accInfo">
          <p className="user-info">
            <strong>User name: </strong>
            {user.nickname}
          </p>
          <p className="user-info">
            <strong>Email: </strong>
            {user.email}
          </p>
          {/* <p className="user-info"><strong>UserId:</strong> {user.sub}</p> */}
          <img src={user.picture} alt="user-pic" className="user-pic" />
        <div className="logout">
          <button onClick={() => logout({ returnTo: window.location.origin })} className="btn logoutbtn">
            Log Out
          </button>
          </div>


          <div>
          <h2>Purchase History</h2>
          {purchaseHistory.length > 0 ? (
            purchaseHistory.map((purchase) => <Purchase purchase={purchase}/>)
          ) : (
            <p>No purchase history available.</p>
          )}
        </div>


        </div>
      )}
      {isAuthenticated && user?.email === "poirot@detective.com" && (
        <div>
          <h2 className="messages">Messages:</h2>
          <ul className="messages-list">
            {messages.map((msg) => (
              <div key={msg._id}>
                <li>
                  <p>
                    <b>Name:</b> {msg.name}
                  </p>
                  <p>
                    <b>Email:</b> {msg.email}
                  </p>
                  <p>
                    <b>Service: </b>
                    {msg.service}
                  </p>
                  <p>
                    <b>Case description:</b> {msg.caseDescription}
                  </p>
                  <p>
                    <b>Consultation type:</b> {msg.consultationType}
                  </p>
                </li>
                <div className="message-icons">
                  <img
                    onClick={() => deletemessage(msg._id)}
                    className="delete-icon"
                    src="/account/free-icon-delete-message-5803263.png"
                    alt="delete-icon"
                    width="50"
                  />
                  <a href={`mailto:${msg.email}`}>
                    <img
                      className="send-icon"
                      src="account/free-icon-message-5803012.png"
                      alt="send-icon"
                      width="35"
                    />
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <h2 className="cart-title">Log in to the system</h2>
          {!isAuthenticated&& (

            <div className="login">
            <button className='btn loginbtn' onClick={() => loginWithRedirect()}>
            Log In
          </button>
          </div>
          )}

          
        </div>
      )}
    </div>
  );
}

export default Account;
