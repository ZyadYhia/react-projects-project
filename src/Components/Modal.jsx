import { useImperativeHandle, useRef, version } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
export default function Modal({ children, buttonCaption, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
