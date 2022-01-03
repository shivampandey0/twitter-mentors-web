
export default function UserBox({ name, image, setUserSelected }) {
    return (
        <div className="user__box">
            <img className='logo' src={image} alt="logo" />
            <div className="user__info">
                <h3>{name}</h3>
                <span>Tap to see recent tweets</span>
            </div>
        </div>
    )
}