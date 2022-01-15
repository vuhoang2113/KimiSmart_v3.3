const LocalStorageService = {
    setToken: (token) => {
        return localStorage.setItem("token", token);
    },
    getToken: () => {
        return localStorage.getItem("token");
    },
    deleteToken: () => {
        localStorage.removeItem("token");
    },
    deletePersistAuth: () => {
        localStorage.removeItem("persist:auth");
    },
    deletePersistProfile: () => {
        localStorage.removeItem("persist:profile");
    },
};

export default LocalStorageService;
