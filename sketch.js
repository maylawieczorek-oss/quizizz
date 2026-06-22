// Array de perguntas (declarado apenas uma vez)
const perguntas = [
  { questao: "Qual é o lema do Agrinho 2026?", opcoes: ["Agro forte, futuro sustentável", "Produção sem limites", "Exportação acima de tudo", "Tecnologia sem responsabilidade"], resposta: 0 },
  { questao: "O Agrinho busca equilibrar:", opcoes: ["Produção agrícola e meio ambiente", "Lucro e competição", "Urbanização e indústria", "Tecnologia e esportes"], resposta: 0 },
  { questao: "Um dos pilares do Agrinho é:", opcoes: ["Educação e cidadania", "Uso indiscriminado de recursos", "Expansão urbana", "Desmatamento"], resposta: 0 },
  { questao: "O futuro sustentável depende de:", opcoes: ["Consciência ambiental e inovação", "Produção sem limites", "Uso de agrotóxicos", "Ignorar a natureza"], resposta: 0 },
  { questao: "Quem participa do Agrinho?", opcoes: ["Estudantes e professores", "Somente agricultores", "Políticos", "Empresários"], resposta: 0 },
  { questao: "O Agrinho incentiva os jovens a:", opcoes: ["Valorizar o campo e a sustentabilidade", "Abandonar os estudos", "Migrar para grandes cidades", "Ignorar a cidadania"], resposta: 0 },
  { questao: "Qual valor está presente em todas as edições do Agrinho?", opcoes: ["Cidadania e solidariedade", "Individualismo", "Lucro imediato", "Competição desleal"], resposta: 0 },
  { questao: "O equilíbrio entre produção e meio ambiente significa:", opcoes: ["Produzir respeitando a natureza", "Produzir sem limites", "Ignorar recursos naturais", "Desmatar para lucrar"], resposta: 0 },
  { questao: "O Agrinho promove debates sobre:", opcoes: ["Sustentabilidade e inovação", "Esportes urbanos", "Moda rural", "Política partidária"], resposta: 0 },
  { questao: "Qual é o papel dos professores no Agrinho?", opcoes: ["Transmitir valores de cidadania", "Ensinar apenas matemática", "Organizar festas", "Administrar empresas"], resposta: 0 },
  { questao: "O Agrinho valoriza principalmente:", opcoes: ["Educação no campo", "Lucro imediato", "Expansão industrial", "Uso de agrotóxicos"], resposta: 0 },
  { questao: "O futuro sustentável depende da união entre:", opcoes: ["Tecnologia e consciência ambiental", "Lucro e competição", "Indústria e desmatamento", "Produção sem limites"], resposta: 0 },
  { questao: "O Agrinho 2026 destaca a importância de:", opcoes: ["Inovação tecnológica no campo", "Desmatamento", "Uso indiscriminado de recursos", "Expansão industrial"], resposta: 0 },
  { questao: "O programa Agrinho é voltado para:", opcoes: ["Educação e cidadania", "Somente empresários", "Política partidária", "Esportes"], resposta: 0 },
  { questao: "O lema 'Agro forte, futuro sustentável' significa:", opcoes: ["Produzir com responsabilidade ambiental", "Produzir sem limites", "Lucro acima de tudo", "Ignorar a natureza"], resposta: 0 }
];

let indice = 0;
let pontuacao = 0;
let telaFinal = false;
let feedback = "";
let fundo;

function preload() {
  fundo = loadImage("https://copilot.microsoft.com/th/id/BCO.7a62f95d-3c5f-48cb-96ad-5840dde03f3e.png");
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(fundo);

  if (!telaFinal) {
    fill(0);
    text(perguntas[indice].questao, width / 2, 50);

    perguntas[indice].opcoes.forEach((opcao, i) => {
      const y = 150 + i * 70;
      rectMode(CENTER);
      fill(200, 240, 255, 180);
      rect(width / 2, y, 600, 50, 15);
      fill(0);
      text(opcao, width / 2, y);
    });

    fill(0);
    text(feedback, width / 2, 500);
    text(`Pontuação: ${pontuacao}`, width / 2, 550);
  } else {
    fill(0);
    text("Quiz finalizado!", width / 2, 200);
    text(`Sua pontuação: ${pontuacao} / ${perguntas.length}`, width / 2, 250);
  }
}

function mousePressed() {
  if (!telaFinal) {
    perguntas[indice].opcoes.forEach((_, i) => {
      const y = 150 + i * 70;
      if (mouseX > width / 2 - 300 && mouseX < width / 2 + 300 &&
          mouseY > y - 25 && mouseY < y + 25) {
        feedback = i === perguntas[indice].resposta ? "✅ Correto!" : "❌ Errado!";
        if (i === perguntas[indice].resposta) pontuacao++;
        indice++;
        if (indice >= perguntas.length) telaFinal = true;
      }
    });
  }
}
