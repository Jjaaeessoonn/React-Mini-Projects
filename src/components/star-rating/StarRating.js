// need npm i react-icons
import './styles.css';
import React from 'react'
import {FaStar} from 'react-icons/fa';

const StarRating = ({noOfStars = 5}) => {  // set default variable value
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);

    function handleClick(getCurrIndex) {
        setRating(getCurrIndex);
        console.log('set rating to '+getCurrIndex);
    }
    function handleMouseEnter(getCurrIndex) {
        setHover(getCurrIndex);
        console.log('set hover to '+getCurrIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
        console.log('leaving set hover to rating '+rating);
    }

    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index)=>{
                    index +=1;
                    return (
                        <FaStar 
                            key={index}
                            // hover is the active variable with rating being the upperbound(used when cursor leaves stars)
                            className={index <= (hover || rating)? 'active':'inactive'}
                            onClick={()=>handleClick(index)}
                            onMouseMove={()=>handleMouseEnter(index)}
                            onMouseLeave={()=>handleMouseLeave()}
                            size={40}
                        />
                    )
                })
            }
        </div>
    )
}

export default StarRating