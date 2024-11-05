export type AuthStackParamList = {
  Login: undefined;
  SmsVerification: {secret: string; identity: string};
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};
