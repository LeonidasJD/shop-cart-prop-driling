import { forwardRef, useImperativeHandle, useRef,useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context';
import { createPortal } from 'react-dom';
import styled from "styled-components";

import Cart from './Cart';



const CartModal = forwardRef(function Modal(
  {  title, actions,removeBtnTitle },
  ref
) {

  const TitleWrapper = styled.div`
  display:flex;
  justify-content:space-between;

  button{
    background:#271e07;
    color:#f9efda;
    padding:0.5rem 1rem;
    border-radius:5px;
    font-size:1rem
  }
  button:hover{
    background-color:#382e1b;
    cursor:pointer;
  }
  `;

    
    const {removeAllCart,items} = useContext(CartContext);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
     <TitleWrapper>
      <h2>{title}</h2>
      { items.length > 0 ? <button onClick={removeAllCart}>{removeBtnTitle}</button> : null}
      </TitleWrapper>
      <Cart  />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
