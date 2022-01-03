

export default function Avatar({image, name = 'Twitter Mentors'}){
    return (
        <div className="logo__component">
            <img className='logo' src={image} alt="logo" />
            <h3>{name}</h3>
        </div>
    )
}