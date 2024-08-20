import Image from "next/image"
import MyImage from "../../public/images/song-writing.jpg"

const LearnUseImage = () => {
  return (
    <>
    <Image src={MyImage} alt="saqib" width={500} height={300}/>
    </>
  )
}

export default LearnUseImage