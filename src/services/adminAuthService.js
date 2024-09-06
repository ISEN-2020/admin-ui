import mockData from '../mockData.json';

const adminAuthService = {
  login: async (email, password) => {
    const admin = mockData.admins.find(admin => admin.email === email);

    if (admin && password === 'adminpassword') {
      return Promise.resolve({ token: 'adminToken', user: { email, role: 'admin' } });
    }

    return Promise.reject(new Error('Accès refusé. Identifiants administrateur incorrects.'));
  },

  register: async () => {
    return Promise.reject(new Error('L’inscription d’un nouvel administrateur est interdite.'));
  },
};

export default adminAuthService;
