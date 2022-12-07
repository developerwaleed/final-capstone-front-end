const useAlert = (message, title, type, setAlert) => {
  setAlert({
    message,
    title,
    type,
  });
  setTimeout(() => {
    setAlert(null);
  }, 3000);
};

export default useAlert;
