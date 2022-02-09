import React from "react"
import './styles.css'

const Slider = ({imageSrc, title, subtitle, flipped }) => { //flipped dira se a imagem estara a esquerda ou a direita
    
        const renderContent = () => {
            if(!flipped){
                return (
                <>
                    <img src={imageSrc} alt="Travel" className="slider__image" />
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p>{subtitle}</p>
                    </div>  
                </>
                )
            } else {
                return (
                <>
                        <div className="slider__content">
                            <h1 className="slider__title">{title}</h1>
                            <p>{subtitle}</p>
                        </div>  
                        <img src={imageSrc} alt="Travel" className="slider__image" />
                </>
                )
            }
        }
    
    return(
        <div className="slider">{renderContent()}</div>
    )
}

export default Slider