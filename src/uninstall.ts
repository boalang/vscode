// remove secure stored data
import AuthSettings from './password'
const settings = AuthSettings.instance;
settings.uninstall();
