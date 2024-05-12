import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <div>
        <UserHeader/>

        <UserPost likes={1200} replies={481} postImage="/post1.png" postTitle="Let's talk about threads." /> 
        <UserPost likes={1452} replies={262} postImage="/post2.png" postTitle="Nice tutorial." />
        <UserPost likes={657} replies={972} postImage="/post3.png" postTitle="I Love this guy." />
        <UserPost likes={756} replies={462} postImage="/coolimage.png" postTitle="This is my first thread." />
         
    </div>
  )
}

export default UserPage