import Avatar from "./Avatar";


export default function UserBox({ name, image, setUserSelected }) {
    return (
        <div className="user__box">
            <Avatar image={image} />
            <div className="right__section">
                <h3>{name}</h3>
                <span>Tap to see recent tweets</span>
            </div>
        </div>
    )
}