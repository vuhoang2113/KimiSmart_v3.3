import Repository from "../Repository";

const resource = "/about";

const aboutRepository = {
    fetchAll() {
        return Repository.get(`${resource}`);
    },

    postData(payload) {
        return Repository.post(`${resource}/social-link`, payload);
    },

    putData(id, payload) {
        return Repository.put(`${resource}/social-link/${id}`, payload);
    },

    updateList(payload) {
        return Repository.post(`${resource}/update-list`, payload);
    },

    deleteItem(id) {
        return Repository.delete(`${resource}/social-link/${id}`);
    },
};

export default aboutRepository;
