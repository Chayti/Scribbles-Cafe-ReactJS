import profile from '../public/assets/profile.png'

export default function Menu() {

    return (
        <div className="flex justify-between border-b-4 pb-4 mb-4">
            <h1 className="fw-bold text-4xl">Scribbles Cafe</h1>
            <img src={profile} alt="profile" />
        </div>
    )
}