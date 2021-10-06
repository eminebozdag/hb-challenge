import React from 'react';
import './modal.css';

const Modal = () => {
   return (
      <div data-testid="modal" className="modal">
         <div className="modal__content">
            <div className="modal__content__question">
               <p>
                  <b>Ürünü silmek istediğinize emin misiniz?</b>
               </p>
            </div>
            <hr />
            <div className="modal__content__info">
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
               </p>
            </div>
            <div className="modal__content__button">
               <div className="accept">
                  <p>
                     <b>EVET</b>
                  </p>
               </div>
               <div className="reject">
                  <p>
                     <b>HAYIR</b>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Modal;
