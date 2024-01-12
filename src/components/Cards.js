import React, { useState } from 'react'
import Card from './Card'

function Cards({courses, category}) {

    const [likedCourses, setLikedCourses] = useState([])

    // Returns you a list of all courses received from api response
    function getCourses() {
        if(category === "All"){
        let allCourses = [];

        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })

        return allCourses;
    }
    else{
        return courses[category];
    }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((courses) => {
                    return <Card key={courses.id}
                    courses={courses}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}

export default Cards
