import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ setFriends, selectedFriend, setSelectedFriend }) => {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const paidByFriend = bill ? bill - paidByUser : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();
        if (!bill || !paidByUser) return;

        let value = whoIsPaying === "user" ? paidByFriend : -paidByUser;
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? {
                          ...friend,
                          balance: friend.balance + value,
                      }
                    : friend
            )
        );
        setSelectedFriend(null);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="text"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>👨‍💼 Your expenses</label>
            <input
                type="text"
                value={paidByUser}
                onChange={(e) =>
                    setPaidByUser(
                        Number(e.target.value) > bill
                            ? paidByUser
                            : Number(e.target.value)
                    )
                }
            />

            <label>👩🏽‍🤝‍👩🏼 {selectedFriend.name}'s expenses</label>
            <input type="text" value={paidByFriend} disabled />

            <label>❓ Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Add</Button>
        </form>
    );
};

export default FormSplitBill;
