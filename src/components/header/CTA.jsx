import React from 'react'
import ASHISHCV from '../../assests/ASHISHRAICV.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={ASHISHCV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
    )
}

export default CTA
