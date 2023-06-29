import React from 'react';
import './Events.css';
import poet from '../../images/favicon.jpg'
import Newsletter from '../Newsletter/Newsletter';
 
const Events = () => {
    return (
        <div>
            <div className='chobi mb-6'>
                <h1 className='mb-10 text-center text-white'>Love like a Poet</h1>
                <div className='mt-6'>
                <center><iframe width="sm:395 lg:560" height="315" src="https://www.youtube.com/embed/uf-hk5MgDOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
                </div> 
            </div>
            <div className='my-6'>
                <img className='logosize mx-auto' src={poet} alt=""/>
                <h1 className='text-4xl text-center font-sans font-semibold'>POETS</h1>
            </div>
            <div className='poety'>
                     
            </div>
        </div>
    );
};

export default Events;