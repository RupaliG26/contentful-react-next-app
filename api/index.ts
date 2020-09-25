import { createClient } from 'contentful';

const api = createClient({
  space: <string>process.env.REACT_NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: <string>process.env.REACT_NEXT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: <string>process.env.REACT_NEXT_APP_CONTENTFUL_ENVIRONMENT_ID
});

export default api;
