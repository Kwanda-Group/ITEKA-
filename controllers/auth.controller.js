// modules/auth/auth.controller.js
import * as AuthService from "../modules/auth.service.js";
import UAParser from "ua-parser-js";

//create a get device info function
const getDeviceInfo = (req) => {
  const parser = new UAParser(req.headers["user-agent"]);
  const ua = parser.getResult();

  const ip = req.headers["x-forwarded-for"]?.split(',')[0]?.trim() || req.socket.remoteAddress || req.ip;
  return {
    ip,
    device: {
      browser: ua.browser.name,
      browser_version: ua.browser.version,
      os: ua.os.name,
      os_version: ua.os.version,
      device_type: ua.device.type || "desktop",
      vendor: ua.device.vendor,
      model: ua.device.model,
      engine: ua.engine.name,
      raw_ua: ua.ua
    }
  }
}

export const register = async (req, res, next) => {
  try {
    const user = await AuthService.registerUser(req.body);
    res.status(201).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const clientInfo = getDeviceInfo(req);
    const result = await AuthService.loginUser({
      ...req.body,
      ...clientInfo
    });

    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};
