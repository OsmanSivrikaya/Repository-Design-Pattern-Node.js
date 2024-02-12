exports.getData = (req, res) => {
  let data = [
    {
      name: "Ahmet",
      surname: "Yılmaz",
      age: "10",
      email: "ejeyd@example.com",
    },
    {
      name: "Mehmet",
      surname: "Yılmaz",
      age: "20",
      email: "ejeydasdf@example.com",
    },
    {
      name: "Ayşe",
      surname: "Yılmaz",
      age: "21",
      email: "ejeyd123@example.com",
    },
  ];
  res.json(data);
};
