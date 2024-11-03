import { useReducer } from "react";

const initialState = {
  favoritedPhotos: [],
  displayModal: false,
  activePhoto: null,
};

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  OPEN_MODAL_WITH_PHOTO: 'OPEN_MODAL_WITH_PHOTO'
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.includes(action.photoId)
          ? state.favoritedPhotos.filter((id) => id !== action.photoId)
          : [...state.favoritedPhotos, action.photoId],
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        displayModal: !state.displayModal,
      };
    case "OPEN_MODAL_WITH_PHOTO":
      return {
        ...state,
        displayModal: true,
        activePhoto: action.photo,
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, photoId });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL_WITH_PHOTO, photo });
  };

  return {
    toggleFavorite,
    toggleModal,
    openModalWithPhoto,
    favoritedPhotos: state.favoritedPhotos,
    activePhoto: state.activePhoto,
    displayModal: state.displayModal,
  };
};

export default useApplicationData;
