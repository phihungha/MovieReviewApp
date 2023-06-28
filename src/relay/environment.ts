import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';

const API_URL = 'https://cinerate-app.05052023.xyz/';

async function fetchQuery(operation: RequestParameters, variables: Variables) {
  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  const data = await resp.json();
  if (data.errors) {
    throw data.errors;
  }
  return data;
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;
