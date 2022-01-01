import React from 'react'
import CardCourses from './CardCourses'
import CoursesItem from './CoursesItem'
import './Courses.css'

const Courses = () => {

    const CardItems = CoursesItem.map((CardItem) => {
        return (
            <CardCourses

                key={CardItem.id}
                img={CardItem.img}
                title={CardItem.title}
                desc={CardItem.desc}
                numUS={CardItem.numUS}
                alt={CardItem.alt}
            />
        )
    })
    return (
        <div className='Courses'>
            {CardItems}
        </div>
    )
}

export default Courses
