import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl,
    env: {
      userName: process.env.CYPRESS_userName,
      password: process.env.CYPRESS_password,
      login: process.env.CYPRESS_login,
      passwordConfirmation: process.env.CYPRESS_passwordConfirmation,
      firstName: process.env.CYPRESS_firstName,
      lastName: process.env.CYPRESS_lastName,
      mail: process.env.CYPRESS_mail,
      newPassword: process.env.CYPRESS_newPassword,
      newPasswordConfirmation: process.env.CYPRESS_newPasswordConfirmation,
    },
    setupNodeEvents(on, config) {},
  },
});

