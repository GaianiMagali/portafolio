import React from 'react';
import { Title } from '../components/Title';
import allBlogs from '../data/allBlogs';

export const BlogsPage = () => {
    return (
        <div className="BlogsPage">
            <div className="b-title">
                <Title title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>

            <div className="BlogsPage">
                {
                    allBlogs.map((blog, i) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt={blog.id + i} />
                                <a href={blog.link} className="blog-link">{blog.title}</a>
                                <div className="date-con">

                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
