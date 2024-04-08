import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserNameEditor from '../userNameEditor';
import { getInfoUser, updateUserInfo } from '../../redux/reducers/userSlice';



const User = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);




  useEffect(() => {

    dispatch(updateUserInfo())
    dispatch(getInfoUser());

  }, [dispatch]);

  return (


    <div className="main bg-dark ">
      <div className="userPage">
        <div className="UserNameEditor">

          <UserNameEditor userDetails={userDetails} />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default User;
















