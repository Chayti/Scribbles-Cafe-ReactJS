import { useContext, useEffect, useState } from "react"
import { BsBookmark } from "react-icons/bs";
import { ReadingTimeContext } from "./main";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LeftSide({ bookmarkedBlogs, setBookmarkedBlogs }) {

    const { setTime } = useContext(ReadingTimeContext);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("data.json")
                const data = await res.json()
                setBlogs(data)
            }
            catch (e) {
                console.log('err occured!')
            }
        })()
    }, [])

    function handleBookmarks(id, title) {
        // console.log(id, title)

        const newArray = [...bookmarkedBlogs]
        newArray.push({
            id,
            blog_title: title
        })

        setBookmarkedBlogs(newArray)

        bookmarkedBlogs.find(e => e.id == id)
            ? toast(`Blog - "${title}" added in the list again!`)
            : ""
    }

    return (
        <div className="w-full md:w-4/6" >
            {
                blogs.map(blog => <div
                    key={blog.id}
                    className={`my-10 ${blog.id !== blogs.length
                        ? 'border-b-4 pb-10'
                        : 'border-b-0'} w-full md:w-4/5`}>

                    <img
                        src={blog.blog_img}
                        alt={`blog${blog.id}`}
                    />

                    <div className="md:flex justify-between items-center">
                        <div className="mt-4 md:flex items-center">
                            <img
                                className="rounded-full w-16"
                                src={blog.author_img}
                                alt="profile" />
                            <div className="md:ms-4">
                                <h1>
                                    {blog.author_name}
                                </h1>
                                <p
                                    className="text-gray-600 text-xs">
                                    {blog.posted_date}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center">
                            <p
                                className="me-2 text-gray-600 text-sm">
                                {blog.reading_time} min read
                            </p>
                            <button onClick={() => handleBookmarks(blog.id, blog.blog_title)}>
                                <BsBookmark />
                            </button>
                        </div>
                    </div>

                    <h1
                        className="font-bold text-3xl mt-4">
                        {blog.blog_title}
                    </h1>

                    <div className="flex">
                        {blog.category.map((category, id) => <div key={id}>
                            <p
                                className="mt-2 me-5 text-gray-600">
                                #{category}
                            </p>
                        </div>)}
                    </div>

                    <button
                        className="mt-4 underline underline-offset-2 text-[#6047EC]"
                        onClick={() => setTime(prev => prev + blog.reading_time)}>
                        Mark as read
                    </button>

                    <ToastContainer />
                </div>
                )
            }
        </div>
    )
}