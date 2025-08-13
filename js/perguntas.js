export const perguntas = [
    {
        enunciado: "Uma luz fraca ilumina um painel na parede. Ele exibe uma contagem regressiva de 60 minutos e a frase: 'A única saída conhecida é uma porta à sua frente, mas ela está trancada. Você pode tentar forçar a abertura manualmente ou procurar uma chave. O que você faz?",
        alternativas: [
            {
                texto: "Tentar arrombar a porta com o ombro",
                afirmacao: ["Você decide agir por impulso, usando a força bruta para tentar arrombar a porta.", "Você sente a adrenalina correndo e tenta forçar a porta com toda a sua força, mas ela não cede."],
                proxima: 1,
            },
            {
                texto: "Procurar a chave em uma caixa de ferramentas próxima",
                afirmacao: ["Com calma, você analisa a situação e decide procurar por ferramentas ou chaves.", "Você encontra uma chave de fenda e, com um pouco de esforço, consegue abrir um painel de controle ao lado da porta."],
                proxima: 2,
            },
        ],
    },
    {
        enunciado: "Após forçar a porta (ou não), você se depara com um corredor escuro. No fundo, há duas opções de caminho: um à esquerda parece mais claro, mas você ouve ruídos estranhos. O caminho à direita parece silencioso, mas há marcas de arranhões no chão. Para onde você vai?",
        alternativas: [
            {
                texto: "Ir para a esquerda, em direção aos ruídos",
                afirmacao: ["Você é corajoso e decide enfrentar o desconhecido, caminhando em direção ao som.", "A curiosidade vence o medo, e você avança lentamente, atento a cada detalhe do ambiente."],
                proxima: 3,
            },
            {
                texto: "Ir para a direita, evitando os ruídos",
                afirmacao: ["Você decide ser cauteloso e seguir o caminho mais silencioso, evitando qualquer perigo potencial.", "O instinto de sobrevivência fala mais alto, e você opta por seguir o caminho menos arriscado."],
                proxima: 4,
            },
        ],
    },
    {
        enunciado: "Você encontra uma sala com um gerador de energia que está desligado. Uma tela exibe uma mensagem codificada que pode ajudá-lo a religar o gerador, mas você precisa de um código. A mensagem diz: 'Se você tentar inserir o código errado, um alarme de segurança será ativado e você perderá tempo precioso.'",
        alternativas: [
            {
                texto: "Procurar por pistas em uma mesa próxima",
                afirmacao: ["Você confia na sua capacidade de dedução e procura por pistas no ambiente.", "Você encontra um diário de bordo com anotações sobre o gerador, o que o ajuda a decifrar o código."],
                proxima: 3,
            },
            {
                texto: "Tentar adivinhar o código e religar o gerador",
                afirmacao: ["Impaciente, você decide arriscar e tentar adivinhar o código, mas o alarme é disparado.", "O alarme de segurança começa a tocar, atraindo a atenção de criaturas desconhecidas."],
                proxima: 4,
            },
        ],
    },
    {
        enunciado: "No caminho adiante, você encontra uma parede de vidro, mas ela está sendo lentamente invadida por uma substância líquida que parece corrosiva. O tempo está se esgotando e você precisa agir rápido. Há uma escada de emergência à esquerda, mas ela está coberta por uma camada de vidro. Você pode tentar quebrar o vidro ou procurar outra forma de sair.",
        alternativas: [
            {
                texto: "Tentar quebrar o vidro com um objeto próximo",
                afirmacao: ["Você decide agir de forma impulsiva e quebrar o vidro com um extintor, abrindo um caminho.", "O vidro se estilhaça, e você consegue subir pela escada antes que a substância tóxica o atinja."],
                proxima: 5,
            },
            {
                texto: "Procurar outra saída, mesmo que demore mais tempo",
                afirmacao: ["Você não arrisca e busca uma saída alternativa, perdendo tempo valioso, mas evitando a substância.", "Você encontra uma pequena ventilação, mas ao entrar percebe que o caminho é mais longo e perigoso do que imaginava."],
                proxima: 6,
            },
        ],
    },
    {
        enunciado: "Você chega ao fim de uma longa jornada e encontra duas portas. Ambas parecem levar a um local seguro, mas a da esquerda tem uma marcação estranha, enquanto a da direita tem um painel com um quebra-cabeça. Qual delas você escolhe?",
        alternativas: [
            {
                texto: "Escolher a porta da esquerda, acreditando que é a saída",
                afirmacao: ["Você escolhe a porta da esquerda e encontra uma saída segura, conseguindo escapar do local a tempo.", "Você escapa da sala, mas a sensação de que havia mais a ser descoberto o persegue."],
                proxima: 5,
            },
            {
                texto: "Tentar resolver o quebra-cabeça para abrir a porta da direita",
                afirmacao: ["Você decide encarar o desafio e tenta resolver o quebra-cabeça para abrir a porta da direita.", "Você resolve o quebra-cabeça e a porta se abre, revelando uma sala de controle com informações valiosas sobre o local."],
                proxima: 6,
            },
        ],
    },
    {
        enunciado: "Parabéns, você conseguiu escapar e se salvar!",
        alternativas: [
            {
                texto: "Reiniciar",
                afirmacao: ["Sua fuga foi um sucesso! Você está livre, mas o mistério do local continua em sua mente."],
            },
        ],
    },
    {
        enunciado: "Infelizmente, você não conseguiu escapar a tempo e foi capturado. Fim de jogo.",
        alternativas: [
            {
                texto: "Reiniciar",
                afirmacao: ["O tempo se esgotou e o alarme disparou, mas você promete que da próxima vez irá escapar."],
            },
        ],
    },
];
