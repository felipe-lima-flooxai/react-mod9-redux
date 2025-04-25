import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";


export default props =>{

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input type="number" value={0} readOnly 
             />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={0} readOnly
            />
        </span>
      </div>
    </Card>
  );
}

