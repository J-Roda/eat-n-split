import Friends from "./Friends";

const ListOfFriends = ({
    friends,
    setSelectedFriend,
    selectedFriend,
    setShowAddFriend,
}) => {
    return (
        <ul>
            {friends.map((friend) => (
                <Friends
                    friend={friend}
                    key={friend.id}
                    setSelectedFriend={setSelectedFriend}
                    selectedFriend={selectedFriend}
                    setShowAddFriend={setShowAddFriend}
                />
            ))}
        </ul>
    );
};

export default ListOfFriends;
