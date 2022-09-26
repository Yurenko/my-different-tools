
export const formatCardNumber = (value) => {
  let v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  let matches = v.match(/\d{4,16}/g);
  let match = (matches && matches[0]) || "";
  let parts = [];
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
};

export const getCardType = (number) => {
  let re = new RegExp("^4");
  if (number.match(re) != null) return "visa";
  re = new RegExp("^(34|37)");
  if (number.match(re) != null) return "amex";
  re = new RegExp("^5[1-5]");
  if (number.match(re) != null) return "mastercard";
  re = new RegExp("^6011");
  if (number.match(re) != null) return "discover";
  return "visa";
};
