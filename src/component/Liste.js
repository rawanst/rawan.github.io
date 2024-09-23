import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Liste = ({item, type}) => {
    const [isHover, setIsHover] = useState(false)

    const navigate = useNavigate(); 
    const routeChange = () => { 
      navigate(`/${type}/${item.id}`);
    }

    return (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={routeChange}
          style={{
            key: item.id,
            width: '97%',
            marginBottom: '0.5%',
            marginTop: '0.5%',
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
            {item.titre}
          </h2>
          <p
            style={{
                margin: '0',
                marginLeft: '1%',
            }}
          >
            {item.date}
          </p>
          <p
            style={{
              marginLeft: '1%',
            }}
          >
            {item.resume}
          </p>
        </div>
    )
}

export default Liste;