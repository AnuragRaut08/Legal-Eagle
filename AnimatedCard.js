import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
`;

function AnimatedCard({ children }) {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Card>
  );
}

export default AnimatedCard;
// 
