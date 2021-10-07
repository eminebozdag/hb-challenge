import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../../../../../../store/actions/basketActions';
import { dispatchRemoveFromBasketModal } from '../../../../../../store/actions/globalActions';
import './remove-basket-item-modal.css';

const RemoveBasketItemModal = () => {
   const dispatch = useDispatch();
   const { removeFromBasketProductId } = useSelector((state: any) => state.globalStore);

   const handleYes = () => {
      dispatch(removeFromBasket(removeFromBasketProductId));
      dispatch(dispatchRemoveFromBasketModal(false));
   };

   const handleNo = () => {
      dispatch(dispatchRemoveFromBasketModal(false));
   };

   return (
      <div data-testid="modal" className="remove-basket-item-modal">
         <div className="remove-basket-item-modal__content">
            <div className="remove-basket-item-modal__content__question">
               <p>
                  <b>Ürünü silmek istediğinize emin misiniz?</b>
               </p>
            </div>
            <hr />
            <div className="remove-basket-item-modal__content__info">
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
               </p>
            </div>
            <div className="remove-basket-item-modal__content__button">
               <div className="accept" onClick={handleYes}>
                  <p>
                     <b>EVET</b>
                  </p>
               </div>
               <div className="reject" onClick={handleNo}>
                  <p>
                     <b>HAYIR</b>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
export default RemoveBasketItemModal;
