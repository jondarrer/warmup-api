import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Json */
  Json: { input: any; output: any };
};

export type AccessDay = {
  __typename?: 'AccessDay';
  /** counterCreated of AccessDay */
  counterCreated?: Maybe<Scalars['Int']['output']>;
  /** devicesActive of AccessDay */
  devicesActive?: Maybe<Scalars['String']['output']>;
  /** pTimeAverage of AccessDay */
  pTimeAverage?: Maybe<Scalars['String']['output']>;
};

export type Address = {
  __typename?: 'Address';
  /** address1 of Address */
  address1?: Maybe<Scalars['String']['output']>;
  /** address2 of Address */
  address2?: Maybe<Scalars['String']['output']>;
  /** countryCode of Address */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** currency of Address */
  currency?: Maybe<Scalars['Int']['output']>;
  /** owmCityId of Address */
  owmCityId?: Maybe<Scalars['Int']['output']>;
  /** postcode of Address */
  postcode?: Maybe<Scalars['String']['output']>;
  /** timezone of Address (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) */
  timezone?: Maybe<Scalars['String']['output']>;
  /** town of Address */
  town?: Maybe<Scalars['String']['output']>;
};

export type AggregateMobile = {
  __typename?: 'AggregateMobile';
  /** appId of MobileDevice */
  appId?: Maybe<Scalars['String']['output']>;
  /** geoMode of AggregateMobile */
  geoMode?: Maybe<GeoMode>;
  /** geoMode of AggregateMobile */
  geoModeInt?: Maybe<Scalars['Int']['output']>;
  /** id of MobileDevice */
  id?: Maybe<Scalars['Int']['output']>;
  /** is this the current mobile */
  isCurrent?: Maybe<Scalars['Boolean']['output']>;
  /** Is mobile moving towards location? */
  isHoming?: Maybe<Scalars['Boolean']['output']>;
  /** locationId of AggregateMobile */
  locationId?: Maybe<Scalars['Int']['output']>;
  /** name of MobileDevice */
  name?: Maybe<Scalars['String']['output']>;
  /** partner of MobileDevice */
  partner?: Maybe<Scalars['String']['output']>;
  /** protocol of MobileDevice */
  protocol?: Maybe<Scalars['String']['output']>;
  /** source of MobileDevice */
  source?: Maybe<Scalars['String']['output']>;
  /** userId of MobileDevice */
  userId?: Maybe<Scalars['Int']['output']>;
  /** zone of AggregateMobile */
  zone?: Maybe<Scalars['Int']['output']>;
  /** updated at */
  zoneUpdated?: Maybe<Scalars['String']['output']>;
};

export type AppFeedbackEntity = {
  __typename?: 'AppFeedbackEntity';
  /** brand of AppFeedbackEntity */
  brand?: Maybe<Brand>;
  /** clientId of AppFeedbackEntity */
  clientId?: Maybe<ClientId>;
  /** created of AppFeedbackEntity */
  created?: Maybe<Scalars['String']['output']>;
  /** feedback of AppFeedbackEntity */
  feedback?: Maybe<Scalars['String']['output']>;
  /** language of AppFeedbackEntity */
  language?: Maybe<Scalars['String']['output']>;
  /** mobileId of AppFeedbackEntity */
  mobileId?: Maybe<Scalars['Int']['output']>;
  /** operatingDevice of AppFeedbackEntity */
  operatingDevice?: Maybe<Scalars['String']['output']>;
  /** operatingSystem of AppFeedbackEntity */
  operatingSystem?: Maybe<Scalars['String']['output']>;
  /** rating of AppFeedbackEntity */
  rating?: Maybe<Scalars['String']['output']>;
  /** Get user */
  user?: Maybe<RestrictedUser>;
  /** userId of AppFeedbackEntity */
  userId?: Maybe<Scalars['Int']['output']>;
  /** compact version  */
  version?: Maybe<Scalars['String']['output']>;
  /** version of AppFeedbackEntity */
  versionObject?: Maybe<AppVersion>;
};

export type AppVersion = {
  __typename?: 'AppVersion';
  /** maintenance of AppVersion */
  maintenance?: Maybe<Scalars['String']['output']>;
  /** major of AppVersion */
  major?: Maybe<Scalars['String']['output']>;
  /** minor of AppVersion */
  minor?: Maybe<Scalars['String']['output']>;
};

export enum AudienceType {
  /** DEVICE_ACCESS */
  DeviceAccess = 'device_access',
}

export type AutoProperties = {
  __typename?: 'AutoProperties';
  /** createdAt of AutoProperties */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** 0 <= frequencyInMonths <= 12 of AutoProperties */
  frequencyInMonths?: Maybe<Scalars['Int']['output']>;
  /** isEnabled of AutoProperties */
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** 0 <= minimumSavings of AutoProperties */
  minimumSavings?: Maybe<Scalars['Int']['output']>;
  /** Get user */
  user?: Maybe<RestrictedUser>;
  /** userId of AutoProperties */
  userId?: Maybe<Scalars['Int']['output']>;
};

export enum Brand {
  /** EQUUS */
  Equus = 'equus',
  /** LATICRETE */
  Laticrete = 'laticrete',
  /** OTHER */
  Other = 'other',
  /** PORCELANOSA */
  Porcelanosa = 'porcelanosa',
  /** ROINTE */
  Rointe = 'rointe',
  /** SAVANT */
  Savant = 'savant',
  /** WARMUP */
  Warmup = 'warmup',
}

export enum BrandInput {
  /** ALL */
  All = 'all',
  /** EQUUS */
  Equus = 'equus',
  /** INHERITED */
  Inherited = 'inherited',
  /** LATICRETE */
  Laticrete = 'laticrete',
  /** OTHER */
  Other = 'other',
  /** PORCELANOSA */
  Porcelanosa = 'porcelanosa',
  /** ROINTE */
  Rointe = 'rointe',
  /** SAVANT */
  Savant = 'savant',
  /** WARMUP */
  Warmup = 'warmup',
}

export enum ClientId {
  /** AMAZON_ALEXA_WARMUP */
  AmazonAlexaWarmup = 'amazon_alexa_warmup',
  /** APIQL */
  Apiql = 'apiql',
  /** CONTROL4 */
  Control4 = 'control4',
  /** EASY_SWITCH */
  EasySwitch = 'easy_switch',
  /** EQUUS */
  Equus = 'equus',
  /** GOOGLE */
  Google = 'google',
  /** GRAPHIQL */
  Graphiql = 'graphiql',
  /** IFTTT_WARMUP */
  IftttWarmup = 'ifttt_warmup',
  /** LATICRETE */
  Laticrete = 'laticrete',
  /** LIGHTWAVE */
  Lightwave = 'lightwave',
  /** LIGHTWAVE_TEST */
  LightwaveTest = 'lightwave_test',
  /** PASSWORD */
  Password = 'password',
  /** PORCELANOSA */
  Porcelanosa = 'porcelanosa',
  /** PRIVATE */
  Private = 'private',
  /** ROINTE */
  Rointe = 'rointe',
  /** SAVANT */
  Savant = 'savant',
  /** WARMUP */
  Warmup = 'warmup',
}

export enum Currency4iE {
  /** DOLLAR */
  Dollar = 'dollar',
  /** EURO */
  Euro = 'euro',
  /** KRONE */
  Krone = 'krone',
  /** KUNA */
  Kuna = 'kuna',
  /** POUND */
  Pound = 'pound',
  /** YEN_YUAN */
  YenYuan = 'yen_yuan',
  /** ZLOTY */
  Zloty = 'zloty',
}

/** Dashboard statistics */
export type DashboardStats = {
  __typename?: 'DashboardStats';
  /** access Day Stats */
  accessDay?: Maybe<Array<Maybe<AccessDay>>>;
  /** device firmware versions */
  appFw?: Maybe<Scalars['Json']['output']>;
  /** device statistics */
  deviceStats?: Maybe<Scalars['Json']['output']>;
  /** Elastic Load Balancer Statistics */
  elbStats?: Maybe<Scalars['Json']['output']>;
  /** general statistic */
  general?: Maybe<GeneralStatistic>;
  /** system types */
  systemTypes?: Maybe<Scalars['Json']['output']>;
  /** user statistics */
  userStats?: Maybe<Scalars['Json']['output']>;
};

/** Dashboard statistics */
export type DashboardStatsAccessDayArgs = {
  brand?: InputMaybe<BrandInput>;
};

/** Dashboard statistics */
export type DashboardStatsAppFwArgs = {
  brand?: InputMaybe<BrandInput>;
};

/** Dashboard statistics */
export type DashboardStatsDeviceStatsArgs = {
  brand?: InputMaybe<BrandInput>;
};

/** Dashboard statistics */
export type DashboardStatsGeneralArgs = {
  brand?: InputMaybe<BrandInput>;
};

/** Dashboard statistics */
export type DashboardStatsSystemTypesArgs = {
  brand?: InputMaybe<BrandInput>;
};

/** Dashboard statistics */
export type DashboardStatsUserStatsArgs = {
  brand?: InputMaybe<BrandInput>;
};

export type DeviceAccessStatistic = {
  __typename?: 'DeviceAccessStatistic';
  /** createdUnix of DeviceAccessStatistic */
  createdUnix?: Maybe<Scalars['String']['output']>;
  /** dayOfYear of DeviceAccessStatistic */
  dayOfYear?: Maybe<Scalars['String']['output']>;
  /** deviceSN of DeviceAccessStatistic */
  deviceSN?: Maybe<Scalars['String']['output']>;
  /** polls of DeviceAccessStatistic */
  polls?: Maybe<Scalars['String']['output']>;
  /** responseNotSuccess of DeviceAccessStatistic */
  responseNotSuccess?: Maybe<Scalars['String']['output']>;
  /** responseSuccess of DeviceAccessStatistic */
  responseSuccess?: Maybe<Scalars['String']['output']>;
  /** year of DeviceAccessStatistic */
  year?: Maybe<Scalars['String']['output']>;
};

export type DeviceShortLog = {
  __typename?: 'DeviceShortLog';
  /** created of DeviceShortLog */
  created?: Maybe<Scalars['String']['output']>;
  /** processTime of DeviceShortLog */
  processTime?: Maybe<Scalars['String']['output']>;
  /** request of DeviceShortLog */
  request?: Maybe<Scalars['Json']['output']>;
  /** response of DeviceShortLog */
  response?: Maybe<Scalars['Json']['output']>;
  /** statusCode of DeviceShortLog */
  statusCode?: Maybe<Scalars['String']['output']>;
};

export enum DeviceType {
  /** D4IE */
  D4ie = 'd4ie',
  /** D6IE */
  D6ie = 'd6ie',
  /** DRSW */
  Drsw = 'drsw',
  /** DSTR fake type DO NOT use it! */
  Dstr = 'dstr',
  /** RSW */
  Rsw = 'rsw',
}

export enum DisplayedProbe {
  /** AMB */
  Amb = 'amb',
  /** FLOOR */
  Floor = 'floor',
}

export type EmailRecordEntity = {
  __typename?: 'EmailRecordEntity';
  /** brand of EmailRecordEntity */
  brand?: Maybe<Brand>;
  /** content of EmailRecordEntity */
  content?: Maybe<Scalars['String']['output']>;
  /** createdAt of EmailRecordEntity */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** emailType of EmailRecordEntity */
  emailType?: Maybe<EmailType>;
  /** headers of EmailRecordEntity */
  headers?: Maybe<Scalars['String']['output']>;
  /** id of EmailRecordEntity */
  id?: Maybe<Scalars['Int']['output']>;
  /** Get owner */
  owner?: Maybe<RestrictedUser>;
  /** recipient of EmailRecordEntity */
  recipient?: Maybe<Scalars['String']['output']>;
  /** returnedBody of EmailRecordEntity */
  returnedBody?: Maybe<Scalars['String']['output']>;
  /** statusCode of EmailRecordEntity */
  statusCode?: Maybe<Scalars['String']['output']>;
  /** subject of EmailRecordEntity */
  subject?: Maybe<Scalars['String']['output']>;
  /** userId of EmailRecordEntity */
  userId?: Maybe<Scalars['Int']['output']>;
};

export enum EmailType {
  /** ACCOUNT_RECOVERY */
  AccountRecovery = 'account_recovery',
  /** CHANGE_EMAIL */
  ChangeEmail = 'change_email',
  /** FORGOTTEN_PASSWORD */
  ForgottenPassword = 'forgotten_password',
  /** FORGOTTEN_PASSWORD_SWITCH */
  ForgottenPasswordSwitch = 'forgotten_password_switch',
  /** INVITE_SHARE_LOCATION */
  InviteShareLocation = 'invite_share_location',
  /** REGISTER */
  Register = 'register',
  /** REGISTER_SWITCH */
  RegisterSwitch = 'register_switch',
  /** REMOVE_SHARE_LOCATION */
  RemoveShareLocation = 'remove_share_location',
  /** TEST */
  Test = 'test',
}

export enum EnabledState {
  /** ANDROID */
  Android = 'android',
  /** BOTH */
  Both = 'both',
  /** I_OS */
  IOs = 'i_os',
  /** NONE */
  None = 'none',
}

export type Expire = {
  __typename?: 'Expire';
  /** expiresAt of Expire */
  expiresAt?: Maybe<Scalars['String']['output']>;
  /** isExpired of Expire */
  isExpired?: Maybe<Scalars['Boolean']['output']>;
};

export enum ExternalTerminalFunction {
  /** MASTER_CONTROL */
  MasterControl = 'master_control',
  /** NO_FUNCTION */
  NoFunction = 'no_function',
  /** OVERHEAT_SENSOR */
  OverheatSensor = 'overheat_sensor',
  /** RELAY_DEVICE */
  RelayDevice = 'relay_device',
}

export type Fence = {
  __typename?: 'Fence';
  /** offset of Fence */
  offset?: Maybe<Scalars['String']['output']>;
  /** time of Fence */
  time?: Maybe<Scalars['String']['output']>;
};

export enum FloorSensorType {
  /** NONE */
  None = 'none',
  /** W10K */
  W10k = 'w10k',
  /** W12K */
  W12k = 'w12k',
  /** W15K */
  W15k = 'w15k',
}

export enum FloorType {
  /** CARPET */
  Carpet = 'carpet',
  /** LAMINATE */
  Laminate = 'laminate',
  /** TILE_STONE */
  TileStone = 'tile_stone',
  /** USER_DEFINED */
  UserDefined = 'user_defined',
  /** VINYL */
  Vinyl = 'vinyl',
  /** WOOD */
  Wood = 'wood',
}

export type GeneralStatistic = {
  __typename?: 'GeneralStatistic';
  /** appFws of GeneralStatistic */
  appFws?: Maybe<Scalars['String']['output']>;
  /** cities of GeneralStatistic */
  cities?: Maybe<Scalars['String']['output']>;
  /** countryCodes of GeneralStatistic */
  countryCodes?: Maybe<Scalars['String']['output']>;
  /** passwordSet of GeneralStatistic */
  passwordSet?: Maybe<Scalars['String']['output']>;
  /** registered of GeneralStatistic */
  registered?: Maybe<Scalars['String']['output']>;
  /** registeredToday of GeneralStatistic */
  registeredToday?: Maybe<Scalars['String']['output']>;
  /** timezones of GeneralStatistic */
  timezones?: Maybe<Scalars['String']['output']>;
  /** updatedToday of GeneralStatistic */
  updatedToday?: Maybe<Scalars['String']['output']>;
  /** urls of GeneralStatistic */
  urls?: Maybe<Scalars['String']['output']>;
  /** users of GeneralStatistic */
  users?: Maybe<Scalars['String']['output']>;
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  /** latitude of GeoLocation */
  latitude?: Maybe<Scalars['String']['output']>;
  /** longitude of GeoLocation */
  longitude?: Maybe<Scalars['String']['output']>;
};

export enum GeoMode {
  /** DISABLED */
  NotUsed = 'not_used',
  /** INVISIBLE */
  UsedInvisible = 'used_invisible',
  /** ENABLED */
  UsedVisible = 'used_visible',
}

/** Warmup GraphQl mutation */
export type HeatingMutation = {
  __typename?: 'HeatingMutation';
  /** Alexa AcceptGrant endpoint! */
  acceptGrant?: Maybe<Scalars['Json']['output']>;
  /** Add device */
  addDevice?: Maybe<Room>;
  /** Add Alexa Endpoints */
  addEndpoints?: Maybe<Scalars['Boolean']['output']>;
  /** create feedback */
  addFeedback?: Maybe<Scalars['Boolean']['output']>;
  /** Creating a new location! */
  addLocation?: Maybe<Location>;
  /** Support - create note for user */
  addNote?: Maybe<NoteEntity>;
  /** add the initiated switch attributes */
  addSwitch?: Maybe<SwitchSnapshot>;
  /** update switch plan */
  addSwitchPlan?: Maybe<Scalars['Json']['output']>;
  /** Creating a new user requires an elevated permission! */
  addUser?: Maybe<User>;
  /** (admin) delete/un-share location! */
  adminDeleteLocation?: Maybe<Scalars['Boolean']['output']>;
  /** (admin) Device delete  */
  adminDeviceDelete?: Maybe<Scalars['Boolean']['output']>;
  /** update parameters (admin) */
  adminFields?: Maybe<Room>;
  /** update firmware (admin) */
  adminFirmware?: Maybe<Scalars['Boolean']['output']>;
  /** cancel all rooms override */
  cancelAllOverrides?: Maybe<Scalars['Boolean']['output']>;
  /** Cancel holiday on location and all devices */
  cancelHoliday?: Maybe<Scalars['Boolean']['output']>;
  /** cancel Override */
  cancelOverride?: Maybe<Room>;
  /** cancel switch */
  cancelSwitch?: Maybe<User>;
  /** change email */
  changeEmail?: Maybe<Scalars['Boolean']['output']>;
  /** change password */
  changePassword?: Maybe<User>;
  /** Validate a device to prepare for provision */
  createShadow?: Maybe<Scalars['Boolean']['output']>;
  /** Remove thermostat */
  deleteDevice?: Maybe<Scalars['Boolean']['output']>;
  /** Delete location! */
  deleteLocation?: Maybe<Scalars['Boolean']['output']>;
  /** Delta room temperature(signed) */
  deltaTemperature?: Maybe<Thermostat4iE>;
  /** Modify thermostat */
  deviceAdvanced?: Maybe<Room>;
  /** Set fixed mode on thermostat */
  deviceFixed?: Maybe<Scalars['Boolean']['output']>;
  /** Set frost mode on thermostat */
  deviceFrost?: Maybe<Scalars['Boolean']['output']>;
  /** Set holiday mode on location and all devices */
  deviceHoliday?: Maybe<Scalars['Boolean']['output']>;
  /** Turn off thermostat */
  deviceOff?: Maybe<Scalars['Boolean']['output']>;
  /** Set fixed mode on thermostat */
  deviceOverride?: Maybe<Scalars['Boolean']['output']>;
  /** Set program mode on thermostat */
  deviceProgram?: Maybe<Scalars['Boolean']['output']>;
  /** (support) Trigger proxy device reload  */
  deviceReLoad?: Maybe<Scalars['Int']['output']>;
  /** set schedule on specified device */
  deviceSchedule?: Maybe<Room>;
  /** unsubscribe to beta with device */
  disableBeta?: Maybe<Scalars['Int']['output']>;
  /** Increment or register mobile notice! return count of dismiss. */
  dismissNotice?: Maybe<Scalars['Int']['output']>;
  /** subscribe to beta with device */
  enableBeta?: Maybe<Scalars['Int']['output']>;
  /** Validate a device to prepare for provision */
  fwShadow?: Maybe<Scalars['String']['output']>;
  /** Validate a device to prepare for provision */
  gen2Cvm?: Maybe<Scalars['Json']['output']>;
  /** Validate a device to prepare for provision */
  initShadow?: Maybe<Scalars['Boolean']['output']>;
  /** Modify location! */
  locationAdvanced?: Maybe<Location>;
  /** Update user's lastLogin field */
  portalLogin?: Maybe<Scalars['Boolean']['output']>;
  /** remove invited guest */
  removeGuestShare?: Maybe<Scalars['Boolean']['output']>;
  /** Remove user from the system! */
  removeMe?: Maybe<Scalars['Boolean']['output']>;
  /** Delete location! */
  removeMobile?: Maybe<Scalars['Boolean']['output']>;
  /** remove active location shares */
  removeMyShare?: Maybe<Scalars['Boolean']['output']>;
  /** reset mobile name */
  resetMobileName?: Maybe<Scalars['Boolean']['output']>;
  /** Send validation pin to the logged in user mobile */
  sendSmsPin?: Maybe<Scalars['Boolean']['output']>;
  /** set auto switch preferences */
  setAutoPreferences?: Maybe<AutoProperties>;
  /** set comfort temperature */
  setComfortTemp?: Maybe<Room>;
  /** Set geo state */
  setGeo?: Maybe<Scalars['Boolean']['output']>;
  /** Set Firebase Message Cloud token. Returns token Id or 0 if it already exists */
  setMessageCloudToken?: Maybe<Scalars['Int']['output']>;
  /** set room mode */
  setRoomMode?: Maybe<Room>;
  /** Set room temperature */
  setTemperature?: Maybe<Thermostat4iE>;
  /** Delete location! */
  setZones?: Maybe<Scalars['Boolean']['output']>;
  /** share location */
  shareLocation?: Maybe<Array<Maybe<InviteLocationConfirmationEntity>>>;
  /** Turn room off (frost) */
  turnOff?: Maybe<Room>;
  /** Turn room on */
  turnOn?: Maybe<Room>;
  /** update user profile */
  updateProfile?: Maybe<User>;
  /** update sleep parameters */
  updateSleep?: Maybe<Room>;
  /** update switch report state */
  updateSwitchReport?: Maybe<User>;
  /** upgrade latest firmware */
  upgradeLatestFw?: Maybe<Scalars['Boolean']['output']>;
  /** Validate a device to prepare for provision */
  upgradeShadow?: Maybe<Scalars['Boolean']['output']>;
  /** Validate sms pin with the latest sms record */
  validatePin?: Maybe<Scalars['Boolean']['output']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAcceptGrantArgs = {
  code: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddDeviceArgs = {
  floorType: FloorType;
  lid: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  powerSource: PowerSource;
  roomType: RoomType;
  serial: Scalars['String']['input'];
  systemPower: Scalars['Int']['input'];
  systemType: SystemType;
  type?: InputMaybe<DeviceType>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddEndpointsArgs = {
  eps: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddFeedbackArgs = {
  feedback?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  operatingDevice?: InputMaybe<Scalars['String']['input']>;
  operatingSystem?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddLocationArgs = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Currency4iE>;
  elecHighCost?: InputMaybe<Scalars['String']['input']>;
  elecLowCost?: InputMaybe<Scalars['String']['input']>;
  elecLowEnd?: InputMaybe<Scalars['String']['input']>;
  elecLowStart?: InputMaybe<Scalars['String']['input']>;
  gasHighCost?: InputMaybe<Scalars['String']['input']>;
  gasLowCost?: InputMaybe<Scalars['String']['input']>;
  gasLowEnd?: InputMaybe<Scalars['String']['input']>;
  gasLowStart?: InputMaybe<Scalars['String']['input']>;
  isFahrenheit?: InputMaybe<Scalars['Boolean']['input']>;
  lat: Scalars['String']['input'];
  long: Scalars['String']['input'];
  name: Scalars['String']['input'];
  postcode?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  town?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddNoteArgs = {
  customer?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddSwitchArgs = {
  savings?: InputMaybe<Scalars['String']['input']>;
  supplierId?: InputMaybe<Scalars['Int']['input']>;
  supplierLogo?: InputMaybe<Scalars['String']['input']>;
  supplierName?: InputMaybe<Scalars['String']['input']>;
  switchId?: InputMaybe<Scalars['Int']['input']>;
  tariffId?: InputMaybe<Scalars['Int']['input']>;
  tariffName?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddSwitchPlanArgs = {
  plan?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAddUserArgs = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<SupportedLanguage>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAdminDeleteLocationArgs = {
  lid: Scalars['Int']['input'];
  uid: Scalars['Int']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationAdminDeviceDeleteArgs = {
  lid: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAdminFieldsArgs = {
  fields?: InputMaybe<Scalars['String']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
  sn?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationAdminFirmwareArgs = {
  fw?: InputMaybe<Scalars['String']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
  sn?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationCancelAllOverridesArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationCancelHolidayArgs = {
  lid: Scalars['Int']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationCancelOverrideArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationCancelSwitchArgs = {
  switchId?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationChangeEmailArgs = {
  currentEmail?: InputMaybe<Scalars['String']['input']>;
  newEmail?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationChangePasswordArgs = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationCreateShadowArgs = {
  serial: Scalars['String']['input'];
  token: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeleteDeviceArgs = {
  lid: Scalars['Int']['input'];
  rid: Scalars['Int']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeleteLocationArgs = {
  lid: Scalars['Int']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeltaTemperatureArgs = {
  delta?: InputMaybe<Scalars['Int']['input']>;
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceAdvancedArgs = {
  audioOn?: InputMaybe<Scalars['Boolean']['input']>;
  background?: InputMaybe<HomeBackground>;
  brightness?: InputMaybe<Scalars['Int']['input']>;
  brightnessStandby?: InputMaybe<Scalars['Int']['input']>;
  earlyStart?: InputMaybe<Scalars['Boolean']['input']>;
  externalProbe?: InputMaybe<FloorSensorType>;
  externalType?: InputMaybe<ExternalTerminalFunction>;
  floorProbe?: InputMaybe<FloorSensorType>;
  floorType?: InputMaybe<FloorType>;
  heatingTarget?: InputMaybe<HeatingTarget>;
  language?: InputMaybe<Language>;
  lid: Scalars['Int']['input'];
  lock?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newLocationId?: InputMaybe<Scalars['Int']['input']>;
  offsetAir?: InputMaybe<Scalars['Int']['input']>;
  offsetFloor1?: InputMaybe<Scalars['Int']['input']>;
  offsetFloor2?: InputMaybe<Scalars['Int']['input']>;
  powerSource?: InputMaybe<PowerSource>;
  probeApp?: InputMaybe<DisplayedProbe>;
  regulator?: InputMaybe<RegulatorType>;
  rid?: InputMaybe<Scalars['Int']['input']>;
  setback?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<HomeStyle>;
  timeFormat?: InputMaybe<ThermostatTimeFormat>;
  type?: InputMaybe<RoomType>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceFixedArgs = {
  lid: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceFrostArgs = {
  lid: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceHolidayArgs = {
  days?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
  lid: Scalars['Int']['input'];
  start?: InputMaybe<Scalars['String']['input']>;
  temperature: Scalars['Int']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceOffArgs = {
  lid: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceOverrideArgs = {
  lid: Scalars['Int']['input'];
  minutes: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
  temperature: Scalars['Int']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceProgramArgs = {
  lid: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceReLoadArgs = {
  sn?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationDeviceScheduleArgs = {
  lid: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
  schedule: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationDisableBetaArgs = {
  device?: InputMaybe<MobileType>;
  email?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationEnableBetaArgs = {
  device?: InputMaybe<MobileType>;
  email?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationFwShadowArgs = {
  serial: Scalars['String']['input'];
  token: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationGen2CvmArgs = {
  serial: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationInitShadowArgs = {
  serial: Scalars['String']['input'];
  token: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationLocationAdvancedArgs = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Currency4iE>;
  elecHighCost?: InputMaybe<Scalars['String']['input']>;
  elecLowCost?: InputMaybe<Scalars['String']['input']>;
  elecLowEnd?: InputMaybe<Scalars['String']['input']>;
  elecLowStart?: InputMaybe<Scalars['String']['input']>;
  gasHighCost?: InputMaybe<Scalars['String']['input']>;
  gasLowCost?: InputMaybe<Scalars['String']['input']>;
  gasLowEnd?: InputMaybe<Scalars['String']['input']>;
  gasLowStart?: InputMaybe<Scalars['String']['input']>;
  isFahrenheit?: InputMaybe<Scalars['Boolean']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  lid: Scalars['Int']['input'];
  long?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  town?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationRemoveGuestShareArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  lid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationRemoveMeArgs = {
  password: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationRemoveMobileArgs = {
  lid: Scalars['Int']['input'];
  mid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationRemoveMyShareArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  lid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationResetMobileNameArgs = {
  mobileId?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationSetAutoPreferencesArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  frequency?: InputMaybe<Scalars['Int']['input']>;
  savings?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationSetComfortTempArgs = {
  comfTemp: Scalars['Int']['input'];
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationSetGeoArgs = {
  geo: Scalars['Boolean']['input'];
  lid: Scalars['Int']['input'];
  mob?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationSetMessageCloudTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationSetRoomModeArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
  roomMode: RoomMode;
};

/** Warmup GraphQl mutation */
export type HeatingMutationSetTemperatureArgs = {
  delta?: InputMaybe<Scalars['Int']['input']>;
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationSetZonesArgs = {
  locZones: Scalars['String']['input'];
};

/** Warmup GraphQl mutation */
export type HeatingMutationShareLocationArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  lid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationTurnOffArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationTurnOnArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationUpdateProfileArgs = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<SupportedLanguage>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationUpdateSleepArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
  rid?: InputMaybe<Scalars['Int']['input']>;
  sleep?: InputMaybe<Scalars['String']['input']>;
  sleepActive?: InputMaybe<Scalars['Boolean']['input']>;
  sleepTemp?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationUpdateSwitchReportArgs = {
  state?: InputMaybe<SwitchState>;
  switchId?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationUpgradeLatestFwArgs = {
  lid: Scalars['Int']['input'];
  rid?: InputMaybe<Scalars['Int']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationUpgradeShadowArgs = {
  serial: Scalars['String']['input'];
  token: Scalars['String']['input'];
  type: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl mutation */
export type HeatingMutationValidatePinArgs = {
  pin?: InputMaybe<Scalars['String']['input']>;
};

/** Warmup GraphQl */
export type HeatingQuery = {
  __typename?: 'HeatingQuery';
  /** Server current UTC date and time [Y-m-d H:i:s] UTC */
  serverDateTime?: Maybe<Scalars['String']['output']>;
  /** Current User */
  support?: Maybe<Support>;
  /** Trace queries */
  trace?: Maybe<Scalars['Json']['output']>;
  /** Current User */
  user?: Maybe<User>;
  /** Mobile version information */
  version?: Maybe<MainVersion>;
};

export enum HeatingTarget {
  /** AIR */
  Air = 'air',
  /** FLOOR */
  Floor = 'floor',
}

export type Holiday = {
  __typename?: 'Holiday';
  /** holEnd of Holiday */
  holEnd?: Maybe<Scalars['String']['output']>;
  /** holStart of Holiday */
  holStart?: Maybe<Scalars['String']['output']>;
  /** holTemp of Holiday */
  holTemp?: Maybe<Scalars['Int']['output']>;
};

export enum HomeBackground {
  /** DARK */
  Dark = 'dark',
  /** LIGHT */
  Light = 'light',
  /** PURE_BLACK */
  PureBlack = 'pure_black',
  /** USER_UPLOADED */
  UserUploaded = 'user_uploaded',
}

export enum HomeStyle {
  /** FLIPPING_CLOCK */
  FlippingClock = 'flipping_clock',
  /** MINIMALIST */
  Minimalist = 'minimalist',
  /** TEMPERATURE */
  Temperature = 'temperature',
  /** TIME */
  Time = 'time',
}

export enum HomeserveProduct {
  /** DEMO_INSTALL */
  DemoInstall = 'demo_install',
  /** WARMUP_5IE */
  Warmup_5ie = 'warmup_5ie',
}

export type InviteLocationConfirmationEntity = {
  __typename?: 'InviteLocationConfirmationEntity';
  /** brand of InviteLocationConfirmationEntity */
  brand?: Maybe<Brand>;
  /** invitedEmail of InviteLocationConfirmationEntity */
  invitedEmail?: Maybe<Scalars['String']['output']>;
  /** Get location associated with this share */
  location?: Maybe<Location>;
  /** locationId of InviteLocationConfirmationEntity */
  locationId?: Maybe<Scalars['String']['output']>;
  /** ownerId of InviteLocationConfirmationEntity */
  ownerId?: Maybe<Scalars['String']['output']>;
};

export enum Language {
  /** GERMAN */
  De = 'de',
  /** ENGLISH */
  En = 'en',
  /** SPANISH */
  Es = 'es',
  /** FRENCH */
  Fr = 'fr',
  /** CROATIAN */
  Hr = 'hr',
  /** ITALIAN */
  It = 'it',
  /** DUTCH */
  Nl = 'nl',
  /** NORWEGIAN */
  No = 'no',
  /** POLISH */
  Pl = 'pl',
  /** PORTUGUESE */
  Pt = 'pt',
  /** ROMANIAN */
  Ro = 'ro',
  /** SLOVAKIAN */
  Sk = 'sk',
  /** SLOVENIAN */
  Sl = 'sl',
  /** SWEDISH */
  Sv = 'sv',
  /** TURKISH */
  Tr = 'tr',
}

export type LocZone = {
  __typename?: 'LocZone';
  /** Is mobile moving towards location? */
  isHoming?: Maybe<Scalars['Boolean']['output']>;
  /** offset of LocZone */
  offset?: Maybe<Scalars['String']['output']>;
  /** time of LocZone */
  time?: Maybe<Scalars['String']['output']>;
  /** zone of LocZone */
  zone?: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  __typename?: 'Location';
  /** address of Location */
  address?: Maybe<Address>;
  /** created of Location */
  created?: Maybe<Scalars['String']['output']>;
  /** list of Thermostat4iEs */
  devices?: Maybe<Array<Maybe<Thermostat4iE>>>;
  /** electricity of Location */
  electricity?: Maybe<Tariff>;
  /** fence of Location */
  fence?: Maybe<Fence>;
  /** user is the owner */
  fenceArray?: Maybe<Scalars['Json']['output']>;
  /** gas of Location */
  gas?: Maybe<Tariff>;
  /** geoLocation of Location */
  geoLocation?: Maybe<GeoLocation>;
  /** get location mode */
  geoMode?: Maybe<GeoMode>;
  /** get location mode */
  geoModeInt?: Maybe<Scalars['Int']['output']>;
  /** holiday of Location */
  holiday?: Maybe<Holiday>;
  /** id of Location */
  id?: Maybe<Scalars['Int']['output']>;
  /** Is mobile moving towards location? */
  isHoming?: Maybe<Scalars['Boolean']['output']>;
  /** user is the owner */
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  /** get location mode */
  locMode?: Maybe<ValidLocationMode>;
  /** get location mode */
  locModeInt?: Maybe<Scalars['Int']['output']>;
  /** zone of Location */
  locZone?: Maybe<LocZone>;
  /** list connected mobiles geoModes */
  mobiles?: Maybe<Array<Maybe<AggregateMobile>>>;
  /** name of Location */
  name?: Maybe<Scalars['String']['output']>;
  /** Get owner */
  owner?: Maybe<RestrictedUser>;
  /** list of Zones */
  room?: Maybe<Room>;
  /** list of Zones */
  rooms?: Maybe<Array<Maybe<Room>>>;
  /** settings of Location */
  settings?: Maybe<LocationSettings>;
  /** tariffType of Location */
  tariffType?: Maybe<TariffType>;
  /** updated of Location */
  updated?: Maybe<Scalars['String']['output']>;
  /** userId of Location */
  userId?: Maybe<Scalars['Int']['output']>;
  /** location mobile zone */
  zone?: Maybe<Scalars['Int']['output']>;
};

export type LocationDevicesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type LocationRoomArgs = {
  id: Scalars['Int']['input'];
};

export type LocationRoomsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export enum LocationMode {
  /** FROST */
  Frost = 'frost',
  /** OFF */
  Off = 'off',
  /** ON */
  On = 'on',
}

export type LocationSettings = {
  __typename?: 'LocationSettings';
  /** heatUpDPH of LocationSettings */
  heatUpDPH?: Maybe<Scalars['Int']['output']>;
  /** isDefault of LocationSettings */
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  /** isEnabled of LocationSettings */
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** isFahrenheit of LocationSettings */
  isFahrenheit?: Maybe<Scalars['Boolean']['output']>;
  /** isSmartGeo of LocationSettings */
  isSmartGeo?: Maybe<Scalars['Boolean']['output']>;
  /** locMode of LocationSettings */
  locMode?: Maybe<LocationMode>;
  /** mainRoom of LocationSettings */
  mainRoom?: Maybe<Scalars['Int']['output']>;
  /** speedKPH of LocationSettings */
  speedKPH?: Maybe<Scalars['Int']['output']>;
};

export type LocationShareObject = {
  __typename?: 'LocationShareObject';
  /** joiner email */
  joinerEmail?: Maybe<Scalars['String']['output']>;
  /** joinerId of LocationShareObject */
  joinerId?: Maybe<Scalars['String']['output']>;
  /** Get location associated with this share */
  location?: Maybe<Location>;
  /** locationId of LocationShareObject */
  locationId?: Maybe<Scalars['String']['output']>;
  /** owner of LocationShareObject */
  owner?: Maybe<Scalars['String']['output']>;
};

export type LoginInfo = {
  __typename?: 'LoginInfo';
  /** hasLoggedIn of LoginInfo */
  hasLoggedIn?: Maybe<Scalars['Boolean']['output']>;
  /** lastLogin of LoginInfo */
  lastLogin?: Maybe<Scalars['String']['output']>;
};

/** Mobile versions */
export type MainVersion = {
  __typename?: 'MainVersion';
  /** Minimum mobile application version */
  minimum?: Maybe<Scalars['String']['output']>;
  /** Recommended mobile application version */
  recommended?: Maybe<Scalars['String']['output']>;
};

export type MobileDevice = {
  __typename?: 'MobileDevice';
  /** appId of MobileDevice */
  appId?: Maybe<Scalars['String']['output']>;
  /** appToken of MobileDevice */
  appToken?: Maybe<Scalars['String']['output']>;
  /** created of MobileDevice */
  created?: Maybe<Scalars['String']['output']>;
  /** id of MobileDevice */
  id?: Maybe<Scalars['Int']['output']>;
  /** name of MobileDevice */
  name?: Maybe<Scalars['String']['output']>;
  /** partner of MobileDevice */
  partner?: Maybe<Scalars['String']['output']>;
  /** protocol of MobileDevice */
  protocol?: Maybe<Scalars['String']['output']>;
  /** source of MobileDevice */
  source?: Maybe<Scalars['String']['output']>;
  /** updated of MobileDevice */
  updated?: Maybe<Scalars['String']['output']>;
  /** userId of MobileDevice */
  userId?: Maybe<Scalars['Int']['output']>;
};

export enum MobileType {
  /** ANDROID */
  Android = 'Android',
  /** I_OS */
  IOs = 'iOS',
}

export type NoteEntity = {
  __typename?: 'NoteEntity';
  /** createdAt of NoteEntity */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Get note customer */
  customer?: Maybe<User>;
  /** customerId of NoteEntity */
  customerId?: Maybe<Scalars['Int']['output']>;
  /** id of NoteEntity */
  id?: Maybe<Scalars['Int']['output']>;
  /** note of NoteEntity */
  note?: Maybe<Scalars['String']['output']>;
  /** supportId of NoteEntity */
  supportId?: Maybe<Scalars['Int']['output']>;
};

export type ParametersWithChange = {
  __typename?: 'ParametersWithChange';
  /** adaptLearn of Parameters */
  adaptLearn?: Maybe<Scalars['Int']['output']>;
  /** airTemp of Parameters */
  airTemp?: Maybe<Scalars['Int']['output']>;
  /** audio of Parameters */
  audio?: Maybe<Scalars['Int']['output']>;
  /** brightness of Parameters */
  brightness?: Maybe<Scalars['Int']['output']>;
  /** brightnessStdby of Parameters */
  brightnessStdby?: Maybe<Scalars['Int']['output']>;
  /** changes of ParametersWithChange */
  changes?: Maybe<Scalars['Json']['output']>;
  /** controlMethod of Parameters */
  controlMethod?: Maybe<Scalars['Int']['output']>;
  /** currency of Parameters */
  currency?: Maybe<Scalars['Int']['output']>;
  /** dateFormat of Parameters */
  dateFormat?: Maybe<Scalars['String']['output']>;
  /** defaultUrl of Parameters */
  defaultUrl?: Maybe<Scalars['String']['output']>;
  /** deviceSN of Parameters */
  deviceSN?: Maybe<Scalars['String']['output']>;
  /** efficiency of Parameters */
  efficiency?: Maybe<Scalars['Int']['output']>;
  /** extType of Parameters */
  extType?: Maybe<Scalars['Int']['output']>;
  /** faultAir of Parameters */
  faultAir?: Maybe<Scalars['Boolean']['output']>;
  /** faultFloor1 of Parameters */
  faultFloor1?: Maybe<Scalars['Boolean']['output']>;
  /** faultFloor2 of Parameters */
  faultFloor2?: Maybe<Scalars['Boolean']['output']>;
  /** faultSystem of Parameters */
  faultSystem?: Maybe<Scalars['Int']['output']>;
  /** fixedDuty of Parameters */
  fixedDuty?: Maybe<Scalars['Int']['output']>;
  /** fixedTemp of Parameters */
  fixedTemp?: Maybe<Scalars['Int']['output']>;
  /** floor1Temp of Parameters */
  floor1Temp?: Maybe<Scalars['Int']['output']>;
  /** floor2Temp of Parameters */
  floor2Temp?: Maybe<Scalars['Int']['output']>;
  /** floorType of Parameters */
  floorType?: Maybe<Scalars['Int']['output']>;
  /** fpAFTemp of Parameters */
  fpAFTemp?: Maybe<Scalars['Int']['output']>;
  /** fpComfTemp of Parameters */
  fpComfTemp?: Maybe<Scalars['Int']['output']>;
  /** fpEconTemp of Parameters */
  fpEconTemp?: Maybe<Scalars['Int']['output']>;
  /** fwVer of Parameters */
  fwVer?: Maybe<Scalars['String']['output']>;
  /** gradDur of Parameters */
  gradDur?: Maybe<Scalars['Int']['output']>;
  /** gradTemp of Parameters */
  gradTemp?: Maybe<Scalars['Int']['output']>;
  /** heatingTarget of Parameters */
  heatingTarget?: Maybe<Scalars['Int']['output']>;
  /** holidayDuty of Parameters */
  holidayDuty?: Maybe<Scalars['Int']['output']>;
  /** holidayEnd of Parameters */
  holidayEnd?: Maybe<Scalars['Int']['output']>;
  /** holidayStart of Parameters */
  holidayStart?: Maybe<Scalars['Int']['output']>;
  /** holidayTemp of Parameters */
  holidayTemp?: Maybe<Scalars['Int']['output']>;
  /** homeBG of Parameters */
  homeBG?: Maybe<Scalars['Int']['output']>;
  /** homeStyle of Parameters */
  homeStyle?: Maybe<Scalars['Int']['output']>;
  /** lang of Parameters */
  lang?: Maybe<Scalars['Int']['output']>;
  /** localTime of Parameters */
  localTime?: Maybe<Scalars['Int']['output']>;
  /** lock of Parameters */
  lock?: Maybe<Scalars['Int']['output']>;
  /** lockCode of Parameters */
  lockCode?: Maybe<Scalars['Int']['output']>;
  /** ntcTypeFloor1 of Parameters */
  ntcTypeFloor1?: Maybe<Scalars['Int']['output']>;
  /** ntcTypeFloor2 of Parameters */
  ntcTypeFloor2?: Maybe<Scalars['Int']['output']>;
  /** offsetAir of Parameters */
  offsetAir?: Maybe<Scalars['String']['output']>;
  /** offsetFloor1 of Parameters */
  offsetFloor1?: Maybe<Scalars['String']['output']>;
  /** offsetFloor2 of Parameters */
  offsetFloor2?: Maybe<Scalars['String']['output']>;
  /** outputStatus of Parameters */
  outputStatus?: Maybe<Scalars['Int']['output']>;
  /** overheatLimitAir of Parameters */
  overheatLimitAir?: Maybe<Scalars['Int']['output']>;
  /** overheatLimitFloor of Parameters */
  overheatLimitFloor?: Maybe<Scalars['Int']['output']>;
  /** overrideDur of Parameters */
  overrideDur?: Maybe<Scalars['Int']['output']>;
  /** overrideDuty of Parameters */
  overrideDuty?: Maybe<Scalars['Int']['output']>;
  /** overrideTemp of Parameters */
  overrideTemp?: Maybe<Scalars['Int']['output']>;
  /** pollRate of Parameters */
  pollRate?: Maybe<Scalars['Int']['output']>;
  /** probeApp of Parameters */
  probeApp?: Maybe<Scalars['Int']['output']>;
  /** progMax of Parameters */
  progMax?: Maybe<Scalars['Int']['output']>;
  /** progMin of Parameters */
  progMin?: Maybe<Scalars['Int']['output']>;
  /** rssi of Parameters */
  rssi?: Maybe<Scalars['String']['output']>;
  /** runMode of Parameters */
  runMode?: Maybe<Scalars['Int']['output']>;
  /** schedule of Parameters */
  schedule?: Maybe<Scalars['Json']['output']>;
  /** setbackDuty of Parameters */
  setbackDuty?: Maybe<Scalars['Int']['output']>;
  /** setbackTemp of Parameters */
  setbackTemp?: Maybe<Scalars['Int']['output']>;
  /** sync of Parameters */
  sync?: Maybe<Scalars['Int']['output']>;
  /** systemPower of Parameters */
  systemPower?: Maybe<Scalars['Int']['output']>;
  /** systemType of Parameters */
  systemType?: Maybe<Scalars['Int']['output']>;
  /** tPID of Parameters */
  tPID?: Maybe<Scalars['Int']['output']>;
  /** tPWM of Parameters */
  tPWM?: Maybe<Scalars['Int']['output']>;
  /** targetDuty of Parameters */
  targetDuty?: Maybe<Scalars['String']['output']>;
  /** targetTemp of Parameters */
  targetTemp?: Maybe<Scalars['String']['output']>;
  /** tariff1 of Parameters */
  tariff1?: Maybe<Scalars['Int']['output']>;
  /** tariff2 of Parameters */
  tariff2?: Maybe<Scalars['Int']['output']>;
  /** tariff2End of Parameters */
  tariff2End?: Maybe<Scalars['String']['output']>;
  /** tariff2Start of Parameters */
  tariff2Start?: Maybe<Scalars['String']['output']>;
  /** tempFormat of Parameters */
  tempFormat?: Maybe<Scalars['Int']['output']>;
  /** text1 of Parameters */
  text1?: Maybe<Scalars['Json']['output']>;
  /** text2 of Parameters */
  text2?: Maybe<Scalars['Json']['output']>;
  /** timeFormat of Parameters */
  timeFormat?: Maybe<Scalars['Int']['output']>;
  /** totalOnLow of Parameters */
  totalOnLow?: Maybe<Scalars['Int']['output']>;
  /** totalOnTtl of Parameters */
  totalOnTtl?: Maybe<Scalars['String']['output']>;
  /** upTime of Parameters */
  upTime?: Maybe<Scalars['Int']['output']>;
  /** weather of Parameters */
  weather?: Maybe<Scalars['Json']['output']>;
};

export type Policy = {
  __typename?: 'Policy';
  /** isPrivacyPolicy of Policy */
  isPrivacyPolicy?: Maybe<Scalars['Boolean']['output']>;
  /** isTermsOfUse of Policy */
  isTermsOfUse?: Maybe<Scalars['Boolean']['output']>;
};

export enum PowerSource {
  /** ELECTRICITY */
  Electricity = 'electricity',
  /** GAS */
  Gas = 'gas',
}

export enum RegulatorType {
  /** PID */
  Pid = 'pid',
  /** PWM */
  Pwm = 'pwm',
}

export type RestrictedUser = {
  __typename?: 'RestrictedUser';
  /** brand of User */
  brand?: Maybe<Brand>;
  /** created of User */
  created?: Maybe<Scalars['String']['output']>;
  /** email of User */
  email?: Maybe<Scalars['String']['output']>;
  /** firstName of UserProfile */
  firstName?: Maybe<Scalars['String']['output']>;
  /** id of User */
  id?: Maybe<Scalars['Int']['output']>;
  /** lastName of UserProfile */
  lastName?: Maybe<Scalars['String']['output']>;
};

export type Room = {
  __typename?: 'Room';
  /** all FloorTypes */
  availableFloorTypes?: Maybe<Scalars['Json']['output']>;
  /** owned locations */
  availableLocationIds?: Maybe<Scalars['Json']['output']>;
  /** room away temperature */
  awayTemp?: Maybe<Scalars['Int']['output']>;
  /** room comfort temperature */
  comfortTemp?: Maybe<Scalars['Int']['output']>;
  /** energy total */
  cost?: Maybe<Scalars['String']['output']>;
  /** created of Room */
  created?: Maybe<Scalars['String']['output']>;
  /** room current temperature */
  currentTemp?: Maybe<Scalars['Int']['output']>;
  /** energy total */
  energy?: Maybe<Scalars['String']['output']>;
  /** energy consumption data */
  energyChart?: Maybe<Scalars['Json']['output']>;
  /** fixed temperature */
  fixedTemp?: Maybe<Scalars['Int']['output']>;
  /** room floor type */
  floorType?: Maybe<FloorType>;
  /** room floor type */
  floorTypeInt?: Maybe<Scalars['Int']['output']>;
  /** id of room */
  id?: Maybe<Scalars['Int']['output']>;
  /** is main room */
  isMainRoom?: Maybe<Scalars['Boolean']['output']>;
  /** is sleep active */
  isSleepActive?: Maybe<Scalars['Boolean']['output']>;
  /** Language */
  language?: Maybe<Scalars['String']['output']>;
  /** energy consumption data */
  legacyChart?: Maybe<Scalars['Json']['output']>;
  /** room main temperature label */
  mainLabel?: Maybe<Scalars['String']['output']>;
  /** room main temperature */
  mainTemp?: Maybe<Scalars['Int']['output']>;
  /** override duration in minutes */
  overrideDur?: Maybe<Scalars['Int']['output']>;
  /** override temperature */
  overrideTemp?: Maybe<Scalars['Int']['output']>;
  /** Room`s owner */
  owner?: Maybe<User>;
  /** Room`s location */
  parentLocation?: Maybe<Location>;
  /** energy consumption data extended */
  portalRoomChart?: Maybe<Scalars['Json']['output']>;
  /** room mode */
  roomMode?: Maybe<RoomMode>;
  /** room mode int */
  roomModeInt?: Maybe<Scalars['Int']['output']>;
  /** room name */
  roomName?: Maybe<Scalars['String']['output']>;
  /** room type enum */
  roomType?: Maybe<RoomType>;
  /** room type int */
  roomTypeInt?: Maybe<Scalars['Int']['output']>;
  /** room type string */
  roomTypeStr?: Maybe<Scalars['String']['output']>;
  /** room runMode */
  runMode?: Maybe<RunMode>;
  /** room runMode int */
  runModeInt?: Maybe<Scalars['Int']['output']>;
  /** room schedule */
  schedule?: Maybe<Scalars['Json']['output']>;
  /** room secondary temperature label */
  secondaryLabel?: Maybe<Scalars['String']['output']>;
  /** room secondary temperature */
  secondaryTemp?: Maybe<Scalars['Int']['output']>;
  /** room sleep temperature */
  sleepTemp?: Maybe<Scalars['Int']['output']>;
  /** room target temperature */
  targetTemp?: Maybe<Scalars['Int']['output']>;
  /** list of 4iEs */
  thermostat4ies?: Maybe<Array<Maybe<Thermostat4iE>>>;
  /** energy total */
  total?: Maybe<Scalars['Int']['output']>;
  /** room device type */
  type?: Maybe<Scalars['String']['output']>;
  /** updated of Room */
  updated?: Maybe<Scalars['String']['output']>;
};

export type RoomEnergyChartArgs = {
  day?: InputMaybe<Scalars['Int']['input']>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export enum RoomMode {
  /** FIXED */
  Fixed = 'fixed',
  /** PROGRAM */
  Program = 'program',
  /** UNDEFINED */
  Undefined = 'undefined',
}

export type RoomSettings = {
  __typename?: 'RoomSettings';
  /** mode of RoomSettings */
  mode?: Maybe<RoomMode>;
  /** name of RoomSettings */
  name?: Maybe<Scalars['String']['output']>;
  /** preset of RoomSettings */
  preset?: Maybe<RoomType>;
};

export enum RoomType {
  /** BATHROOM */
  Bathroom = 'bathroom',
  /** BEDROOM */
  Bedroom = 'bedroom',
  /** GENERAL */
  General = 'general',
  /** KITCHEN */
  Kitchen = 'kitchen',
  /** LIVING_ROOM */
  LivingRoom = 'living_room',
}

export enum RunMode {
  /** ANTI_FROST */
  AntiFrost = 'anti_frost',
  /** FIL_PILOTE */
  FilPilote = 'fil_pilote',
  /** FIXED */
  Fixed = 'fixed',
  /** GRADUAL */
  Gradual = 'gradual',
  /** HOLIDAY */
  Holiday = 'holiday',
  /** NOT_SET */
  NotSet = 'not_set',
  /** OFF */
  Off = 'off',
  /** OVERRIDE */
  Override = 'override',
  /** PREVIOUS */
  Previous = 'previous',
  /** RELAY */
  Relay = 'relay',
  /** SCHEDULE */
  Schedule = 'schedule',
}

export type Sleep = {
  __typename?: 'Sleep';
  /** isActive of Sleep */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** json of Sleep */
  json?: Maybe<Scalars['Json']['output']>;
  /** temperature of Sleep */
  temperature?: Maybe<Scalars['Int']['output']>;
};

/** support scheme */
export type Support = {
  __typename?: 'Support';
  /** Dashboard statistics */
  dashboard?: Maybe<DashboardStats>;
  /** get device daily statistics */
  deviceStatistics?: Maybe<Array<Maybe<DeviceAccessStatistic>>>;
  /** email by id */
  email?: Maybe<EmailRecordEntity>;
  /** search emails */
  emails?: Maybe<Array<Maybe<EmailRecordEntity>>>;
  /** notes for customers */
  feedback?: Maybe<Array<Maybe<AppFeedbackEntity>>>;
  /** Request Audience Token */
  getAudienceToken?: Maybe<Scalars['Json']['output']>;
  /** List user's Homeserve orders */
  homeserveOrders?: Maybe<Scalars['Json']['output']>;
  /** latest room access records */
  latestRecords?: Maybe<Array<Maybe<DeviceShortLog>>>;
  /** notes for customers */
  notes?: Maybe<Array<Maybe<NoteEntity>>>;
  /** room by id */
  room?: Maybe<Room>;
  /** search rooms */
  rooms?: Maybe<Array<Maybe<Room>>>;
  /** get device state for the last 7 days */
  timeseries?: Maybe<Scalars['Json']['output']>;
  /** List today's mutations */
  todayChanges?: Maybe<Scalars['Json']['output']>;
  /** user by id */
  user?: Maybe<User>;
  /** search users */
  users?: Maybe<Array<Maybe<User>>>;
  /** search vouchers */
  voucherBatch?: Maybe<Array<Maybe<VoucherBatch>>>;
};

/** support scheme */
export type SupportDeviceStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sn: Scalars['String']['input'];
};

/** support scheme */
export type SupportEmailArgs = {
  id: Scalars['Int']['input'];
};

/** support scheme */
export type SupportEmailsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** support scheme */
export type SupportFeedbackArgs = {
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** support scheme */
export type SupportGetAudienceTokenArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AudienceType>;
};

/** support scheme */
export type SupportHomeserveOrdersArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** support scheme */
export type SupportLatestRecordsArgs = {
  sn: Scalars['String']['input'];
};

/** support scheme */
export type SupportNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};

/** support scheme */
export type SupportRoomArgs = {
  id: Scalars['Int']['input'];
};

/** support scheme */
export type SupportRoomsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sn: Scalars['String']['input'];
};

/** support scheme */
export type SupportTimeseriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sn: Scalars['String']['input'];
};

/** support scheme */
export type SupportTodayChangesArgs = {
  sn: Scalars['String']['input'];
};

/** support scheme */
export type SupportUserArgs = {
  id: Scalars['Int']['input'];
};

/** support scheme */
export type SupportUsersArgs = {
  email: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** support scheme */
export type SupportVoucherBatchArgs = {
  batch?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  voucher?: InputMaybe<Scalars['String']['input']>;
};

export enum SupportedLanguage {
  /** GERMAN */
  DeDe = 'de_DE',
  /** ENGLISH */
  EnGb = 'en_GB',
  /** SPANISH */
  EsEs = 'es_ES',
  /** FRENCH */
  FrFr = 'fr_FR',
  /** CROATIAN */
  HrHr = 'hr_HR',
  /** DUTCH */
  NlNl = 'nl_NL',
  /** POLISH */
  PlPl = 'pl_PL',
  /** PORTUGUESE */
  PtPt = 'pt_PT',
  /** ROMANIAN */
  RoRo = 'ro_RO',
  /** SLOVAKIAN */
  SkSk = 'sk_SK',
  /** UNDEFINED */
  Undefined = 'undefined',
}

export type SwitchReport = {
  __typename?: 'SwitchReport';
  /** confirmedAt of SwitchReport */
  confirmedAt?: Maybe<Scalars['String']['output']>;
  /** createdAt of SwitchReport */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** id of SwitchReport */
  id?: Maybe<Scalars['Int']['output']>;
  /** note of SwitchReport */
  note?: Maybe<Scalars['String']['output']>;
  /** reportDate of SwitchReport */
  reportDate?: Maybe<Scalars['String']['output']>;
  /** state of SwitchReport */
  state?: Maybe<SwitchState>;
  /** switchId of SwitchReport */
  switchId?: Maybe<Scalars['Int']['output']>;
};

export type SwitchSnapshot = {
  __typename?: 'SwitchSnapshot';
  /** createdAt of SwitchSnapshot */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** id of SwitchSnapshot */
  id?: Maybe<Scalars['Int']['output']>;
  /** savings of SwitchSnapshot */
  savings?: Maybe<Scalars['String']['output']>;
  /** supplierId of SwitchSnapshot */
  supplierId?: Maybe<Scalars['Int']['output']>;
  /** supplierLogo of SwitchSnapshot */
  supplierLogo?: Maybe<Scalars['String']['output']>;
  /** supplierName of SwitchSnapshot */
  supplierName?: Maybe<Scalars['String']['output']>;
  /** switchId of SwitchSnapshot */
  switchId?: Maybe<Scalars['Int']['output']>;
  /** tariffId of SwitchSnapshot */
  tariffId?: Maybe<Scalars['Int']['output']>;
  /** tariffName of SwitchSnapshot */
  tariffName?: Maybe<Scalars['String']['output']>;
  /** Get user */
  user?: Maybe<RestrictedUser>;
  /** userId of SwitchSnapshot */
  userId?: Maybe<Scalars['Int']['output']>;
};

export enum SwitchState {
  /** APPROVED */
  Approved = 'approved',
  /** CANCELLED */
  Cancelled = 'cancelled',
  /** PENDING */
  Pending = 'pending',
  /** SWITCH_FAILED */
  SwitchFailed = 'switch_failed',
  /** SWITCHED */
  Switched = 'switched',
}

export enum SystemType {
  /** CONVENTIONAL */
  Conventional = 'conventional',
  /** ELECTRIC */
  Electric = 'electric',
  /** ELECTRIC_RELAY */
  ElectricRelay = 'electric_relay',
  /** HYDRONIC */
  Hydronic = 'hydronic',
}

export type Tariff = {
  __typename?: 'Tariff';
  /** cost of Tariff (decimal /\d+(\.\d{1,5})?/) */
  cost?: Maybe<Scalars['String']['output']>;
  /** end of Tariff (time: (hh:mm) ) */
  end?: Maybe<Scalars['String']['output']>;
  /** low of Tariff (decimal /\d+(\.\d{1,5})?/) */
  low?: Maybe<Scalars['String']['output']>;
  /** start of Tariff (time: (hh:mm) ) */
  start?: Maybe<Scalars['String']['output']>;
};

export enum TariffType {
  /** DUAL - both electricity and gas */
  Dual = 'dual',
  /** SINGLE - only one source, electricity or gas */
  Single = 'single',
}

export type Thermostat4iE = {
  __typename?: 'Thermostat4iE';
  /** airTemp of Thermostat4iE */
  airTemp?: Maybe<Scalars['String']['output']>;
  /** appFw of Thermostat4iE */
  appFw?: Maybe<Scalars['String']['output']>;
  /** last poll in minutes */
  availableLanguages?: Maybe<Scalars['Json']['output']>;
  /** get 4iE background URL */
  backgroundURL?: Maybe<Scalars['String']['output']>;
  /** bgImageId of Thermostat4iE */
  bgImageId?: Maybe<Scalars['Int']['output']>;
  /** city of Thermostat4iE */
  city?: Maybe<Scalars['String']['output']>;
  /** cityId of Thermostat4iE */
  cityId?: Maybe<Scalars['Int']['output']>;
  /** comfortTemp of Thermostat4iE */
  comfortTemp?: Maybe<Scalars['String']['output']>;
  /** countryCode of Thermostat4iE */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** created of Thermostat4iE */
  created?: Maybe<Scalars['String']['output']>;
  /** room language */
  currentTemp?: Maybe<Scalars['Int']['output']>;
  /** defaultUrl of Thermostat4iE */
  defaultUrl?: Maybe<Scalars['String']['output']>;
  /** deviceSN of Thermostat4iE */
  deviceSN?: Maybe<Scalars['String']['output']>;
  /** flag of Thermostat4iE */
  flag?: Maybe<Scalars['Boolean']['output']>;
  /** floor1Temp of Thermostat4iE */
  floor1Temp?: Maybe<Scalars['String']['output']>;
  /** floor2Temp of Thermostat4iE */
  floor2Temp?: Maybe<Scalars['String']['output']>;
  /** geoLocation of Thermostat4iE */
  geoLocation?: Maybe<GeoLocation>;
  /** geoProg of Thermostat4iE */
  geoProg?: Maybe<Scalars['Boolean']['output']>;
  /** room language */
  hasPolled?: Maybe<Scalars['Boolean']['output']>;
  /** is sleep active */
  heatingTarget?: Maybe<HeatingTarget>;
  /** is sleep active */
  heatingTargetInt?: Maybe<Scalars['Int']['output']>;
  /** home background enum */
  homeBG?: Maybe<HomeBackground>;
  /** home background enum */
  homeBGInt?: Maybe<Scalars['Int']['output']>;
  /** is sleep active */
  homeStyle?: Maybe<HomeStyle>;
  /** homeStyle */
  homeStyleInt?: Maybe<Scalars['Int']['output']>;
  /** id of Thermostat4iE */
  id?: Maybe<Scalars['Int']['output']>;
  /** active of Thermostat4iE */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** fault air */
  isFaultAir?: Maybe<Scalars['Boolean']['output']>;
  /** fault floor1 */
  isFaultFloor1?: Maybe<Scalars['Boolean']['output']>;
  /** fault floor2 */
  isFaultFloor2?: Maybe<Scalars['Boolean']['output']>;
  /** room language */
  language?: Maybe<Scalars['String']['output']>;
  /** last poll in minutes */
  lastPoll?: Maybe<Scalars['Int']['output']>;
  /** locationId of Thermostat4iE */
  locationId?: Maybe<Scalars['Int']['output']>;
  /** room language */
  maxTemp?: Maybe<Scalars['Int']['output']>;
  /** room language */
  minTemp?: Maybe<Scalars['Int']['output']>;
  /** parameters of Thermostat4iE */
  parameters?: Maybe<ParametersWithChange>;
  /** passwordSet of Thermostat4iE */
  passwordSet?: Maybe<Scalars['Boolean']['output']>;
  /** pendingLast of Thermostat4iE */
  pendingLast?: Maybe<Scalars['Json']['output']>;
  /** powerSource of Thermostat4iE */
  powerSource?: Maybe<PowerSource>;
  /** powerSource of Thermostat4iE */
  powerSourceInt?: Maybe<Scalars['Int']['output']>;
  /** roads of Thermostat4iE */
  roads?: Maybe<Scalars['String']['output']>;
  /** room of Thermostat4iE */
  roomSettings?: Maybe<RoomSettings>;
  /** runMode of Thermostat4iE */
  runMode?: Maybe<RunMode>;
  /** sleep of Thermostat4iE */
  sleep?: Maybe<Sleep>;
  /** smartOverride of Thermostat4iE */
  smartOverride?: Maybe<Scalars['Json']['output']>;
  /** systemType of Thermostat4iE */
  systemType?: Maybe<SystemType>;
  /** systemType of Thermostat4iE */
  systemTypeInt?: Maybe<Scalars['Int']['output']>;
  /** timezone of Thermostat4iE */
  timezone?: Maybe<Scalars['String']['output']>;
  /** Thermostat kind */
  type?: Maybe<Scalars['String']['output']>;
  /** updated of Thermostat4iE */
  updated?: Maybe<Scalars['String']['output']>;
  /** updated portal */
  updatedPortal?: Maybe<Scalars['String']['output']>;
  /** userId of Thermostat4iE */
  userId?: Maybe<Scalars['Int']['output']>;
  /** wifiFw of Thermostat4iE */
  wifiFw?: Maybe<Scalars['String']['output']>;
};

export enum ThermostatTimeFormat {
  /** H12 */
  H12 = 'h12',
  /** H24 */
  H24 = 'h24',
}

export type User = {
  __typename?: 'User';
  /** access of User */
  access?: Maybe<UserAccess>;
  /** User beta subscriptions */
  betaState?: Maybe<EnabledState>;
  /** User beta subscriptions Int */
  betaStateInt?: Maybe<Scalars['Int']['output']>;
  /** brand of User */
  brand?: Maybe<Brand>;
  /** created of User */
  created?: Maybe<Scalars['String']['output']>;
  /** credentials of User */
  credentials?: Maybe<Expire>;
  /** earliest Location created */
  defaultLocation?: Maybe<Location>;
  /** email of User */
  email?: Maybe<Scalars['String']['output']>;
  /** expires of User */
  expires?: Maybe<Expire>;
  /** Get location by room id */
  findLocation?: Maybe<Location>;
  /** share location */
  guestShares?: Maybe<Array<Maybe<InviteLocationConfirmationEntity>>>;
  /** id of User */
  id?: Maybe<Scalars['Int']['output']>;
  /** Get Recent Warmup Authentication Token. Support gets an invalid token! */
  legacyToken?: Maybe<Scalars['String']['output']>;
  /** Get location by Id or default otherwise. */
  location?: Maybe<Location>;
  /** list of Locations */
  locations?: Maybe<Array<Maybe<Location>>>;
  /** loginInfo of User */
  loginInfo?: Maybe<LoginInfo>;
  /** current logged in mobile device */
  mobile?: Maybe<Array<Maybe<AggregateMobile>>>;
  /** current mobile device id */
  mobileId?: Maybe<Scalars['Int']['output']>;
  /** mobile notice counter and last check */
  mobileNoticeCheck?: Maybe<Scalars['Json']['output']>;
  /** list current user shares */
  myShares?: Maybe<Array<Maybe<LocationShareObject>>>;
  /** user opted in to marketing */
  optInMarketing?: Maybe<Scalars['Boolean']['output']>;
  /** list of owned Locations */
  owned?: Maybe<Array<Maybe<Location>>>;
  /** owner's mobiles */
  ownedMobiles?: Maybe<Array<Maybe<MobileDevice>>>;
  /** passwordRequestedAt of User */
  passwordRequestedAt?: Maybe<Scalars['String']['output']>;
  /** policy of User */
  policy?: Maybe<Policy>;
  /** AutoSwitch Plan */
  switchPlan?: Maybe<Scalars['Json']['output']>;
  /** AutoSwitch properties */
  switchProperties?: Maybe<AutoProperties>;
  /** Switch states */
  switchReports?: Maybe<SwitchReport>;
  /** tokenInfo of User */
  tokenInfo?: Maybe<UserTokenInfo>;
  /** userProfile of User */
  userProfile?: Maybe<UserProfile>;
  /** check password validity */
  verifyPassword?: Maybe<Scalars['Boolean']['output']>;
  /** visibility of User */
  visibility?: Maybe<UserVisibility>;
  /** device readable by user */
  visibleDevice?: Maybe<Scalars['String']['output']>;
};

export type UserFindLocationArgs = {
  rid?: InputMaybe<Scalars['Int']['input']>;
};

export type UserGuestSharesArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
};

export type UserLocationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type UserLocationsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type UserMySharesArgs = {
  lid?: InputMaybe<Scalars['Int']['input']>;
};

export type UserOwnedArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSwitchReportsArgs = {
  switchId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserVerifyPasswordArgs = {
  pass: Scalars['String']['input'];
};

export type UserVisibleDeviceArgs = {
  serial: Scalars['String']['input'];
};

export type UserAccess = {
  __typename?: 'UserAccess';
  /** accessGrant of UserAccess */
  accessGrant?: Maybe<Scalars['String']['output']>;
  /** accessRequest of UserAccess */
  accessRequest?: Maybe<Scalars['String']['output']>;
  /** accessToken of UserAccess */
  accessToken?: Maybe<Scalars['String']['output']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  /** contactNumber of UserProfile */
  contactNumber?: Maybe<Scalars['String']['output']>;
  /** dateOfBirth of UserProfile */
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  /** email of UserProfile */
  email?: Maybe<Scalars['String']['output']>;
  /** emailHash of UserProfile */
  emailHash?: Maybe<Scalars['String']['output']>;
  /** firstName of UserProfile */
  firstName?: Maybe<Scalars['String']['output']>;
  /** lastName of UserProfile */
  lastName?: Maybe<Scalars['String']['output']>;
  /** name of UserProfile */
  name?: Maybe<Scalars['String']['output']>;
  /** preferredLanguage of UserProfile */
  preferredLanguage?: Maybe<SupportedLanguage>;
  /** title of UserProfile */
  title?: Maybe<Scalars['String']['output']>;
};

export type UserTokenInfo = {
  __typename?: 'UserTokenInfo';
  /** apiToken of UserTokenInfo */
  apiToken?: Maybe<Scalars['String']['output']>;
  /** apiTokenCreated of UserTokenInfo */
  apiTokenCreated?: Maybe<Scalars['String']['output']>;
  /** apiTokenUpdated of UserTokenInfo */
  apiTokenUpdated?: Maybe<Scalars['String']['output']>;
  /** appToken of UserTokenInfo */
  appToken?: Maybe<Scalars['String']['output']>;
  /** changeEmailToken of UserTokenInfo */
  changeEmailToken?: Maybe<Scalars['String']['output']>;
  /** confirmationToken of UserTokenInfo */
  confirmationToken?: Maybe<Scalars['String']['output']>;
  /** newEmail of UserTokenInfo */
  newEmail?: Maybe<Scalars['String']['output']>;
};

export type UserVisibility = {
  __typename?: 'UserVisibility';
  /** enabled of UserVisibility */
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** locked of UserVisibility */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** role of UserVisibility */
  role?: Maybe<Scalars['Json']['output']>;
};

export enum ValidLocationMode {
  /** FROST */
  Frost = 'frost',
  /** GEO */
  Geo = 'geo',
  /** HOLIDAY */
  Holiday = 'holiday',
  /** NOT_GEO */
  NotGeo = 'not_geo',
  /** OFF */
  Off = 'off',
}

export type Voucher = {
  __typename?: 'Voucher';
  /** batchId of Voucher */
  batchId?: Maybe<Scalars['Int']['output']>;
  /** id of Voucher */
  id?: Maybe<Scalars['Int']['output']>;
  /** redeemedAt of Voucher */
  redeemedAt?: Maybe<Scalars['String']['output']>;
  /** userId of Voucher */
  userId?: Maybe<Scalars['Int']['output']>;
  /** get user profile */
  userProfile?: Maybe<UserProfile>;
  /** voucher of Voucher */
  voucher?: Maybe<Scalars['String']['output']>;
};

export type VoucherBatch = {
  __typename?: 'VoucherBatch';
  /** createdAt of VoucherBatch */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** expiresAt of VoucherBatch */
  expiresAt?: Maybe<Scalars['String']['output']>;
  /** id of VoucherBatch */
  id?: Maybe<Scalars['Int']['output']>;
  /** product of VoucherBatch */
  product?: Maybe<HomeserveProduct>;
  /** number of redeemed vouchers in the batch */
  redeemed?: Maybe<Scalars['Int']['output']>;
  /** vendor of VoucherBatch */
  vendor?: Maybe<Scalars['String']['output']>;
  /** volume of VoucherBatch */
  volume?: Maybe<Scalars['String']['output']>;
  /** list vouchers */
  vouchers?: Maybe<Array<Maybe<Voucher>>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessDay: ResolverTypeWrapper<AccessDay>;
  Address: ResolverTypeWrapper<Address>;
  AggregateMobile: ResolverTypeWrapper<AggregateMobile>;
  AppFeedbackEntity: ResolverTypeWrapper<AppFeedbackEntity>;
  AppVersion: ResolverTypeWrapper<AppVersion>;
  AudienceType: AudienceType;
  AutoProperties: ResolverTypeWrapper<AutoProperties>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Brand: Brand;
  BrandInput: BrandInput;
  ClientID: ClientId;
  Currency4iE: Currency4iE;
  DashboardStats: ResolverTypeWrapper<DashboardStats>;
  DeviceAccessStatistic: ResolverTypeWrapper<DeviceAccessStatistic>;
  DeviceShortLog: ResolverTypeWrapper<DeviceShortLog>;
  DeviceType: DeviceType;
  DisplayedProbe: DisplayedProbe;
  EmailRecordEntity: ResolverTypeWrapper<EmailRecordEntity>;
  EmailType: EmailType;
  EnabledState: EnabledState;
  Expire: ResolverTypeWrapper<Expire>;
  ExternalTerminalFunction: ExternalTerminalFunction;
  Fence: ResolverTypeWrapper<Fence>;
  FloorSensorType: FloorSensorType;
  FloorType: FloorType;
  GeneralStatistic: ResolverTypeWrapper<GeneralStatistic>;
  GeoLocation: ResolverTypeWrapper<GeoLocation>;
  GeoMode: GeoMode;
  HeatingMutation: ResolverTypeWrapper<{}>;
  HeatingQuery: ResolverTypeWrapper<{}>;
  HeatingTarget: HeatingTarget;
  Holiday: ResolverTypeWrapper<Holiday>;
  HomeBackground: HomeBackground;
  HomeStyle: HomeStyle;
  HomeserveProduct: HomeserveProduct;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InviteLocationConfirmationEntity: ResolverTypeWrapper<InviteLocationConfirmationEntity>;
  Json: ResolverTypeWrapper<Scalars['Json']['output']>;
  Language: Language;
  LocZone: ResolverTypeWrapper<LocZone>;
  Location: ResolverTypeWrapper<Location>;
  LocationMode: LocationMode;
  LocationSettings: ResolverTypeWrapper<LocationSettings>;
  LocationShareObject: ResolverTypeWrapper<LocationShareObject>;
  LoginInfo: ResolverTypeWrapper<LoginInfo>;
  MainVersion: ResolverTypeWrapper<MainVersion>;
  MobileDevice: ResolverTypeWrapper<MobileDevice>;
  MobileType: MobileType;
  NoteEntity: ResolverTypeWrapper<NoteEntity>;
  ParametersWithChange: ResolverTypeWrapper<ParametersWithChange>;
  Policy: ResolverTypeWrapper<Policy>;
  PowerSource: PowerSource;
  RegulatorType: RegulatorType;
  RestrictedUser: ResolverTypeWrapper<RestrictedUser>;
  Room: ResolverTypeWrapper<Room>;
  RoomMode: RoomMode;
  RoomSettings: ResolverTypeWrapper<RoomSettings>;
  RoomType: RoomType;
  RunMode: RunMode;
  Sleep: ResolverTypeWrapper<Sleep>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Support: ResolverTypeWrapper<Support>;
  SupportedLanguage: SupportedLanguage;
  SwitchReport: ResolverTypeWrapper<SwitchReport>;
  SwitchSnapshot: ResolverTypeWrapper<SwitchSnapshot>;
  SwitchState: SwitchState;
  SystemType: SystemType;
  Tariff: ResolverTypeWrapper<Tariff>;
  TariffType: TariffType;
  Thermostat4iE: ResolverTypeWrapper<Thermostat4iE>;
  ThermostatTimeFormat: ThermostatTimeFormat;
  User: ResolverTypeWrapper<User>;
  UserAccess: ResolverTypeWrapper<UserAccess>;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  UserTokenInfo: ResolverTypeWrapper<UserTokenInfo>;
  UserVisibility: ResolverTypeWrapper<UserVisibility>;
  ValidLocationMode: ValidLocationMode;
  Voucher: ResolverTypeWrapper<Voucher>;
  VoucherBatch: ResolverTypeWrapper<VoucherBatch>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessDay: AccessDay;
  Address: Address;
  AggregateMobile: AggregateMobile;
  AppFeedbackEntity: AppFeedbackEntity;
  AppVersion: AppVersion;
  AutoProperties: AutoProperties;
  Boolean: Scalars['Boolean']['output'];
  DashboardStats: DashboardStats;
  DeviceAccessStatistic: DeviceAccessStatistic;
  DeviceShortLog: DeviceShortLog;
  EmailRecordEntity: EmailRecordEntity;
  Expire: Expire;
  Fence: Fence;
  GeneralStatistic: GeneralStatistic;
  GeoLocation: GeoLocation;
  HeatingMutation: {};
  HeatingQuery: {};
  Holiday: Holiday;
  Int: Scalars['Int']['output'];
  InviteLocationConfirmationEntity: InviteLocationConfirmationEntity;
  Json: Scalars['Json']['output'];
  LocZone: LocZone;
  Location: Location;
  LocationSettings: LocationSettings;
  LocationShareObject: LocationShareObject;
  LoginInfo: LoginInfo;
  MainVersion: MainVersion;
  MobileDevice: MobileDevice;
  NoteEntity: NoteEntity;
  ParametersWithChange: ParametersWithChange;
  Policy: Policy;
  RestrictedUser: RestrictedUser;
  Room: Room;
  RoomSettings: RoomSettings;
  Sleep: Sleep;
  String: Scalars['String']['output'];
  Support: Support;
  SwitchReport: SwitchReport;
  SwitchSnapshot: SwitchSnapshot;
  Tariff: Tariff;
  Thermostat4iE: Thermostat4iE;
  User: User;
  UserAccess: UserAccess;
  UserProfile: UserProfile;
  UserTokenInfo: UserTokenInfo;
  UserVisibility: UserVisibility;
  Voucher: Voucher;
  VoucherBatch: VoucherBatch;
};

export type AccessDayResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccessDay'] = ResolversParentTypes['AccessDay'],
> = {
  counterCreated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  devicesActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pTimeAverage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address'],
> = {
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  owmCityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  town?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateMobileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AggregateMobile'] = ResolversParentTypes['AggregateMobile'],
> = {
  appId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoMode?: Resolver<Maybe<ResolversTypes['GeoMode']>, ParentType, ContextType>;
  geoModeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isHoming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zoneUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppFeedbackEntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppFeedbackEntity'] = ResolversParentTypes['AppFeedbackEntity'],
> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  clientId?: Resolver<Maybe<ResolversTypes['ClientID']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedback?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operatingDevice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['RestrictedUser']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  versionObject?: Resolver<Maybe<ResolversTypes['AppVersion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppVersionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppVersion'] = ResolversParentTypes['AppVersion'],
> = {
  maintenance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  major?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutoPropertiesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AutoProperties'] = ResolversParentTypes['AutoProperties'],
> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frequencyInMonths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  minimumSavings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['RestrictedUser']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DashboardStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DashboardStats'] = ResolversParentTypes['DashboardStats'],
> = {
  accessDay?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['AccessDay']>>>,
    ParentType,
    ContextType,
    Partial<DashboardStatsAccessDayArgs>
  >;
  appFw?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, Partial<DashboardStatsAppFwArgs>>;
  deviceStats?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<DashboardStatsDeviceStatsArgs>
  >;
  elbStats?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  general?: Resolver<
    Maybe<ResolversTypes['GeneralStatistic']>,
    ParentType,
    ContextType,
    Partial<DashboardStatsGeneralArgs>
  >;
  systemTypes?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<DashboardStatsSystemTypesArgs>
  >;
  userStats?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, Partial<DashboardStatsUserStatsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceAccessStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeviceAccessStatistic'] = ResolversParentTypes['DeviceAccessStatistic'],
> = {
  createdUnix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dayOfYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceSN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polls?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responseNotSuccess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responseSuccess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceShortLogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeviceShortLog'] = ResolversParentTypes['DeviceShortLog'],
> = {
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  processTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  request?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailRecordEntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EmailRecordEntity'] = ResolversParentTypes['EmailRecordEntity'],
> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailType?: Resolver<Maybe<ResolversTypes['EmailType']>, ParentType, ContextType>;
  headers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['RestrictedUser']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  returnedBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExpireResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Expire'] = ResolversParentTypes['Expire'],
> = {
  expiresAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isExpired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FenceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Fence'] = ResolversParentTypes['Fence'],
> = {
  offset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneralStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GeneralStatistic'] = ResolversParentTypes['GeneralStatistic'],
> = {
  appFws?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cities?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCodes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordSet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registered?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registeredToday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezones?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedToday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urls?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeoLocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GeoLocation'] = ResolversParentTypes['GeoLocation'],
> = {
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeatingMutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HeatingMutation'] = ResolversParentTypes['HeatingMutation'],
> = {
  acceptGrant?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationAcceptGrantArgs, 'code'>
  >;
  addDevice?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    RequireFields<
      HeatingMutationAddDeviceArgs,
      'floorType' | 'lid' | 'name' | 'powerSource' | 'roomType' | 'serial' | 'systemPower' | 'systemType'
    >
  >;
  addEndpoints?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationAddEndpointsArgs, 'eps'>
  >;
  addFeedback?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationAddFeedbackArgs>
  >;
  addLocation?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationAddLocationArgs, 'lat' | 'long' | 'name'>
  >;
  addNote?: Resolver<Maybe<ResolversTypes['NoteEntity']>, ParentType, ContextType, Partial<HeatingMutationAddNoteArgs>>;
  addSwitch?: Resolver<
    Maybe<ResolversTypes['SwitchSnapshot']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationAddSwitchArgs>
  >;
  addSwitchPlan?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationAddSwitchPlanArgs>
  >;
  addUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationAddUserArgs, 'email' | 'password'>
  >;
  adminDeleteLocation?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationAdminDeleteLocationArgs, 'lid' | 'uid'>
  >;
  adminDeviceDelete?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationAdminDeviceDeleteArgs, 'lid'>
  >;
  adminFields?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationAdminFieldsArgs>
  >;
  adminFirmware?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationAdminFirmwareArgs>
  >;
  cancelAllOverrides?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationCancelAllOverridesArgs>
  >;
  cancelHoliday?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationCancelHolidayArgs, 'lid'>
  >;
  cancelOverride?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationCancelOverrideArgs>
  >;
  cancelSwitch?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationCancelSwitchArgs>
  >;
  changeEmail?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationChangeEmailArgs>
  >;
  changePassword?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationChangePasswordArgs>
  >;
  createShadow?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationCreateShadowArgs, 'serial' | 'token' | 'type'>
  >;
  deleteDevice?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeleteDeviceArgs, 'lid' | 'rid'>
  >;
  deleteLocation?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeleteLocationArgs, 'lid'>
  >;
  deltaTemperature?: Resolver<
    Maybe<ResolversTypes['Thermostat4iE']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationDeltaTemperatureArgs>
  >;
  deviceAdvanced?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceAdvancedArgs, 'lid'>
  >;
  deviceFixed?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceFixedArgs, 'lid'>
  >;
  deviceFrost?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceFrostArgs, 'lid'>
  >;
  deviceHoliday?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceHolidayArgs, 'lid' | 'temperature'>
  >;
  deviceOff?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceOffArgs, 'lid'>
  >;
  deviceOverride?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceOverrideArgs, 'lid' | 'minutes' | 'temperature'>
  >;
  deviceProgram?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceProgramArgs, 'lid'>
  >;
  deviceReLoad?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationDeviceReLoadArgs>
  >;
  deviceSchedule?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationDeviceScheduleArgs, 'lid' | 'schedule'>
  >;
  disableBeta?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationDisableBetaArgs>
  >;
  dismissNotice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enableBeta?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<HeatingMutationEnableBetaArgs>>;
  fwShadow?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationFwShadowArgs, 'serial' | 'token' | 'type'>
  >;
  gen2Cvm?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationGen2CvmArgs, 'serial' | 'token'>
  >;
  initShadow?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationInitShadowArgs, 'serial' | 'token' | 'type'>
  >;
  locationAdvanced?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationLocationAdvancedArgs, 'lid'>
  >;
  portalLogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  removeGuestShare?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationRemoveGuestShareArgs>
  >;
  removeMe?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationRemoveMeArgs, 'password'>
  >;
  removeMobile?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationRemoveMobileArgs, 'lid'>
  >;
  removeMyShare?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationRemoveMyShareArgs>
  >;
  resetMobileName?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationResetMobileNameArgs>
  >;
  sendSmsPin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  setAutoPreferences?: Resolver<
    Maybe<ResolversTypes['AutoProperties']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationSetAutoPreferencesArgs>
  >;
  setComfortTemp?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationSetComfortTempArgs, 'comfTemp'>
  >;
  setGeo?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationSetGeoArgs, 'geo' | 'lid'>
  >;
  setMessageCloudToken?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationSetMessageCloudTokenArgs>
  >;
  setRoomMode?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationSetRoomModeArgs, 'roomMode'>
  >;
  setTemperature?: Resolver<
    Maybe<ResolversTypes['Thermostat4iE']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationSetTemperatureArgs>
  >;
  setZones?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationSetZonesArgs, 'locZones'>
  >;
  shareLocation?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['InviteLocationConfirmationEntity']>>>,
    ParentType,
    ContextType,
    Partial<HeatingMutationShareLocationArgs>
  >;
  turnOff?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, Partial<HeatingMutationTurnOffArgs>>;
  turnOn?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, Partial<HeatingMutationTurnOnArgs>>;
  updateProfile?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationUpdateProfileArgs>
  >;
  updateSleep?: Resolver<
    Maybe<ResolversTypes['Room']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationUpdateSleepArgs>
  >;
  updateSwitchReport?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationUpdateSwitchReportArgs>
  >;
  upgradeLatestFw?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationUpgradeLatestFwArgs, 'lid'>
  >;
  upgradeShadow?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<HeatingMutationUpgradeShadowArgs, 'serial' | 'token' | 'type'>
  >;
  validatePin?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    Partial<HeatingMutationValidatePinArgs>
  >;
};

export type HeatingQueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HeatingQuery'] = ResolversParentTypes['HeatingQuery'],
> = {
  serverDateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  support?: Resolver<Maybe<ResolversTypes['Support']>, ParentType, ContextType>;
  trace?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['MainVersion']>, ParentType, ContextType>;
};

export type HolidayResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Holiday'] = ResolversParentTypes['Holiday'],
> = {
  holEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holStart?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InviteLocationConfirmationEntityResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['InviteLocationConfirmationEntity'] = ResolversParentTypes['InviteLocationConfirmationEntity'],
> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  invitedEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type LocZoneResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LocZone'] = ResolversParentTypes['LocZone'],
> = {
  isHoming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location'],
> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  devices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Thermostat4iE']>>>,
    ParentType,
    ContextType,
    Partial<LocationDevicesArgs>
  >;
  electricity?: Resolver<Maybe<ResolversTypes['Tariff']>, ParentType, ContextType>;
  fence?: Resolver<Maybe<ResolversTypes['Fence']>, ParentType, ContextType>;
  fenceArray?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  gas?: Resolver<Maybe<ResolversTypes['Tariff']>, ParentType, ContextType>;
  geoLocation?: Resolver<Maybe<ResolversTypes['GeoLocation']>, ParentType, ContextType>;
  geoMode?: Resolver<Maybe<ResolversTypes['GeoMode']>, ParentType, ContextType>;
  geoModeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holiday?: Resolver<Maybe<ResolversTypes['Holiday']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isHoming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOwner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locMode?: Resolver<Maybe<ResolversTypes['ValidLocationMode']>, ParentType, ContextType>;
  locModeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  locZone?: Resolver<Maybe<ResolversTypes['LocZone']>, ParentType, ContextType>;
  mobiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregateMobile']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['RestrictedUser']>, ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<LocationRoomArgs, 'id'>>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType, Partial<LocationRoomsArgs>>;
  settings?: Resolver<Maybe<ResolversTypes['LocationSettings']>, ParentType, ContextType>;
  tariffType?: Resolver<Maybe<ResolversTypes['TariffType']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zone?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LocationSettings'] = ResolversParentTypes['LocationSettings'],
> = {
  heatUpDPH?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFahrenheit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSmartGeo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locMode?: Resolver<Maybe<ResolversTypes['LocationMode']>, ParentType, ContextType>;
  mainRoom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  speedKPH?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationShareObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LocationShareObject'] = ResolversParentTypes['LocationShareObject'],
> = {
  joinerEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  joinerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LoginInfo'] = ResolversParentTypes['LoginInfo'],
> = {
  hasLoggedIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MainVersionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MainVersion'] = ResolversParentTypes['MainVersion'],
> = {
  minimum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recommended?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobileDeviceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MobileDevice'] = ResolversParentTypes['MobileDevice'],
> = {
  appId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoteEntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NoteEntity'] = ResolversParentTypes['NoteEntity'],
> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParametersWithChangeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ParametersWithChange'] = ResolversParentTypes['ParametersWithChange'],
> = {
  adaptLearn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  airTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  audio?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brightness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brightnessStdby?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  changes?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  controlMethod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateFormat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceSN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  efficiency?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  faultAir?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  faultFloor1?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  faultFloor2?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  faultSystem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fixedDuty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fixedTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  floor1Temp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  floor2Temp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  floorType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fpAFTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fpComfTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fpEconTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fwVer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gradDur?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gradTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heatingTarget?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holidayDuty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holidayEnd?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holidayStart?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holidayTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  homeBG?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  homeStyle?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  localTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lockCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ntcTypeFloor1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ntcTypeFloor2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offsetAir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offsetFloor1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offsetFloor2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outputStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  overheatLimitAir?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  overheatLimitFloor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  overrideDur?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  overrideDuty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  overrideTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pollRate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  probeApp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progMax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progMin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rssi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runMode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  setbackDuty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  setbackTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sync?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  systemPower?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  systemType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tPID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tPWM?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  targetDuty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  targetTemp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tariff1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tariff2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tariff2End?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tariff2Start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tempFormat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text1?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  text2?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  timeFormat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalOnLow?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalOnTtl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weather?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolicyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Policy'] = ResolversParentTypes['Policy'],
> = {
  isPrivacyPolicy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTermsOfUse?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestrictedUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RestrictedUser'] = ResolversParentTypes['RestrictedUser'],
> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room'],
> = {
  availableFloorTypes?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  availableLocationIds?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  awayTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comfortTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  energy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  energyChart?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, Partial<RoomEnergyChartArgs>>;
  fixedTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  floorType?: Resolver<Maybe<ResolversTypes['FloorType']>, ParentType, ContextType>;
  floorTypeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isMainRoom?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSleepActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  legacyChart?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  mainLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  overrideDur?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  overrideTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  parentLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  portalRoomChart?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  roomMode?: Resolver<Maybe<ResolversTypes['RoomMode']>, ParentType, ContextType>;
  roomModeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  roomName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>;
  roomTypeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  roomTypeStr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runMode?: Resolver<Maybe<ResolversTypes['RunMode']>, ParentType, ContextType>;
  runModeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  secondaryLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sleepTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  targetTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thermostat4ies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thermostat4iE']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RoomSettings'] = ResolversParentTypes['RoomSettings'],
> = {
  mode?: Resolver<Maybe<ResolversTypes['RoomMode']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preset?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SleepResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sleep'] = ResolversParentTypes['Sleep'],
> = {
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  json?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  temperature?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupportResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Support'] = ResolversParentTypes['Support'],
> = {
  dashboard?: Resolver<Maybe<ResolversTypes['DashboardStats']>, ParentType, ContextType>;
  deviceStatistics?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['DeviceAccessStatistic']>>>,
    ParentType,
    ContextType,
    RequireFields<SupportDeviceStatisticsArgs, 'sn'>
  >;
  email?: Resolver<
    Maybe<ResolversTypes['EmailRecordEntity']>,
    ParentType,
    ContextType,
    RequireFields<SupportEmailArgs, 'id'>
  >;
  emails?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['EmailRecordEntity']>>>,
    ParentType,
    ContextType,
    Partial<SupportEmailsArgs>
  >;
  feedback?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['AppFeedbackEntity']>>>,
    ParentType,
    ContextType,
    Partial<SupportFeedbackArgs>
  >;
  getAudienceToken?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<SupportGetAudienceTokenArgs>
  >;
  homeserveOrders?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    Partial<SupportHomeserveOrdersArgs>
  >;
  latestRecords?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['DeviceShortLog']>>>,
    ParentType,
    ContextType,
    RequireFields<SupportLatestRecordsArgs, 'sn'>
  >;
  notes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['NoteEntity']>>>,
    ParentType,
    ContextType,
    RequireFields<SupportNotesArgs, 'userId'>
  >;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<SupportRoomArgs, 'id'>>;
  rooms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Room']>>>,
    ParentType,
    ContextType,
    RequireFields<SupportRoomsArgs, 'sn'>
  >;
  timeseries?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    RequireFields<SupportTimeseriesArgs, 'sn'>
  >;
  todayChanges?: Resolver<
    Maybe<ResolversTypes['Json']>,
    ParentType,
    ContextType,
    RequireFields<SupportTodayChangesArgs, 'sn'>
  >;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<SupportUserArgs, 'id'>>;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<SupportUsersArgs, 'email'>
  >;
  voucherBatch?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['VoucherBatch']>>>,
    ParentType,
    ContextType,
    Partial<SupportVoucherBatchArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwitchReportResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SwitchReport'] = ResolversParentTypes['SwitchReport'],
> = {
  confirmedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reportDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['SwitchState']>, ParentType, ContextType>;
  switchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SwitchSnapshotResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SwitchSnapshot'] = ResolversParentTypes['SwitchSnapshot'],
> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  savings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supplierId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  supplierLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supplierName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  switchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tariffId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tariffName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['RestrictedUser']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TariffResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tariff'] = ResolversParentTypes['Tariff'],
> = {
  cost?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Thermostat4iEResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Thermostat4iE'] = ResolversParentTypes['Thermostat4iE'],
> = {
  airTemp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appFw?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availableLanguages?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  backgroundURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bgImageId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comfortTemp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceSN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  floor1Temp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  floor2Temp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoLocation?: Resolver<Maybe<ResolversTypes['GeoLocation']>, ParentType, ContextType>;
  geoProg?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPolled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  heatingTarget?: Resolver<Maybe<ResolversTypes['HeatingTarget']>, ParentType, ContextType>;
  heatingTargetInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  homeBG?: Resolver<Maybe<ResolversTypes['HomeBackground']>, ParentType, ContextType>;
  homeBGInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  homeStyle?: Resolver<Maybe<ResolversTypes['HomeStyle']>, ParentType, ContextType>;
  homeStyleInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFaultAir?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFaultFloor1?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFaultFloor2?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastPoll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minTemp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<ResolversTypes['ParametersWithChange']>, ParentType, ContextType>;
  passwordSet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pendingLast?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  powerSource?: Resolver<Maybe<ResolversTypes['PowerSource']>, ParentType, ContextType>;
  powerSourceInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  roads?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomSettings?: Resolver<Maybe<ResolversTypes['RoomSettings']>, ParentType, ContextType>;
  runMode?: Resolver<Maybe<ResolversTypes['RunMode']>, ParentType, ContextType>;
  sleep?: Resolver<Maybe<ResolversTypes['Sleep']>, ParentType, ContextType>;
  smartOverride?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  systemType?: Resolver<Maybe<ResolversTypes['SystemType']>, ParentType, ContextType>;
  systemTypeInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedPortal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wifiFw?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  access?: Resolver<Maybe<ResolversTypes['UserAccess']>, ParentType, ContextType>;
  betaState?: Resolver<Maybe<ResolversTypes['EnabledState']>, ParentType, ContextType>;
  betaStateInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credentials?: Resolver<Maybe<ResolversTypes['Expire']>, ParentType, ContextType>;
  defaultLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['Expire']>, ParentType, ContextType>;
  findLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, Partial<UserFindLocationArgs>>;
  guestShares?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['InviteLocationConfirmationEntity']>>>,
    ParentType,
    ContextType,
    Partial<UserGuestSharesArgs>
  >;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  legacyToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, Partial<UserLocationArgs>>;
  locations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Location']>>>,
    ParentType,
    ContextType,
    Partial<UserLocationsArgs>
  >;
  loginInfo?: Resolver<Maybe<ResolversTypes['LoginInfo']>, ParentType, ContextType>;
  mobile?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggregateMobile']>>>, ParentType, ContextType>;
  mobileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mobileNoticeCheck?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  myShares?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['LocationShareObject']>>>,
    ParentType,
    ContextType,
    Partial<UserMySharesArgs>
  >;
  optInMarketing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  owned?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType, Partial<UserOwnedArgs>>;
  ownedMobiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['MobileDevice']>>>, ParentType, ContextType>;
  passwordRequestedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  policy?: Resolver<Maybe<ResolversTypes['Policy']>, ParentType, ContextType>;
  switchPlan?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  switchProperties?: Resolver<Maybe<ResolversTypes['AutoProperties']>, ParentType, ContextType>;
  switchReports?: Resolver<
    Maybe<ResolversTypes['SwitchReport']>,
    ParentType,
    ContextType,
    Partial<UserSwitchReportsArgs>
  >;
  tokenInfo?: Resolver<Maybe<ResolversTypes['UserTokenInfo']>, ParentType, ContextType>;
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  verifyPassword?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<UserVerifyPasswordArgs, 'pass'>
  >;
  visibility?: Resolver<Maybe<ResolversTypes['UserVisibility']>, ParentType, ContextType>;
  visibleDevice?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<UserVisibleDeviceArgs, 'serial'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccessResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserAccess'] = ResolversParentTypes['UserAccess'],
> = {
  accessGrant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessRequest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile'],
> = {
  contactNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferredLanguage?: Resolver<Maybe<ResolversTypes['SupportedLanguage']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserTokenInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserTokenInfo'] = ResolversParentTypes['UserTokenInfo'],
> = {
  apiToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  apiTokenCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  apiTokenUpdated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  changeEmailToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmationToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVisibilityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserVisibility'] = ResolversParentTypes['UserVisibility'],
> = {
  isEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoucherResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Voucher'] = ResolversParentTypes['Voucher'],
> = {
  batchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  redeemedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  voucher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoucherBatchResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VoucherBatch'] = ResolversParentTypes['VoucherBatch'],
> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['HomeserveProduct']>, ParentType, ContextType>;
  redeemed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vouchers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Voucher']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessDay?: AccessDayResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  AggregateMobile?: AggregateMobileResolvers<ContextType>;
  AppFeedbackEntity?: AppFeedbackEntityResolvers<ContextType>;
  AppVersion?: AppVersionResolvers<ContextType>;
  AutoProperties?: AutoPropertiesResolvers<ContextType>;
  DashboardStats?: DashboardStatsResolvers<ContextType>;
  DeviceAccessStatistic?: DeviceAccessStatisticResolvers<ContextType>;
  DeviceShortLog?: DeviceShortLogResolvers<ContextType>;
  EmailRecordEntity?: EmailRecordEntityResolvers<ContextType>;
  Expire?: ExpireResolvers<ContextType>;
  Fence?: FenceResolvers<ContextType>;
  GeneralStatistic?: GeneralStatisticResolvers<ContextType>;
  GeoLocation?: GeoLocationResolvers<ContextType>;
  HeatingMutation?: HeatingMutationResolvers<ContextType>;
  HeatingQuery?: HeatingQueryResolvers<ContextType>;
  Holiday?: HolidayResolvers<ContextType>;
  InviteLocationConfirmationEntity?: InviteLocationConfirmationEntityResolvers<ContextType>;
  Json?: GraphQLScalarType;
  LocZone?: LocZoneResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationSettings?: LocationSettingsResolvers<ContextType>;
  LocationShareObject?: LocationShareObjectResolvers<ContextType>;
  LoginInfo?: LoginInfoResolvers<ContextType>;
  MainVersion?: MainVersionResolvers<ContextType>;
  MobileDevice?: MobileDeviceResolvers<ContextType>;
  NoteEntity?: NoteEntityResolvers<ContextType>;
  ParametersWithChange?: ParametersWithChangeResolvers<ContextType>;
  Policy?: PolicyResolvers<ContextType>;
  RestrictedUser?: RestrictedUserResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  RoomSettings?: RoomSettingsResolvers<ContextType>;
  Sleep?: SleepResolvers<ContextType>;
  Support?: SupportResolvers<ContextType>;
  SwitchReport?: SwitchReportResolvers<ContextType>;
  SwitchSnapshot?: SwitchSnapshotResolvers<ContextType>;
  Tariff?: TariffResolvers<ContextType>;
  Thermostat4iE?: Thermostat4iEResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAccess?: UserAccessResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
  UserTokenInfo?: UserTokenInfoResolvers<ContextType>;
  UserVisibility?: UserVisibilityResolvers<ContextType>;
  Voucher?: VoucherResolvers<ContextType>;
  VoucherBatch?: VoucherBatchResolvers<ContextType>;
};
