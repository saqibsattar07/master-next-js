import Link from "next/link"

const LearnLink = () => {
    const id = 3
  return (
    <>
    <Link href="/admin/dashboard">Go to Admin Dashboard</Link>
    <Link href={`/user/profile/${id}`}>User Profile</Link>
    </>
  )
}

export default LearnLink