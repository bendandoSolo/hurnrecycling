import contact from "../pages/contact"



const halfPageImage = ({background, text, smallText}) => {

    return (
        <div className="bg-image bg-fixed text-center" style={{backgroundImage: `url(${background})`, height: '50vh'}}  >
        <div className="mask" style={{backgroundColor: "rgba(80,184,73,.35)"}}  >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">

                    <h1 className="display-4 mb-4">
                        <strong>{text}</strong>
                    </h1>

                    <h4 className="mb-4">
                            <strong>{smallText}</strong>
                    </h4>
               
            </div>
          </div>
        </div>
      </div>   
    )
}

export default halfPageImage;