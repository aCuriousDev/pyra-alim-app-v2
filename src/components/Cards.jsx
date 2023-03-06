import './Cards.css';
import { motion, useMotionValue, useTransform } from "framer-motion";


export default function Cards() {

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "#ebc700",
    "#202125",
    "#4398dd"
  ]);

  return (
    <motion.div style={{ background }} id="board" className="board unselectable">
      <motion.div drag 
      dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }} 
    whileDrag={{ scale: 1.1 }} 
    dragElastic={0.8} 
    dragSnapToOrigin={true} 
    className="card" style={{ x }} id="card">
          <img
            className="img-alim"
            src="src/assets/Picto1.png"
            draggable="false"
          />
          <h2 className="card-title drop-shadow">Pain blanc</h2>
          <a className="details-trigger" href="#">
            détails
          </a>
      </motion.div>
    </motion.div>
  );
}
