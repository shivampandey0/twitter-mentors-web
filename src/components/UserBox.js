
export default function UserBox({ user, setUserSelected }) {
    return (
        <div className="user__box" onClick={()=> setUserSelected(user)}>
            <img className='logo' src={user.profile_image_url} alt="user_image" />
            <div className="user__info">
                <h4>{user.name}</h4>
                <span>Tap to see recent tweets</span>
            </div>
        </div>
    )
}