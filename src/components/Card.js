import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

function Card(props) {
    let courses = props.courses;
    let likedCourses = props.likedCourses
    let setLikedCourses = props.setLikedCourses
    function clickHandler() {
        if(likedCourses.includes(courses.id)){
            setLikedCourses((prev) => prev.filter((cid) => (cid !== courses.id)) );
            toast.warning("Like Removed")
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourses([courses.id])
            }
            else{
                setLikedCourses((prev) => [...prev, courses.id])
            }
            toast.success("Liked Successfully")
        }
    }

    return (
        <div className='w-[300px] bg-[#2c313c] bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={courses.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-14px] grid place-content-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(courses.id) ?
                            (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>) :
                            (<FcLike fontSize="1.75rem"></FcLike>)
                        }
                    </button>
                </div>

            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{courses.title}</p>
                <p className='text-white mt-2'>
                    {
                        courses.description.length > 150 ?
                        (courses.description.substr(0,100)) + "...":
                        (courses.description)
                    }
                    </p>
            </div>
        </div>
    )
}

export default Card
