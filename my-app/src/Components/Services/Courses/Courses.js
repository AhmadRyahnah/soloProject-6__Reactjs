import React, { Fragment } from 'react'
import CardCourses from './CardCourses'
import CoursesItem from './CoursesItem'
import './Courses.css'
import Slider from '../../Slider/SliderImg'

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
        <Fragment>
<Slider/>
        <div className='Courses'>
            {CardItems}
        </div>
        </Fragment>
    )
}

export default Courses
