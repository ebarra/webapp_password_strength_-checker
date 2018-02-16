import React from 'react';

export default class ModalEnd extends React.Component {
  constructor(props){
    super(props);
   }

   render() {
     return (
       <div className={"modal-content " + (this.props.show ? "show":"hide")} role="document">
         <div className="modal-header">
            <button type="button" className="close"  onClick={()=>this.props.handleClose("End")}><span aria-hidden="true">×</span></button>
            <h4 className="modal-title">Instrucciones</h4>
         </div>
         <div className="modal-body">
           <h4>Para comprobar la contraseña pulsa intro o haz click en el botón de check. Tienes todos los intentos que necesites. los controles son muy sencillos:</h4>
           <div>
             explicación botones
           </div>
         </div>
      </div>
    );
  }
}
