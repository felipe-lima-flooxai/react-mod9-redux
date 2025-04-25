import React from "react";
import {connect} from "react-redux"

import Card from "./Card";


const Media =  props =>{
  console.log(props)
  return (
    <Card title="Media de Números" green>
      <div>
        <span>
            <span>Resultado</span>
            <strong>{10}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state){
  return {
    numeros: state.numeros
  }
}

export default connect(mapStateToProps)(Media)