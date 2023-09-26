const cards = [
    {
      name: "Thor",
      image:
        "https://i2.wp.com/cinemacao.com/wp-content/uploads/2017/10/thor-3.jpg?resize=1140%2C586&ssl=1",
      attributes: {
        atack: 85,
        defense: 65,
        magic: 70,
      },
    },
    {
      name: "Superman",
      image:
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/03/superman-snyder-cut-divulgacao.jpg",
        attributes: {
        atack: 100,
        defense: 85,
        magic: 40,
      },
    },
  ];


export function fetchCards() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cards);
    }, 1000);
  });
}