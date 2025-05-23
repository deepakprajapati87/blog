import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import './CardSlider.css'
export const CardSlider = ()=>{
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };
      const cards = [
        {   description: "Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti." ,
            title:"Thomas Johnson",  nameTittle:"Excutive Director,themefisher"
        },
        {  description: "Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .",
             title:"Mickel hussy",  nameTittle:"Excutive Director,themefisher"
         },
         {  description: "Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae numquam corrupti.",
            title:"James Watson",  nameTittle:"Excutive Director,themefisher"
        },
         {  description: "Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur natus iusto recusandae .",
             title:"Mickel hussy",  nameTittle:"Excutive Director,themefisher"
         }
        
      ];
    
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {cards.map((card)=>
               <div key={card.id} className="card-1">
                <p className="paraStayle"> <span> <BiSolidQuoteAltLeft/> </span> {card.description}</p>
               <h5>{card.title}</h5>
               <p>{card.nameTittle}</p>
             </div>
            )}
         
            
          </Slider>
        </div>
      );
    }
