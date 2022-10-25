const niceName = (name: string) => {
  return `${name[0]}. ${name.split(" ").slice(1).join(" ")}`;
};

export default niceName;
