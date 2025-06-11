export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // hour '0' should be '12'

  return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
};

export const splitDateAndTime = (date) => {
  const newString = date.split("T");
  const humanDate = newString[0];
  const time = newString[1];
  return { humanDate, time };
};

export const wordLimit = (des) => {
  const words = des.match(/\b\w+\b/g) || [];
  if (words.length > 65) {
    return words.slice(0, 65).join(" ") + "...";
  } else {
    return des;
  }
};
