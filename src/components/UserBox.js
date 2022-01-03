
export default function UserBox({ user, setUserSelected }) {
    return (
        <div className="user__box" onClick={()=> setUserSelected(user)}>
            <img className='logo' src={user.profile_image_url} alt="user_image" />
            <div className="user__info">
                <h3>{user.name}</h3>
                <span>Tap to see recent tweets</span>
            </div>
        </div>
    )
}