import { useSelector } from 'react-redux'
import "../styles/dashboard.css"

function Dashboard() {
    const { userInfo } = useSelector((state) => state.auth)
    console.log(userInfo)
    if (!localStorage.getItem('userToken') || userInfo === null || userInfo.logged === false) {
        localStorage.removeItem('userToken')
        window.location = "/"
    }
    return (
        <div className="">
            {/* <NavBar /> */}
            <div className="flex-1 p-7 mt-4">
                <div>
                    <h1 className="font-semibold mb-4 text-center">Hello {userInfo?.data.nama_user}! You're logged in<br /></h1>
                    <div role="heading" aria-level="2" className='w-50 p-2 mb-1 rounded mx-auto'>
                        <div className='text-center'>
                            <h2 className=" text-black pr-5 mb-4">
                                <b>Username : </b>{userInfo?.data.username}
                            </h2>
                            <h2 className=" text-black">
                                <b>Email : </b>  {userInfo?.data.email}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard