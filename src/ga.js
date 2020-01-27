import ga from "react-ga";

let debug = false;
if (process.env.NODE_ENV === "development") {
  debug = true;
}

ga.initialize("UA-154624579-1", {
  titleCase: false,
  debug,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});

export default ga;
