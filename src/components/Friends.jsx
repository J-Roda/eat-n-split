import { useState } from "react";
import Button from "./Button";

const Friends = ({
    friend,
    setSelectedFriend,
    selectedFriend,
    setShowAddFriend,
}) => {
    const isSelected = selectedFriend?.id === friend.id;

    function handleSelectedFriend() {
        setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    }
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you {Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}

            <Button onClick={handleSelectedFriend}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
};

export default Friends;
