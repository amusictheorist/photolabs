import { useReducer, useEffect } from "react";

const initialState = {
  favoritedPhotos: [],
  displayModal: false,
  activePhoto: null,
  photoData: [],
  topicData: []
};

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  OPEN_MODAL_WITH_PHOTO: 'OPEN_MODAL_WITH_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS_DATA: 'SET_TOPICS_DATA'
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
      return { ...state, displayModal: !state.displayModal, };
    case "OPEN_MODAL_WITH_PHOTO":
      return { ...state, displayModal: true, activePhoto: action.photo, };
    case 'SET_PHOTO_DATA':
      return { ... state, photoData: action.payload };
    case 'SET_TOPICS_DATA':
      return { ...state, topicData: action.payload };
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

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: data }))
  }, []);

  return {
    toggleFavorite,
    toggleModal,
    openModalWithPhoto,
    favoritedPhotos: state.favoritedPhotos,
    activePhoto: state.activePhoto,
    displayModal: state.displayModal,
    photoData: state.photoData,
    topicData: state.topicData
  };
};

export default useApplicationData;
