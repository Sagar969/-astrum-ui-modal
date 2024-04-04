import React from 'react';
import {
  CSSProperties,
  ComponentType,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import componentStyles from './css/Modal.module.css';
import animations from './css/ModalAnimations.module.css';

type StylesType = {
  modal?: CSSProperties;
  overlay?: CSSProperties;
  closeButton?: CSSProperties;
};

type classNamesType = {
  modal?: string;
  overlay?: string;
  closeButton?: string;
};

type PropsType = {
  children?: ReactNode;
  show?: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
  styles?: StylesType;
  classNames?: classNamesType;
  overlayOpacity?: number;
  closeButtonVariant?: number;
  CustomCloseButton?: ComponentType<any> | null;
  animateIn?: string;
  animateOut?: string;
  animateDuration?: number;
  onOpen?: () => void;
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onClose?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
};

type AnimationObject = {
  in: string[];
  out: string[];
  init: string[];
};

export const Modal = ({
  children,
  show = false,
  setShow = () => {},
  styles = {},
  classNames = {},
  overlayOpacity = 0.3,
  closeButtonVariant = 1,
  CustomCloseButton = null,
  animateIn = 'fadeIn-down',
  animateOut = '',
  animateDuration = 300,
  onOpen = () => {},
  onOpenStart = () => {},
  onOpenEnd = () => {},
  onClose = () => {},
  onCloseStart = () => {},
  onCloseEnd = () => {},
}: PropsType) => {
  const renderedYet = useRef<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [isModal, setIsModal] = useState<boolean>(false);
  const animation = useMemo<AnimationObject>(getAnimation, [
    animateIn,
    animateOut,
  ]);

  // Get animation styles
  function getAnimation() {
    const ins = animateIn.split('-');
    const outs = animateOut
      ? animateOut.split('-')
      : initialPositions[animateIn]?.split('-');
    const inits = initialPositions[animateIn]?.split('-');

    return {
      in: ins?.map((cls: string) => animations[cls]) || [],
      out: outs?.map((cls: string) => animations[cls]) || [],
      init: inits?.map((cls: string) => animations[cls]) || [],
    };
  }

  // set styles on rendering modal
  const setInitialStyles = () => {
    if (!modalRef.current || !overlayRef.current) return;
    modalRef.current.style.transitionDuration = 0 + 'ms';
    modalRef.current.classList.remove(...[...animation.in, ...animation.out]);
    modalRef.current.classList.add(...animation.init);
    modalRef.current.style.transitionDuration = animateDuration + 'ms';
    overlayRef.current.style.opacity = '0';
  };

  // animation on close
  const setFinalStyles = () => {
    if (!modalRef.current || !overlayRef.current) return;
    modalRef.current.classList.remove(...animation.in);
    modalRef.current.classList.add(...animation.out);
    overlayRef.current.style.opacity = '0';
  };

  // closes the modal
  const handleClose = () => {
    onCloseStart();
    setFinalStyles();
    setTimeout(() => {
      onClose();
      setIsModal(false);
    }, animateDuration);
  };

  // opens the modal with animation
  const handleOpen = () => {
    if (!modalRef.current || !overlayRef.current) return;
    modalRef.current.classList.remove(...animation.init);
    modalRef.current.classList.add(...animation.in);
    overlayRef.current.style.opacity = overlayOpacity + '';
    onOpen();
    setTimeout(() => {
      onOpenEnd();
    }, animateDuration);
  };

  useEffect(() => {
    if (show) {
      setIsModal(true);
      renderedYet.current = true;
    } else if (renderedYet.current) handleClose();
  }, [show]);

  useEffect(() => {
    let timeoutId: number;
    if (isModal) {
      onOpenStart();
      setInitialStyles();
      timeoutId = setTimeout(() => {
        handleOpen();
      }, 20);
    } else if (renderedYet.current) onCloseEnd();

    return () => clearTimeout(timeoutId);
  }, [isModal]);

  return (
    isModal && (
      <>
        <div
          ref={overlayRef}
          className={componentStyles.overlay + ' ' + classNames?.overlay}
          onClick={() => setShow(false)}
          style={{
            transitionDuration: animateDuration + 'ms',
            ...(styles?.overlay && styles.overlay),
          }}
        ></div>
        <div
          ref={modalRef}
          className={componentStyles.modal + ' ' + classNames?.modal}
          style={{
            transitionDuration: animateDuration + 'ms',
            ...(styles?.modal && styles.modal),
          }}
        >
          {CustomCloseButton ? (
            <CustomCloseButton />
          ) : (
            <button
              className={
                (closeButtonVariant <= 1
                  ? componentStyles.closeButtonVariant1
                  : componentStyles.closeButtonVariant2) +
                ' ' +
                componentStyles.closeButton +
                ' ' +
                classNames?.closeButton
              }
              style={{ ...(styles?.closeButton && styles.closeButton) }}
              onClick={() => setShow(false)}
            >
              <div>
                <div></div>
                <div></div>
              </div>
            </button>
          )}
          {children}
        </div>
      </>
    )
  );
};

const initialPositions: Record<string, string> = {
  fadeIn: 'fadeOut',
  'fadeIn-down': 'fadeOut-up',
  'fadeIn-up': 'fadeOut-down',
  'fadeIn-left': 'fadeOut-left',
  'fadeIn-right': 'fadeOut-right',
  zoomIn: 'zoomOut',
  'zoomIn-up': 'zoomOut-down',
  'zoomIn-down': 'zoomOut-up',
  'zoomIn-left': 'zoomOut-left',
  'zoomIn-right': 'zoomOut-right',
  'slideIn-up': 'slideOut-down',
  'slideIn-down': 'slideOut-up',
  'slideIn-left': 'slideOut-left',
  'slideIn-right': 'slideOut-right',
};
