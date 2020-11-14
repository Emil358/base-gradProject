import Unsplash from 'unsplash-js';

export const getAuthUrl = () => {
  const unsplash = new Unsplash({
    accessKey: 'HmESHW-LSmwiDl4Gs3MOm-Qlksijb1XVrTIN4W7nJCc',
    secret: 'wMv3YV1LWZtyzVo46q63L_yBS2GN-Ceqa7OP6WZYgOs',
    callbackUrl: 'http://faiz-emil.ru/auth'
  })

  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
  ]);

  return authenticationUrl;
}
