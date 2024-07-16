import QRCode from "qrcode";

const makeQrCode = async (value = "Taufik") => {
  try {
    var opts = {
      errorCorrectionLevel: "H",
      type: "svg",
      quality: 0.3,
      margin: 1,
      color: {
        light: "#FFFFFF",
      },
    };
    const url = await QRCode.toString(value, opts);
    return `${url}`;
  } catch (error) {
    console.log("qrcode generate failed");
  }
};

export { makeQrCode };
