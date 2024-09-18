import { useState } from "react";

const Liste = ({id, titre, date, resume, contenu}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            key: {id},
            width: '97%',
            border: '4px solid #823ccbff',
            borderRadius: '1em',
            fontFamily: "Melodrama-Light", 
            color: isHover ? '#e8e3edff' : '#823ccbff',
            backgroundColor: isHover && '#823ccbff',
          }}
        >
          <h2 
            style={{
              fontFamily: "Melodrama-Bold", 
              fontWeight: '600',
              fontSize: 'xx-large',
              margin: '0',
              marginLeft: '1%',
            }}
          >
            {titre}
          </h2>
          <p
            style={{
                margin: '0',
                marginLeft: '1%',
            }}
          >
            {date}
          </p>
          <p
            style={{
              marginLeft: '1%',
            }}
          >
            {resume}
          </p>
        </div>
    )
}

export default Liste;