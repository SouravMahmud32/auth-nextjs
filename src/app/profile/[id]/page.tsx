export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-blue-700">
            <h1>Profile</h1>
            <hr />
            <p className='text-4xl'>Profile Page <span className='ml-2 p-2 rounded bg-orange-400'>{params.id}</span></p>
        </div>
    );
}
