import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ setFriends, setShowFriend }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const id = crypto.randomUUID();

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        setFriends((friend) => [...friend, newFriend]);
        setShowFriend((show) => !show);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }
    return (
        <>
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <label>👩🏼‍🤝‍👩🏻Friend Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>🖼 Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <Button>Add</Button>
            </form>
        </>
    );
};

export default FormAddFriend;
