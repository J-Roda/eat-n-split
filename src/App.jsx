import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import ListOfFriends from "./components/ListOfFriends";
import viteLogo from "/vite.svg";
const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    return (
        <div className="app">
            <div className="sidebar">
                <ListOfFriends
                    friends={friends}
                    setSelectedFriend={setSelectedFriend}
                    selectedFriend={selectedFriend}
                    setShowAddFriend={setShowAddFriend}
                />
                {showAddFriend && (
                    <FormAddFriend
                        setFriends={setFriends}
                        setShowFriend={setShowAddFriend}
                    />
                )}
                <Button onClick={() => setShowAddFriend((show) => !show)}>
                    {showAddFriend ? "Close" : "Add friend"}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill
                    setFriends={setFriends}
                    selectedFriend={selectedFriend}
                    setSelectedFriend={setSelectedFriend}
                />
            )}
        </div>
    );
}

export default App;
