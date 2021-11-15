import { useState, useEffect,useMemo} from "react";


const Sun = ({styles}) => {
const [coordsX, setCoordsX] = useState();
const [coordsY, setCoordsY] = useState();


const [circleDeg, setCircleDeg] = useState(0);


useEffect(() => {
    setInterval(() => {
        setCircleDeg(prevCount => {
            if(prevCount >= 360) {
                return 0
            }
            return prevCount + 1
        });
       
    }, 20);


  }, []);


function handleWheel(event){
 
    if(event.deltaY < 0) {

        let interval = setInterval(() => {
            setCircleDeg(prevCount => {
                if(prevCount >= 360) {
                    return 0
                }
                return prevCount - 1.5;
            });
        }, 5);


        setTimeout(() => {
            clearInterval(interval);
        }, 300);

    } else { 
  
        let interval = setInterval(() => {
            setCircleDeg(prevCount => {
                if(prevCount >= 360) {
                    return 0
                }
                return prevCount + 1.5
            });
        }, 5);


        setTimeout(() => {
            clearInterval(interval);
        }, 300);

    }

 }
   
 function handleMouseMove(event) {
    let x = event.pageX / window.innerWidth;
    let y = event.pageY / window.innerHeight;
    

    setCoordsX(x);
    setCoordsY(y);
}
    return(
        <div id={styles.titleParalax}  onMouseMove={handleMouseMove} onWheel={handleWheel}>
        <h1 className={styles["h1"]} style={{transform: `translate(${coordsX * 50}px , ${coordsY * (-50)}px)`}} >FULL-CYCLE EVENT AGENCY</h1>
        
        <div id={styles.sun} >
          <div id={styles.circleTicker} style={{transform: `rotate(${circleDeg}deg)`}}>
            <span>s</span>
            <span>h</span>
            <span>o</span>
            <span>w</span>
            <span>r</span>
            <span>e</span>
            <span>e</span>
            <span>l</span>
            <span> </span>
            <span>s</span>
            <span>h</span>
            <span>o</span>
            <span>w</span>
            <span>r</span>
            <span>e</span>
            <span>e</span>
            <span>l</span>
            <span> </span>
            <span>s</span>
            <span>h</span>
            <span>o</span>
            <span>w</span>
            <span>r</span>
            <span>e</span>
            <span>e</span>
            <span>l</span>
          </div>
        </div>

      </div>

    )
}

export default Sun;