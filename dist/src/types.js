"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidLocationMode = exports.ThermostatTimeFormat = exports.TariffType = exports.SystemType = exports.SwitchState = exports.SupportedLanguage = exports.RunMode = exports.RoomType = exports.RoomMode = exports.RegulatorType = exports.PowerSource = exports.MobileType = exports.LocationMode = exports.Language = exports.HomeserveProduct = exports.HomeStyle = exports.HomeBackground = exports.HeatingTarget = exports.GeoMode = exports.FloorType = exports.FloorSensorType = exports.ExternalTerminalFunction = exports.EnabledState = exports.EmailType = exports.DisplayedProbe = exports.DeviceType = exports.Currency4iE = exports.ClientId = exports.BrandInput = exports.Brand = exports.AudienceType = void 0;
var AudienceType;
(function (AudienceType) {
    /** DEVICE_ACCESS */
    AudienceType["DeviceAccess"] = "device_access";
})(AudienceType || (exports.AudienceType = AudienceType = {}));
var Brand;
(function (Brand) {
    /** EQUUS */
    Brand["Equus"] = "equus";
    /** LATICRETE */
    Brand["Laticrete"] = "laticrete";
    /** OTHER */
    Brand["Other"] = "other";
    /** PORCELANOSA */
    Brand["Porcelanosa"] = "porcelanosa";
    /** ROINTE */
    Brand["Rointe"] = "rointe";
    /** SAVANT */
    Brand["Savant"] = "savant";
    /** WARMUP */
    Brand["Warmup"] = "warmup";
})(Brand || (exports.Brand = Brand = {}));
var BrandInput;
(function (BrandInput) {
    /** ALL */
    BrandInput["All"] = "all";
    /** EQUUS */
    BrandInput["Equus"] = "equus";
    /** INHERITED */
    BrandInput["Inherited"] = "inherited";
    /** LATICRETE */
    BrandInput["Laticrete"] = "laticrete";
    /** OTHER */
    BrandInput["Other"] = "other";
    /** PORCELANOSA */
    BrandInput["Porcelanosa"] = "porcelanosa";
    /** ROINTE */
    BrandInput["Rointe"] = "rointe";
    /** SAVANT */
    BrandInput["Savant"] = "savant";
    /** WARMUP */
    BrandInput["Warmup"] = "warmup";
})(BrandInput || (exports.BrandInput = BrandInput = {}));
var ClientId;
(function (ClientId) {
    /** AMAZON_ALEXA_WARMUP */
    ClientId["AmazonAlexaWarmup"] = "amazon_alexa_warmup";
    /** APIQL */
    ClientId["Apiql"] = "apiql";
    /** CONTROL4 */
    ClientId["Control4"] = "control4";
    /** EASY_SWITCH */
    ClientId["EasySwitch"] = "easy_switch";
    /** EQUUS */
    ClientId["Equus"] = "equus";
    /** GOOGLE */
    ClientId["Google"] = "google";
    /** GRAPHIQL */
    ClientId["Graphiql"] = "graphiql";
    /** IFTTT_WARMUP */
    ClientId["IftttWarmup"] = "ifttt_warmup";
    /** LATICRETE */
    ClientId["Laticrete"] = "laticrete";
    /** LIGHTWAVE */
    ClientId["Lightwave"] = "lightwave";
    /** LIGHTWAVE_TEST */
    ClientId["LightwaveTest"] = "lightwave_test";
    /** PASSWORD */
    ClientId["Password"] = "password";
    /** PORCELANOSA */
    ClientId["Porcelanosa"] = "porcelanosa";
    /** PRIVATE */
    ClientId["Private"] = "private";
    /** ROINTE */
    ClientId["Rointe"] = "rointe";
    /** SAVANT */
    ClientId["Savant"] = "savant";
    /** WARMUP */
    ClientId["Warmup"] = "warmup";
})(ClientId || (exports.ClientId = ClientId = {}));
var Currency4iE;
(function (Currency4iE) {
    /** DOLLAR */
    Currency4iE["Dollar"] = "dollar";
    /** EURO */
    Currency4iE["Euro"] = "euro";
    /** KRONE */
    Currency4iE["Krone"] = "krone";
    /** KUNA */
    Currency4iE["Kuna"] = "kuna";
    /** POUND */
    Currency4iE["Pound"] = "pound";
    /** YEN_YUAN */
    Currency4iE["YenYuan"] = "yen_yuan";
    /** ZLOTY */
    Currency4iE["Zloty"] = "zloty";
})(Currency4iE || (exports.Currency4iE = Currency4iE = {}));
var DeviceType;
(function (DeviceType) {
    /** D4IE */
    DeviceType["D4ie"] = "d4ie";
    /** D6IE */
    DeviceType["D6ie"] = "d6ie";
    /** DRSW */
    DeviceType["Drsw"] = "drsw";
    /** DSTR fake type DO NOT use it! */
    DeviceType["Dstr"] = "dstr";
    /** RSW */
    DeviceType["Rsw"] = "rsw";
})(DeviceType || (exports.DeviceType = DeviceType = {}));
var DisplayedProbe;
(function (DisplayedProbe) {
    /** AMB */
    DisplayedProbe["Amb"] = "amb";
    /** FLOOR */
    DisplayedProbe["Floor"] = "floor";
})(DisplayedProbe || (exports.DisplayedProbe = DisplayedProbe = {}));
var EmailType;
(function (EmailType) {
    /** ACCOUNT_RECOVERY */
    EmailType["AccountRecovery"] = "account_recovery";
    /** CHANGE_EMAIL */
    EmailType["ChangeEmail"] = "change_email";
    /** FORGOTTEN_PASSWORD */
    EmailType["ForgottenPassword"] = "forgotten_password";
    /** FORGOTTEN_PASSWORD_SWITCH */
    EmailType["ForgottenPasswordSwitch"] = "forgotten_password_switch";
    /** INVITE_SHARE_LOCATION */
    EmailType["InviteShareLocation"] = "invite_share_location";
    /** REGISTER */
    EmailType["Register"] = "register";
    /** REGISTER_SWITCH */
    EmailType["RegisterSwitch"] = "register_switch";
    /** REMOVE_SHARE_LOCATION */
    EmailType["RemoveShareLocation"] = "remove_share_location";
    /** TEST */
    EmailType["Test"] = "test";
})(EmailType || (exports.EmailType = EmailType = {}));
var EnabledState;
(function (EnabledState) {
    /** ANDROID */
    EnabledState["Android"] = "android";
    /** BOTH */
    EnabledState["Both"] = "both";
    /** I_OS */
    EnabledState["IOs"] = "i_os";
    /** NONE */
    EnabledState["None"] = "none";
})(EnabledState || (exports.EnabledState = EnabledState = {}));
var ExternalTerminalFunction;
(function (ExternalTerminalFunction) {
    /** MASTER_CONTROL */
    ExternalTerminalFunction["MasterControl"] = "master_control";
    /** NO_FUNCTION */
    ExternalTerminalFunction["NoFunction"] = "no_function";
    /** OVERHEAT_SENSOR */
    ExternalTerminalFunction["OverheatSensor"] = "overheat_sensor";
    /** RELAY_DEVICE */
    ExternalTerminalFunction["RelayDevice"] = "relay_device";
})(ExternalTerminalFunction || (exports.ExternalTerminalFunction = ExternalTerminalFunction = {}));
var FloorSensorType;
(function (FloorSensorType) {
    /** NONE */
    FloorSensorType["None"] = "none";
    /** W10K */
    FloorSensorType["W10k"] = "w10k";
    /** W12K */
    FloorSensorType["W12k"] = "w12k";
    /** W15K */
    FloorSensorType["W15k"] = "w15k";
})(FloorSensorType || (exports.FloorSensorType = FloorSensorType = {}));
var FloorType;
(function (FloorType) {
    /** CARPET */
    FloorType["Carpet"] = "carpet";
    /** LAMINATE */
    FloorType["Laminate"] = "laminate";
    /** TILE_STONE */
    FloorType["TileStone"] = "tile_stone";
    /** USER_DEFINED */
    FloorType["UserDefined"] = "user_defined";
    /** VINYL */
    FloorType["Vinyl"] = "vinyl";
    /** WOOD */
    FloorType["Wood"] = "wood";
})(FloorType || (exports.FloorType = FloorType = {}));
var GeoMode;
(function (GeoMode) {
    /** DISABLED */
    GeoMode["NotUsed"] = "not_used";
    /** INVISIBLE */
    GeoMode["UsedInvisible"] = "used_invisible";
    /** ENABLED */
    GeoMode["UsedVisible"] = "used_visible";
})(GeoMode || (exports.GeoMode = GeoMode = {}));
var HeatingTarget;
(function (HeatingTarget) {
    /** AIR */
    HeatingTarget["Air"] = "air";
    /** FLOOR */
    HeatingTarget["Floor"] = "floor";
})(HeatingTarget || (exports.HeatingTarget = HeatingTarget = {}));
var HomeBackground;
(function (HomeBackground) {
    /** DARK */
    HomeBackground["Dark"] = "dark";
    /** LIGHT */
    HomeBackground["Light"] = "light";
    /** PURE_BLACK */
    HomeBackground["PureBlack"] = "pure_black";
    /** USER_UPLOADED */
    HomeBackground["UserUploaded"] = "user_uploaded";
})(HomeBackground || (exports.HomeBackground = HomeBackground = {}));
var HomeStyle;
(function (HomeStyle) {
    /** FLIPPING_CLOCK */
    HomeStyle["FlippingClock"] = "flipping_clock";
    /** MINIMALIST */
    HomeStyle["Minimalist"] = "minimalist";
    /** TEMPERATURE */
    HomeStyle["Temperature"] = "temperature";
    /** TIME */
    HomeStyle["Time"] = "time";
})(HomeStyle || (exports.HomeStyle = HomeStyle = {}));
var HomeserveProduct;
(function (HomeserveProduct) {
    /** DEMO_INSTALL */
    HomeserveProduct["DemoInstall"] = "demo_install";
    /** WARMUP_5IE */
    HomeserveProduct["Warmup_5ie"] = "warmup_5ie";
})(HomeserveProduct || (exports.HomeserveProduct = HomeserveProduct = {}));
var Language;
(function (Language) {
    /** GERMAN */
    Language["De"] = "de";
    /** ENGLISH */
    Language["En"] = "en";
    /** SPANISH */
    Language["Es"] = "es";
    /** FRENCH */
    Language["Fr"] = "fr";
    /** CROATIAN */
    Language["Hr"] = "hr";
    /** ITALIAN */
    Language["It"] = "it";
    /** DUTCH */
    Language["Nl"] = "nl";
    /** NORWEGIAN */
    Language["No"] = "no";
    /** POLISH */
    Language["Pl"] = "pl";
    /** PORTUGUESE */
    Language["Pt"] = "pt";
    /** ROMANIAN */
    Language["Ro"] = "ro";
    /** SLOVAKIAN */
    Language["Sk"] = "sk";
    /** SLOVENIAN */
    Language["Sl"] = "sl";
    /** SWEDISH */
    Language["Sv"] = "sv";
    /** TURKISH */
    Language["Tr"] = "tr";
})(Language || (exports.Language = Language = {}));
var LocationMode;
(function (LocationMode) {
    /** FROST */
    LocationMode["Frost"] = "frost";
    /** OFF */
    LocationMode["Off"] = "off";
    /** ON */
    LocationMode["On"] = "on";
})(LocationMode || (exports.LocationMode = LocationMode = {}));
var MobileType;
(function (MobileType) {
    /** ANDROID */
    MobileType["Android"] = "Android";
    /** I_OS */
    MobileType["IOs"] = "iOS";
})(MobileType || (exports.MobileType = MobileType = {}));
var PowerSource;
(function (PowerSource) {
    /** ELECTRICITY */
    PowerSource["Electricity"] = "electricity";
    /** GAS */
    PowerSource["Gas"] = "gas";
})(PowerSource || (exports.PowerSource = PowerSource = {}));
var RegulatorType;
(function (RegulatorType) {
    /** PID */
    RegulatorType["Pid"] = "pid";
    /** PWM */
    RegulatorType["Pwm"] = "pwm";
})(RegulatorType || (exports.RegulatorType = RegulatorType = {}));
var RoomMode;
(function (RoomMode) {
    /** FIXED */
    RoomMode["Fixed"] = "fixed";
    /** PROGRAM */
    RoomMode["Program"] = "program";
    /** UNDEFINED */
    RoomMode["Undefined"] = "undefined";
})(RoomMode || (exports.RoomMode = RoomMode = {}));
var RoomType;
(function (RoomType) {
    /** BATHROOM */
    RoomType["Bathroom"] = "bathroom";
    /** BEDROOM */
    RoomType["Bedroom"] = "bedroom";
    /** GENERAL */
    RoomType["General"] = "general";
    /** KITCHEN */
    RoomType["Kitchen"] = "kitchen";
    /** LIVING_ROOM */
    RoomType["LivingRoom"] = "living_room";
})(RoomType || (exports.RoomType = RoomType = {}));
var RunMode;
(function (RunMode) {
    /** ANTI_FROST */
    RunMode["AntiFrost"] = "anti_frost";
    /** FIL_PILOTE */
    RunMode["FilPilote"] = "fil_pilote";
    /** FIXED */
    RunMode["Fixed"] = "fixed";
    /** GRADUAL */
    RunMode["Gradual"] = "gradual";
    /** HOLIDAY */
    RunMode["Holiday"] = "holiday";
    /** NOT_SET */
    RunMode["NotSet"] = "not_set";
    /** OFF */
    RunMode["Off"] = "off";
    /** OVERRIDE */
    RunMode["Override"] = "override";
    /** PREVIOUS */
    RunMode["Previous"] = "previous";
    /** RELAY */
    RunMode["Relay"] = "relay";
    /** SCHEDULE */
    RunMode["Schedule"] = "schedule";
})(RunMode || (exports.RunMode = RunMode = {}));
var SupportedLanguage;
(function (SupportedLanguage) {
    /** GERMAN */
    SupportedLanguage["DeDe"] = "de_DE";
    /** ENGLISH */
    SupportedLanguage["EnGb"] = "en_GB";
    /** SPANISH */
    SupportedLanguage["EsEs"] = "es_ES";
    /** FRENCH */
    SupportedLanguage["FrFr"] = "fr_FR";
    /** CROATIAN */
    SupportedLanguage["HrHr"] = "hr_HR";
    /** DUTCH */
    SupportedLanguage["NlNl"] = "nl_NL";
    /** POLISH */
    SupportedLanguage["PlPl"] = "pl_PL";
    /** PORTUGUESE */
    SupportedLanguage["PtPt"] = "pt_PT";
    /** ROMANIAN */
    SupportedLanguage["RoRo"] = "ro_RO";
    /** SLOVAKIAN */
    SupportedLanguage["SkSk"] = "sk_SK";
    /** UNDEFINED */
    SupportedLanguage["Undefined"] = "undefined";
})(SupportedLanguage || (exports.SupportedLanguage = SupportedLanguage = {}));
var SwitchState;
(function (SwitchState) {
    /** APPROVED */
    SwitchState["Approved"] = "approved";
    /** CANCELLED */
    SwitchState["Cancelled"] = "cancelled";
    /** PENDING */
    SwitchState["Pending"] = "pending";
    /** SWITCH_FAILED */
    SwitchState["SwitchFailed"] = "switch_failed";
    /** SWITCHED */
    SwitchState["Switched"] = "switched";
})(SwitchState || (exports.SwitchState = SwitchState = {}));
var SystemType;
(function (SystemType) {
    /** CONVENTIONAL */
    SystemType["Conventional"] = "conventional";
    /** ELECTRIC */
    SystemType["Electric"] = "electric";
    /** ELECTRIC_RELAY */
    SystemType["ElectricRelay"] = "electric_relay";
    /** HYDRONIC */
    SystemType["Hydronic"] = "hydronic";
})(SystemType || (exports.SystemType = SystemType = {}));
var TariffType;
(function (TariffType) {
    /** DUAL - both electricity and gas */
    TariffType["Dual"] = "dual";
    /** SINGLE - only one source, electricity or gas */
    TariffType["Single"] = "single";
})(TariffType || (exports.TariffType = TariffType = {}));
var ThermostatTimeFormat;
(function (ThermostatTimeFormat) {
    /** H12 */
    ThermostatTimeFormat["H12"] = "h12";
    /** H24 */
    ThermostatTimeFormat["H24"] = "h24";
})(ThermostatTimeFormat || (exports.ThermostatTimeFormat = ThermostatTimeFormat = {}));
var ValidLocationMode;
(function (ValidLocationMode) {
    /** FROST */
    ValidLocationMode["Frost"] = "frost";
    /** GEO */
    ValidLocationMode["Geo"] = "geo";
    /** HOLIDAY */
    ValidLocationMode["Holiday"] = "holiday";
    /** NOT_GEO */
    ValidLocationMode["NotGeo"] = "not_geo";
    /** OFF */
    ValidLocationMode["Off"] = "off";
})(ValidLocationMode || (exports.ValidLocationMode = ValidLocationMode = {}));
//# sourceMappingURL=types.js.map