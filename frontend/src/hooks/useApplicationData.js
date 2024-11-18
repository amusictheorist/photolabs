import { useReducer, useEffect } from "react";

const initialState = {
  favoritedPhotos: [],
  displayModal: false,
  activePhoto: null,
  photoData: [],
  topicData: [],
  topicId: 0,
  loading: true,
  error: null,
};

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  OPEN_MODAL_WITH_PHOTO: 'OPEN_MODAL_WITH_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS_DATA: 'SET_TOPICS_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.includes(action.photoId)
          ? state.favoritedPhotos.filter((id) => id !== action.photoId)
          : [...state.favoritedPhotos, action.photoId],
      };
    case ACTIONS.TOGGLE_MODAL:
      return { ...state, displayModal: !state.displayModal };
    case ACTIONS.OPEN_MODAL_WITH_PHOTO:
      return { ...state, displayModal: true, activePhoto: action.photo };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload, loading: false };
    case ACTIONS.SET_TOPICS_DATA:
      return { ...state, topicData: action.payload, loading: false };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload, loading: false };
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
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  }, []);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  };
  return {
    toggleFavorite,
    toggleModal,
    openModalWithPhoto,
    fetchPhotosByTopic,
    favoritedPhotos: state.favoritedPhotos,
    activePhoto: state.activePhoto,
    displayModal: state.displayModal,
    photoData: state.photoData,
    topicData: state.topicData,
    loading: state.loading,
    error: state.error,
  };
};

export default useApplicationData;
