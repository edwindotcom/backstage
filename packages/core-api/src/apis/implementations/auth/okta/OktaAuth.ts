/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import OktaIcon from '@material-ui/icons/AcUnit';
import { oktaAuthApiRef } from '../../../definitions/auth';
import {
  OAuthRequestApi,
  AuthProvider,
  DiscoveryApi,
} from '../../../definitions';
import { OAuth2 } from '../oauth2';

type CreateOptions = {
  discoveryApi: DiscoveryApi;
  oauthRequestApi: OAuthRequestApi;

  environment?: string;
  provider?: AuthProvider & { id: string };
};

const DEFAULT_PROVIDER = {
  id: 'okta',
  title: 'Okta',
  icon: OktaIcon,
};

const OKTA_OIDC_SCOPES: Set<String> = new Set([
  'openid',
  'profile',
  'email',
  'phone',
  'address',
  'groups',
  'offline_access',
]);

const OKTA_SCOPE_PREFIX: string = 'okta.';

class OktaAuth {
  static create({
    discoveryApi,
    environment = 'development',
    provider = DEFAULT_PROVIDER,
    oauthRequestApi,
  }: CreateOptions): typeof oktaAuthApiRef.T {
    return OAuth2.create({
      discoveryApi,
      oauthRequestApi,
      provider,
      environment,
      defaultScopes: ['openid', 'email', 'profile', 'offline_access'],
      scopeTransform(scopes) {
        return scopes.map(scope => {
          if (OKTA_OIDC_SCOPES.has(scope)) {
            return scope;
          }

          if (scope.startsWith(OKTA_SCOPE_PREFIX)) {
            return scope;
          }

          return `${OKTA_SCOPE_PREFIX}${scope}`;
        });
      },
    });
  }
}

export default OktaAuth;
