import React from "react";
import {connect} from "react-redux"

import Card from "./Card";


const Media =  props =>{
  const {max, min} = props
  return (
    <Card title="Media de Números" green>
      <div>
        <span>
            <span>Resultado</span>
            <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Media)