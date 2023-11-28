import moment from 'moment';
import axios, {AxiosRequestConfig} from 'axios';
import {SheetManager} from 'react-native-actions-sheet';

import {store} from '@store/store';
import {UserStateProps} from '@common/types';
import {getEncryptedData} from '@common/utils';
import {attorneyExcludedUrls} from './envConstants';
import {sheetsArr} from '@common/sheets';

export const httpClient = axios.create();

let retryCount = 0;
const maxRetryCount = 3;
let refreshHttpClient = false;

httpClient.interceptors.request.use(config => {
  retryCount = 0;

  return defaultConfig(config);
});

httpClient.interceptors.response.use(
  async res => {
    const CancelToken = axios.CancelToken;

    return {
      ...res,
      cancelToken: new CancelToken(cancel => cancel('Cancel repeated request')),
    };
  },

  async function (err: any) {
    // Check if this request should be retried

    if (retryCount < maxRetryCount) {
      retryCount++;
      if (err.response) {
        if (
          err.response.status === 401 &&
          !refreshHttpClient &&
          retryCount === 3
        ) {
          refreshHttpClient = true;
          await sheetsArr.map(name => SheetManager.hide(name));
          await SheetManager.show('SessionExpiredSheet');
          // change to dispatch
          refreshHttpClient = false;
        }
      }

      return axios(err.config); // Retry the request
    }

    return Promise.reject(err);
  },
);
const getAuthToken = async userState => {
  return userState?.accessToken
    ? {Authorization: `Bearer ${userState?.accessToken}`}
    : {};
};

const defaultConfig = async (config: AxiosRequestConfig) => {
  const hideAttorny = attorneyExcludedUrls.some(url => url === config.url);
  const state = store.getState();
  let userState = await getEncryptedData('@userState');
  await checkForExpiration(userState, state);
  const attornyToken = !hideAttorny
    ? {'Attorney-Token': state?.user?.activeAttorney?.SessionId}
    : {};

  const authToken = await getAuthToken(userState);
  config.headers = {
    'Content-Type': 'application/json',
    'Accept-Language': 'en-US,en;q=0.9,ar-EG;q=0.8,ar;q=0.7',
    ...authToken,
    ...attornyToken,
  };

  return config;
};

const checkForExpiration = async (userState: UserStateProps, state: any) => {
  if (userState?.refreshToken) {
    if (
      moment
        .duration(
          moment(userState?.accessTokenExpirationDate).diff(
            moment(new Date().toISOString()),
          ),
        )
        .asMinutes() < 1 &&
      moment
        .duration(
          moment(userState?.accessTokenExpirationDate).diff(
            moment(new Date().toISOString()),
          ),
        )
        .asMinutes() > 0
    ) {
      await sheetsArr.map(name => SheetManager.hide(name));
      SheetManager.show('RefreshUserToken');
    }
  }
  if (
    moment
      .duration(
        moment(userState?.accessTokenExpirationDate).diff(
          moment(new Date().toISOString()),
        ),
      )
      .asMinutes() < 0 &&
    state.user.userState.accessTokenExpirationDate
  ) {
    await sheetsArr.map(name => SheetManager.hide(name));
    await SheetManager.show('SessionExpiredSheet');
  }
};
